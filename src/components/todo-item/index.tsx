import { useTheme } from 'styled-components';
import Button from '../button';
import { Text, Heading } from '../typografy';
import { TodoItemContainer, TodoItemHeader, TodoItemContent, TodoItemFooter } from './styled.todoItem';
import { TodoItemProps } from './todoItem.props';

function TodoItem({id, title, dateTime, description }: TodoItemProps) {
    const theme = useTheme();

    return (
        <TodoItemContainer id={ `todo-item-${id}` }>
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
