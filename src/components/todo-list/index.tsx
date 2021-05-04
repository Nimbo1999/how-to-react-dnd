import { useTheme } from 'styled-components';
import { useDrop } from 'react-dnd';

import { useAppDispatch } from '../../redux/hooks';
import { moveTaskFromListAction } from '../../redux/tasks/tasks.reducer';

import { Heading } from '../typografy';
import TodoItem from '../todo-item';
import { TodoListContainer, TodoListHeader, TodoListContent } from './styled.todoList';
import { TodoListProps } from './todoList.props';
import { TodoItemDragItem } from '../todo-item/todoItem.props';

import { itemTypes } from '../../drag-and-drop/drag.types';

function TodoList({ id, title, color, todos = [] }: TodoListProps) {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: itemTypes.TODO_ITEM,
        drop: (item: TodoItemDragItem, monitor) => {
            if (item.taskListId !== id) {
                dispatch(
                    moveTaskFromListAction({ item: item, taskId: id })
                );
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    return (
        <TodoListContainer color={color} id={ `todo-list-${id}` }>
            <TodoListHeader color={color}>
                <Heading color={theme.pallet.ui.white}>{title}</Heading>
            </TodoListHeader>

            <TodoListContent ref={drop}>
                {todos.map((todo, index) => (
                    <TodoItem
                        key={todo.dateTime}
                        {...todo}
                        index={index}
                    />
                ))}
                {isOver && (
                    <div
                        style={{ background: theme.pallet.ui.red, flex: 1, width: '100%', cursor: 'default' }}
                    />
                )}
            </TodoListContent>
        </TodoListContainer>
    );
}

export default TodoList;
