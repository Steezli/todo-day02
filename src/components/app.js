import todos from '../../data/todos.js';
import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';

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

        const todoList = new TodoList(props);
        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);
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