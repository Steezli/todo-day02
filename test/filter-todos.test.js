import todos from '../data/todos.js';

const test = QUnit.test;
QUnit.module('filter');


function filterTodos(todos, filter) {
    return todos.filter(todo => {

        const task = todo
            .task
            .toLowerCase()
            .includes(filter.task.toLowerCase());

        const filterCompleted = filter.completed.toString();
        const todoCompleted = todo.completed.toString();

        let completed = todoCompleted.includes(filterCompleted);
        // const completed = !filter.completed || todo.completed === filter.completed;
        return task && completed;
    });
}

test('not completed returns not completed', assert => {
    //arrange
    const filter = {
        task: '',
        completed: false
    };
    //act
    const filtered = filterTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [
        {
            task: 'learn forEach',
            completed: false
        }
    ]);
});

test('completed returns completed', assert => {
    //arrange
    const filter = {
        task: '',
        completed: true
    };
    //act
    const filtered = filterTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [
        {
            task: 'learn templates',
            completed: true
        },
        {
            task: 'add header using htmlToDOM',
            completed: true
        }
    ]);
});

test('All returns all', assert => {
    //arrange
    const filter = {
        task: 'e',
        completed: ''
    };
    //act
    const filtered = filterTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, todos);
});

test('empty string returns all tasks', assert => {
    //arrange
    const filter = {
        task: '',
        completed: ''
    };
    //act
    const filtered = filterTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, todos);
});

test('filters tasks by string', assert => {
    //arrange
    const filter = {
        task: 'learn T',
        completed: ''
    };
    //act
    const filtered = filterTodos(todos, filter);
    //assert
    assert.deepEqual(filtered, [{
        task: 'learn templates',
        completed: true
    }]);
});