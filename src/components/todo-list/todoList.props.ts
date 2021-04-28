import { TodoItemProps } from '../todo-item/todoItem.props';

export interface TodoListProps {
    id: string;
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