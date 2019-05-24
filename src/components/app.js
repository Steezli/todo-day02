import todos from '../../data/todos.js';
import Component from './Component.js';
import Header from './Header.js';
import TodoList from './TodoList.js';
import AddTodo from './AddTodo.js';
import Filter from './filter.todos.js';
import filterTodos from '../filter.js';

class App extends Component {

    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);

        const todoList = new TodoList({
            todos,
            onDone: (doneItem) => {
                const index = todos.indexOf(doneItem);
                todos[index].completed = !todos[index].completed;
                todoList.update({ todos });
            }
        });

        const todoListDOM = todoList.render();
        main.appendChild(todoListDOM);
        
        const addTodo = new AddTodo({
            onAdd: (newTodo) => {
                todos.unshift(newTodo);
                todoList.update({ todos });
            }

        });
        const addTodoDOM = addTodo.render();
        dom.insertBefore(addTodoDOM, main);

        const filter = new Filter({
            onFilter: filter => {
                const filtered = filterTodos(todos, filter);
                todoList.update({ todos: filtered });
            }
        });
        dom.insertBefore(filter.render(), main);


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