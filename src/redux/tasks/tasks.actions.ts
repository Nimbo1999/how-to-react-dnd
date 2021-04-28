import {  } from '@reduxjs/toolkit';

import { TodoListReducerState } from './tasks.reducer';

interface ReduxAction {
    payload: any,
    type: string,
}

const setTodo = (state: TodoListReducerState, action: ReduxAction) => ({
    ...state,
    todo: action.payload
});

export { setTodo }