import styled from 'styled-components';
import { TodoItemContainerProps } from './todoItem.props';

const TodoItemContainer = styled.div<TodoItemContainerProps>`
    display: flex;
    flex-direction: column;

    height: fit-content;
    width: 100%;
    padding: ${({theme}) => theme.spacing(2)};
    margin: ${({theme}) => theme.spacing(1)} 0px;

    background-color: ${({theme}) => theme.pallet.ui.white};
    border-radius: ${({theme}) => theme.spacing(.5)};
    border: 1px solid ${({theme}) => theme.pallet.ui.light};

    overflow: hidden;

    &:first-child {
        margin: 0px 0px ${({theme}) => theme.spacing(1)} 0px;
    }

    &:last-child {
        margin: ${({theme}) => theme.spacing(1)} 0px 0px 0px;
    }

    &:hover {
        cursor: grab;
    }
`;

const TodoItemHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 0.875rem;
    }
`;

const TodoItemContent = styled.header`
    flex: 1;
    padding: ${({theme}) => theme.spacing(2)} 0px;
`;

const TodoItemFooter = styled.header`
    display: flex;
    justify-content: flex-end;
`;

export { TodoItemContainer, TodoItemHeader, TodoItemContent, TodoItemFooter };
