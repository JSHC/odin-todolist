import { Project } from "./Project";
import { getNextId, getIndexFromId } from "../util";
import PubSub from "../PubSub";

const projects = JSON.parse(localStorage.getItem('projects')) || [];
if (projects.length === 0) {
    addProject('Default');
}

function addProject(name) {
    const newId = getNextId(projects);
    const newProject = new Project(newId, name);
    projects.push(newProject);
    PubSub.publish('ProjectChanged');
    return newProject;
}

function getProjects() {
    return projects;
}

function getProjectById(id) {
    return projects.find(project => project.id === id);
}

function deleteProject(id) {
    projects.splice(getIndexFromId(projects, id), 1);
    PubSub.publish('ProjectChanged');
}

PubSub.subscribe('ProjectChanged', () => {
    localStorage.setItem('projects', JSON.stringify(projects));
});

export { addProject, getProjects, getProjectById, deleteProject }