import todos from '../data/todos.js';
import filterTodos from '../src/filter.js';

const test = QUnit.test;
QUnit.module('filter');

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