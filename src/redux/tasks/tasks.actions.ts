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

export { createTask }