import Component from './Component.js';

class App extends Component {

    renderTemplate() {
        return /*html*/`
        <div>
            <header>
                <h1>To-Do list</h1>
            </header>
            <main>
            </main>
                <ul id="todo">
                    <label>
                        <input type="checkbox" name="task">learn templates
                    </label>
                </ul>
        </div>
        `;
    }
}

export default App;