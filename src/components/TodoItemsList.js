import { updateTodoItem } from "../modules/TodoItem/TodoItemController";
import { publishLink } from "../modules/util";
import './TodoItemsList.css';
import Checkbox from "./Checkbox";

class TodoItemsList {
    constructor(todoItems) {
        this.todoItems = todoItems;
    }

    render() {
        if (!this.todoItems) {
            return;
        }

        const todoItemsList = document.createElement('ul');
        todoItemsList.className = 'todo-items-list';

        for (let todoItem of this.todoItems) {
            const todoItemsListItem = document.createElement('li');
            const checkBox = new Checkbox(todoItem.isComplete, () => {
                todoItem.isComplete = !todoItem.isComplete;
                updateTodoItem(todoItem);
            });
            todoItemsListItem.appendChild(checkBox);
            const todoItemContent = document.createElement('div');
            todoItemContent.className = 'todo-items-list-item-content';
            
            const todoItemName = document.createElement('span');
            todoItemName.textContent = todoItem.title;
            todoItemContent.appendChild(todoItemName);
            
            const todoItemDueDate = document.createElement('span');
            todoItemDueDate.textContent = todoItem.dueDate;
            todoItemContent.appendChild(todoItemDueDate);

            todoItemsListItem.addEventListener('click', (e) => {
                console.log(e.target);
                if (e.target === todoItemsListItem || todoItemContent.contains(e.target)) {
                    publishLink('TodoItemDetail', todoItem.id);
                }
                
            });

            todoItemsListItem.appendChild(todoItemContent);
            todoItemsList.appendChild(todoItemsListItem);
        }
        return todoItemsList;
    }
}

export default TodoItemsList;