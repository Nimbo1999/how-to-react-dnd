import { TodoListReducerState } from './tasks.reducer';

import { TodoListProps } from '../../components/todo-list/todoList.props';

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

    const itemId = action.payload.itemId.id;
    const taskName: taskValues = action.payload.taskId;

    for (const key in state) {
        const groupKey = key as taskValues;
        const taskGroup = state[groupKey] as TodoListProps;

        if (taskGroup.todos && taskGroup.todos.some(item => item.id === itemId)) {
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

export { createTask, moveTask }