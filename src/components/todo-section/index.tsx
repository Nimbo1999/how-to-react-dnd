import { useAppSelector } from '../../redux/hooks';
import { selectTodo, selectDoing, selectDone, selectCanceled } from '../../redux/tasks/tasks.selector';

import TodoList from '../todo-list';

import { TodoSectionContainer } from './styled.todoSection';

function TodoSection() {
    const todo = useAppSelector(selectTodo);
    const doing = useAppSelector(selectDoing);
    const done = useAppSelector(selectDone);
    const canceled = useAppSelector(selectCanceled);

    return (
        <TodoSectionContainer>
            <TodoList
                {...todo}
            />
            <TodoList
                {...doing}
            />
            <TodoList
                {...done}
            />
            <TodoList
                {...canceled}
            />
        </TodoSectionContainer>
    );
}

export default TodoSection;
