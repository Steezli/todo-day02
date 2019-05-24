function filterTodos(todos, filter) {

    return todos.filter(todo => {
        const task = todo
            .task
            .toLowerCase()
            .includes(filter.text.toLowerCase());
        
        // const filterCompleted = filter.completed.toString();
        const todoCompleted = todo.completed.toString();
        
        let completed = todoCompleted.includes(filter.completed);
        // const completed = !filter.completed || todo.completed === filter.completed;
        
        if(filter.completed === 'all') {
            completed = true;
        }
        
        return task && completed;
        
    });
}

export default filterTodos;