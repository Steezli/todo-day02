import Component from './Component.js';

class TodoList extends Component {

    render() {
        const todos = this.props.todos;
        console.log(todos);
    }

    renderTemplate() {
        return /*html*/`
            <ul id="todo">
                <li>
                    <label>
                        <input type="checkbox" name="task">learn templates
                    </label>
                </li>
            </ul>
        `;
    }
}

export default TodoList;