import { getProjects } from '../Project/ProjectController';
import { getTodoItems, getTodoItemsToday, getTodoItemsUpcoming } from '../TodoItem/TodoItemController';
import ProjectTodoItemMediator from "../ProjectTodoItemMediator";
import { publishLink } from '../util';
import './sidebar.css';
import PubSub from '../PubSub';
import SidebarLinkItem from '../../components/SidebarLinkItem';
import allSvg from '../../../assets/icons/list-box.svg';
import todaySvg from '../../../assets/icons/calendar-blank.svg';
import upcomingSvg from '../../../assets/icons/calendar-clock.svg';

class Sidebar {
    mainLinks = [
        {'title':'All items','callback':getTodoItems,'icon':allSvg},
        {'title':'Today','callback':getTodoItemsToday, 'icon':todaySvg},
        {'title':'Upcoming','callback':getTodoItemsUpcoming, 'icon':upcomingSvg}
    ]
    render() {
        const sidebarDiv = document.createElement('div');
        sidebarDiv.className = 'sidebar';

        const mainLinksList = document.createElement('ul');
        mainLinksList.className = 'sidebar-link-list';
        for (let link of this.mainLinks) {
            const mainLinkItem = new SidebarLinkItem(link.title, link.callback, link.icon || null).render();
            mainLinksList.appendChild(mainLinkItem);
        }

        const projectList = document.createElement('ul');
        projectList.className = 'sidebar-link-list'

        const projectListHeader = document.createElement('li');
        projectListHeader.classList.add('sidebar-link-list-header', 'sidebar-link-item');
        const projectListHeaderLink = document.createElement('a');
        projectListHeaderLink.href = '#';
        projectListHeaderLink.text = 'Projects';
        projectListHeader.appendChild(projectListHeaderLink);
        projectList.appendChild(projectListHeader);

        for (let project of getProjects()) {
            const projectItem = new SidebarLinkItem(
                project.name, 
                () => ProjectTodoItemMediator.getTodoItemsForProject(project.id),
                null,
                project.id)
                .render();
            projectList.appendChild(projectItem);
        }

        sidebarDiv.appendChild(mainLinksList);
        sidebarDiv.appendChild(projectList);
        return sidebarDiv;
    }
}

export default new Sidebar();