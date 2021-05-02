import { TodoItemProps } from '../todo-item/todoItem.props';

export type taskValues = 'todo' | 'done' | 'doing' | 'canceled';

export interface TodoListProps {
    id: taskValues;
    title: string;
    color: string;
    todos?: TodoItemProps[];
}

export interface TodoListContainerProps {
    color: string;
}

export interface TodoListHeaderProps {
    color: string;
}