import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useTheme } from 'styled-components';

import { useAppDispatch } from '../../redux/hooks';
import { moveTastOrderAction } from '../../redux/tasks/tasks.reducer';

import Button from '../button';
import { Text, Heading } from '../typografy';
import { TodoItemContainer, TodoItemHeader, TodoItemContent, TodoItemFooter } from './styled.todoItem';
import { TodoItemProps, TodoItemDragItem } from './todoItem.props';

import { itemTypes } from '../../drag-and-drop/drag.types';

function TodoItem({id, title, dateTime, description, index }: TodoItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    const dispatch = useAppDispatch();

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: itemTypes.TODO_ITEM,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id, index }
    }));

    const [, dropRef] = useDrop({
        accept: itemTypes.TODO_ITEM,
        hover: (item: TodoItemDragItem, monitor) => {
            if (item.index === index) return;

            // console.log(item.index, index);
            const targetSize = ref.current?.getBoundingClientRect();
            const draggedOffset = monitor.getClientOffset();

            if (!targetSize || !draggedOffset) return;

            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedTop = draggedOffset.y - targetSize.top;

            if (item.index < index! && draggedTop < targetCenter) return;

            if (item.index > index! && draggedTop > targetCenter) return;

            dispatch(
                moveTastOrderAction({from: item.index, to: index!})
            );
        },
    });

    dragRef(dropRef(ref));

    return (
        <TodoItemContainer id={ `todo-item-${id}` } ref={ref} isDragging={isDragging}>
            <TodoItemHeader>
                <Heading>{title}</Heading>
                <Text color={theme.pallet.text.hint}>{new Date(dateTime).toLocaleDateString('pt-BR')}</Text>
            </TodoItemHeader>

            <TodoItemContent>
                {description}
            </TodoItemContent>

            <TodoItemFooter>
                <Button btnType="danger">
                    Cancelar
                </Button>
            </TodoItemFooter>
        </TodoItemContainer>
    );
}

export default TodoItem;
