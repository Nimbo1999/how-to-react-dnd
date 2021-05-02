import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useTheme } from 'styled-components';

import Button from '../button';
import { Text, Heading } from '../typografy';
import { TodoItemContainer, TodoItemHeader, TodoItemContent, TodoItemFooter } from './styled.todoItem';
import { TodoItemProps } from './todoItem.props';

import { itemTypes } from '../../drag-and-drop/drag.types';

function TodoItem({id, title, dateTime, description, index }: TodoItemProps) {
    const ref = useRef<HTMLDivElement>(null);
    const theme = useTheme();

    const [{ isDragging }, dragRef] = useDrag(() => ({
        type: itemTypes.TODO_ITEM,
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id }
    }));

    const [, dropRef] = useDrop({
        accept: itemTypes.TODO_ITEM,
        hover: (item, monitor) => {
            console.log(item);
            console.log(id);
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
