export interface TodoItemProps {
    id: string,
    title: string,
    dateTime: string,
    description: string,
    index?: number,
}

export interface TodoItemContainerProps {
    isDragging?: boolean;
}

export interface TodoItemDragItem {
    id: string;
    index: number;
    taskListId: string;
}