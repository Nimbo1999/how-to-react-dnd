import { useTheme } from 'styled-components';

import { Heading } from '../typografy';
import TodoItem from '../todo-item';
import { TodoListContainer, TodoListHeader, TodoListContent } from './styled.todoList';
import { TodoListProps } from './todoList.props';

function TodoList({ id, title, color, todos = [] }: TodoListProps) {
    const theme = useTheme();

    return (
        <TodoListContainer color={color} id={ `todo-list-${id}` }>
            <TodoListHeader color={color}>
                <Heading color={theme.pallet.ui.white}>{title}</Heading>
            </TodoListHeader>

            <TodoListContent>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.dateTime}
                        {...todo}
                    />    
                ))}
            </TodoListContent>
        </TodoListContainer>
    );
}

export default TodoList;
