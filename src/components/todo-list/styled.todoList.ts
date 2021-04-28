import styled from 'styled-components';

import { TodoListHeaderProps, TodoListContainerProps } from './todoList.props';

const TodoListContainer = styled.div<TodoListContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${({theme}) => theme.spacing(38)};
    border-radius: ${({theme}) => theme.spacing(.5)};
    border: 1px solid ${({color, theme}) => color ?? theme.pallet.ui.green};

    overflow: hidden;
`;

const TodoListHeader = styled.header<TodoListHeaderProps>`
    display: flex;
    justify-content: center;

    background-color: ${({color, theme}) => color ?? theme.pallet.ui.green};
    padding: ${({theme}) => theme.spacing(1)};
`;

const TodoListContent = styled.div`
    flex: 1;
    display: flex;

    padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(1)};
`;

export { TodoListContainer, TodoListHeader, TodoListContent };