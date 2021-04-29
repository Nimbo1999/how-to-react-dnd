export interface TodoItemProps {
    id: string,
    title: string,
    dateTime: string,
    description: string,
}

export interface TodoItemContainerProps {
    isDragging?: boolean;
}