import { PayloadAction } from '@reduxjs/toolkit';
import { TodoListReducerState } from './tasks.reducer';

import { TodoListProps } from '../../components/todo-list/todoList.props';
import { TodoItemProps, TodoItemDragItem } from '../../components/todo-item/todoItem.props';

import { taskValues } from '../../components/todo-list/todoList.props';
import { MoveTaskFromListAction, MoveTaskOrderAction } from './tasks.interfaces';

const createTask = (state: TodoListReducerState, action: PayloadAction<TodoItemProps>) => ({
    ...state,
    todo: {
        ...state.todo,
        todos: [
            ...state.todo.todos!,
            action.payload
        ]
    }
});

const moveTaskFromList = (state: TodoListReducerState, action: PayloadAction<MoveTaskFromListAction>) => {

    const itemId = action.payload.item.id;
    const taskName = action.payload.taskId;

    for (const key in state) {
        const groupKey = key as taskValues;
        const taskGroup = state[groupKey] as TodoListProps;

        if (taskGroup.todos && taskGroup.todos.some(item => item.id === itemId)) {
            if (groupKey === taskName) return state;
            
            const taskId = taskGroup.todos.findIndex(task => task.id === itemId);

            const task = taskGroup.todos[taskId];

            const newTodos = taskGroup.todos!.filter(task => task.id !== itemId);
            const otheList = [ ...state[taskName].todos!, task ];

            return {
                ...state,
                [taskName]: {
                    ...state[taskName],
                    todos: otheList
                },
                [key]: {
                    ...state[groupKey],
                    todos: newTodos
                }
            }
        }
    }

    return state;
};

const moveTaskOrder = (state: TodoListReducerState, action: PayloadAction<MoveTaskOrderAction>) => {
    const { payload } = action;
    const { from, to, taskListId } = payload;

    const draggedItem = state[taskListId].todos![from];

    state[taskListId].todos!.splice(from, 1);
    state[taskListId].todos!.splice(to, 0, draggedItem);
}

export { createTask, moveTaskFromList, moveTaskOrder }