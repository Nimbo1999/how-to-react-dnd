import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

import { TodoItemProps } from '../../components/todo-item/todoItem.props';
import { taskValues, TodoListProps } from '../../components/todo-list/todoList.props';

export const selectTasks = (state: RootState) => state.tasks;

export const selectTodo = createSelector(
    [selectTasks],
    tasks => tasks.todo
);

export const selectDoing = createSelector(
    [selectTasks],
    tasks => tasks.doing
);

export const selectDone = createSelector(
    [selectTasks],
    tasks => tasks.done
);

export const selectCanceled = createSelector(
    [selectTasks],
    tasks => tasks.canceled
);

export const selectListHolder = (task: TodoItemProps) =>  createSelector(
    [selectTasks],
    tasks => {
        for (const key in tasks) {
            const groupKey = key as taskValues;
            const taskGroup = tasks[groupKey] as TodoListProps;
    
            if (taskGroup.todos && taskGroup.todos.some(item => item.id === task.id)) {
                return taskGroup.id;
            }
        }
    }
);