import { TodoItemDragItem } from '../../components/todo-item/todoItem.props';
import { taskValues } from '../../components/todo-list/todoList.props';

export interface MoveTaskFromListAction {
    item: TodoItemDragItem;
    taskId: taskValues;
}

export interface MoveTaskOrderAction {
    from: number;
    to: number;
}