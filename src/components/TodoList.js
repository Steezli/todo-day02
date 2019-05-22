import Component from './Component.js';
import TodoItem from './TodoItem.js';

class TodoList extends Component {

    render() {
        const dom = this.renderDOM();
        const todos = this.props.todos;

        todos.forEach(todo => {
            const todoItem = new TodoItem({ todo });
            const todoItemDOM = todoItem.render();
            dom.appendChild(todoItemDOM);
        });
    }

    renderTemplate() {
        return /*html*/`
            <ul id="todo"></ul>
        `;
    }
}

export default TodoList;