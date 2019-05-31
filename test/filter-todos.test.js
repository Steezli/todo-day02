import filterTodos from '../src/filter.js';
const test = QUnit.test;

// QUnit.module('filter todos');

const todos = [
    {
        task: 'learn templates',
        completed: true
    },
    {
        task: 'learn forEach',
        completed: false
    },
];

test('return todos with searchParams', assert => {
    //arrange
    const filter = {
        task: 'te',
        radio: ''
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, [todos[0]]);
});

test('return all if no filter/on default/refresh', assert => {
    //arrange
    const filter = {
        task: '',
        radio: ''
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, todos);
});

test('All returns all', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'all'
    };

    //act
    const expected = filterTodos(todos, filter);
    //assert
    assert.deepEqual(expected, todos);
});

test('completed returns completed', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'true'
    };

    //act
    const result = filterTodos(todos, filter);
    //assert
    assert.deepEqual(result, [todos[0]]);
});

test('incomplete returns all incompleted', assert => {
    //arrange
    const filter = {
        task: '',
        radio: 'false'
    };

    //act
    const result = filterTodos(todos, filter);
    //assert
    assert.deepEqual(result, [todos[1]]);
});