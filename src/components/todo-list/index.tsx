import { useTheme } from 'styled-components';

import { Heading } from '../typografy';
import TodoItem from '../todo-item';
import { TodoListContainer, TodoListHeader, TodoListContent } from './styled.todoList';
import { TodoListProps } from './todoList.props';

function TodoList({ id, title, color }: TodoListProps) {
    const theme = useTheme();

    return (
        <TodoListContainer color={color} id={ `todo-list-${id}` }>
            <TodoListHeader color={color}>
                <Heading color={theme.pallet.ui.white}>{title}</Heading>
            </TodoListHeader>

            <TodoListContent>
                <TodoItem
                    id="Test1"
                    title="Nome da Task"
                    dateTime="2021-04-28T16:17:52.978Z"
                    description="This is a description for this task"
                />
            </TodoListContent>
        </TodoListContainer>
    );
}

export default TodoList;
