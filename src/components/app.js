import todos from '../../data/todos.js';
import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        const main = dom.querySelector('main');
        dom.insertBefore(headerDOM, main);

        const props = {
            todos: todos
        };

        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }

        });
        const addTodoDOM = addTodo.render();
        main.appendChild(addTodoDOM);

        const todoList = new TodoList(props);
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);


        return dom;
    }

    renderTemplate() {
        return /*html*/`
        <div>
            <main>
            </main>
        </div>
        `;
    }
}

export default App;