import { useTheme } from 'styled-components';
import { useDrop } from 'react-dnd';

import { useAppDispatch } from '../../redux/hooks';
import { moveTaskAction } from '../../redux/tasks/tasks.reducer';

import { Heading } from '../typografy';
import TodoItem from '../todo-item';
import { TodoListContainer, TodoListHeader, TodoListContent } from './styled.todoList';
import { TodoListProps } from './todoList.props';

import { itemTypes } from '../../drag-and-drop/drag.types';

function TodoList({ id, title, color, todos = [] }: TodoListProps) {
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const [{ isOver }, drop] = useDrop(() => ({
        accept: itemTypes.TODO_ITEM,
        drop: (_, monitor) => dispatch(moveTaskAction({ itemId: monitor.getItem(), taskId: id })),
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
                {todos.map(todo => (
                    <TodoItem
                        key={todo.dateTime}
                        {...todo}
                    />    
                ))}
                {isOver && (
                    <div
                        style={{ background: 'red', flex: 1, width: '100%' }}
                    />
                )}
            </TodoListContent>
        </TodoListContainer>
    );
}

export default TodoList;
