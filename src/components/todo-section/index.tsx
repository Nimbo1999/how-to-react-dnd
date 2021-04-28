import { useTheme } from 'styled-components';

import TodoList from '../todo-list';

import { TodoSectionContainer } from './styled.todoSection';

function TodoSection() {
    const theme = useTheme();

    return (
        <TodoSectionContainer>
            <TodoList
                id="TodoList1"
                title="A fazer"
                color={ theme.pallet.ui.green }
            />
            <TodoList
                id="TodoList2"
                title="Em andamento"
                color={ theme.pallet.ui.orange }
            />
            <TodoList
                id="TodoList3"
                title="Concluído"
                color={ theme.pallet.ui.primary }
            />
            <TodoList
                id="TodoList4"
                title="Cancelado"
                color={ theme.pallet.ui.red }
            />
        </TodoSectionContainer>
    );
}

export default TodoSection;
