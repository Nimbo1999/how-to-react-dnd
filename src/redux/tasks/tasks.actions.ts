import { TodoListReducerState } from './tasks.reducer';

interface ReduxAction {
    payload: any,
    type: string,
}

const createTask = (state: TodoListReducerState, action: ReduxAction) => ({
    ...state,
    todo: {
        ...state.todo,
        todos: [
            ...state.todo.todos!,
            action.payload
        ]
    }
});

const moveTask = (state: TodoListReducerState, action: ReduxAction) => {
    type taskValues = 'todo' | 'done' | 'doing' | 'canceled';

    const itemId = action.payload.itemId;
    const taskName: taskValues = action.payload.taskId;

    if (state.todo.todos!.some(item => item.id === itemId)) {
        const taskId = state.todo.todos!.findIndex(task => task.id === itemId);

        const task = state.todo.todos![taskId];

        const newTodos = state.todo.todos!.filter(task => task.id !== itemId);
        const otheList = [ ...state[taskName].todos!, task ];

        return {
            ...state,
            [taskName]: {
                ...state[taskName],
                todos: otheList
            },
            todo: {
                ...state.todo,
                todos: newTodos
            }
        }
    }
    // taskName it's with wrong value. need to be the target list id!

    return state
};

export { createTask, moveTask }