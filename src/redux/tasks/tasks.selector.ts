import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

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