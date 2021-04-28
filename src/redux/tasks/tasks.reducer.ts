import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { TodoListProps } from '../../components/todo-list/todoList.props';
import { theme } from '../../theme/theme';

import { setTodo } from './tasks.actions';


export interface TodoListReducerState {
    todo: TodoListProps,
    doing: TodoListProps,
    done: TodoListProps,
    canceled: TodoListProps,
}

const initialState: TodoListReducerState = {
    todo: {
        id: 'todo',
        title: 'A fazer',
        color: theme.pallet.ui.green,
        todos: []
    },
    doing: {
        id: 'doing',
        title: 'Em andamento',
        color: theme.pallet.ui.orange,
        todos: []
    },
    done: {
        id: 'done',
        title: 'Concluído',
        color: theme.pallet.ui.primary,
        todos: []
    },
    canceled: {
        id: 'canceled',
        title: 'Cancelado',
        color: theme.pallet.ui.red,
        todos: []
    },
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTodoAction: setTodo,
  },
});

export const { setTodoAction } = tasksSlice.actions;

export const selectTodo = (state: RootState) => state.tasks.todo;

export const selectDoing = (state: RootState) => state.tasks.doing;

export const selectDone = (state: RootState) => state.tasks.done;

export const selectCanceled = (state: RootState) => state.tasks.canceled;

export default tasksSlice.reducer;
