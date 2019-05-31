import Component from './Component.js';

class TodoItem extends Component {
    render() {
        const listItem = this.renderDOM();
        const onDone = this.props.onDone;
        const todo = this.props.todo;
        const checkbox = listItem.querySelector('input');

        checkbox.addEventListener('click', () => {
            onDone(todo);
        });
        return listItem;

    }

    renderTemplate() {
        const todo = this.props.todo;

        let checked = '';

        if(todo.completed) {
            
            checked = 'checked';
        }
        
        return /*html*/`
        <label>
            <li>
                <input type="checkbox" ${checked}>${todo.task}
            </li>
        </label>
        `;
    }
}

export default TodoItem;