import { createSlice } from '@reduxjs/toolkit';

import { TodoListProps } from '../../components/todo-list/todoList.props';
import { theme } from '../../theme/theme';

import { createTask } from './tasks.actions';


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
    createTaskAction: createTask,
  },
});

export const { createTaskAction } = tasksSlice.actions;

export default tasksSlice.reducer;
