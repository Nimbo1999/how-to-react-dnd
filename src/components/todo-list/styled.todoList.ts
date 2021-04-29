import styled from 'styled-components';

import { TodoListHeaderProps, TodoListContainerProps } from './todoList.props';

const TodoListContainer = styled.div<TodoListContainerProps>`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 0px ${({theme}) => theme.spacing(2)};
    border-radius: ${({theme}) => theme.spacing(.5)};
    border: 1px solid ${({color, theme}) => color ?? theme.pallet.ui.green};

    &:first-child {
        margin: 0px ${({theme}) => theme.spacing(2)} 0px 0px;
    }

    &:last-child {
        margin: 0px 0px 0px ${({theme}) => theme.spacing(2)};
    }

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
    flex-direction: column;

    padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(1)};
`;

export { TodoListContainer, TodoListHeader, TodoListContent };