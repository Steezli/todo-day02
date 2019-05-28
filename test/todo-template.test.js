import TodoItem from '../src/components/TodoItem.js';
const test = QUnit.test;

test('template', assert => {
    //arrange
    const todo = {
        task: 'learn templates',
        completed: true
    };
    const expected = /*html*/`
    <label>
        <li>
            <input type="checkbox" checked>learn templates
        </li>
    </label>
    `;
    //act
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});

test('template, false', assert => {
    //arrange
    const todo = {
        task: 'learn templates',
        completed: false
    };
    const expected = /*html*/`
    <label>
        <li>
            <input type="checkbox" >learn templates
        </li>
    </label>
    `;
    //act
    const todoItem = new TodoItem({ todo });
    const html = todoItem.renderTemplate();
    //assert
    assert.htmlEqual(html, expected);
});