import { useState, FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useTheme } from 'styled-components';
import { MdAddCircle } from 'react-icons/md';

import { createTaskAction } from '../../redux/tasks/tasks.reducer';

import { Input, Textarea } from '../input';
import Divider from '../divider';
import { Heading, Paragraph, Text } from '../typografy';
import Button from '../button';
import TodoSection from '../todo-section';
import { TodoItemProps } from '../todo-item/todoItem.props';
import {
    MainSectionContainer, SectinHeader, HeaderContent, HeaderExtra, SectionWrapper,
    ModalContent, ModalFooter, Form
} from './styled.mainSection';
import Modal from '../modal';

import makeid from '../../utils/randomString';

const initialTaskState = {
    id: '',
    dateTime: '',
    description: '',
    title: '',
    index: undefined,
}

function MainSection() {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const [newTask, setNewTask] = useState<TodoItemProps>(initialTaskState);

    const theme = useTheme();

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const brandNewTask = { ...newTask }
        brandNewTask.id = makeid(4);
        brandNewTask.dateTime = new Date().toISOString();

        dispatch(createTaskAction(brandNewTask));
        setNewTask(initialTaskState);
        setIsOpen(false);
    }

    function handleChangeTitle(event: FormEvent<HTMLInputElement>) {
        const value = event.currentTarget.value;

        setNewTask({...newTask, title: value} as TodoItemProps);
    }

    function handleChangeDescription(event: FormEvent<HTMLTextAreaElement>) {
        const value = event.currentTarget.value;

        setNewTask({...newTask, description: value} as TodoItemProps);
    }

    const isButtonDisabled = Boolean(newTask.title) && Boolean(newTask.description);

    return (
        <MainSectionContainer>
            <SectionWrapper>
                <SectinHeader>
                    <HeaderContent>
                        <Heading>Todo List</Heading>
                        <Paragraph>Cadastre novos itens para realizar e mova-os conforme desejar.</Paragraph>
                    </HeaderContent>

                    <HeaderExtra>
                        <Button btnType="primary" onClick={() => {
                            console.log('triggering')
                            setIsOpen(true);
                        }}>
                            Cadastrar tarefa
                            <MdAddCircle
                                size={16}
                                color={theme.pallet.ui.white}
                                style={{ marginLeft: theme.spacing(1) }}
                            />
                        </Button>
                    </HeaderExtra>
                </SectinHeader>

                <Divider />

                <DndProvider backend={HTML5Backend}>
                    <TodoSection />
                </DndProvider>
            </SectionWrapper>

            <Modal
                isOpen={isOpen}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={() => setIsOpen(false)}
            >
                <Form onSubmit={handleSubmit}>
                    <Heading>Cadastrar nova tarefa</Heading>

                    <Divider />
                    
                    <Text
                        style={{ marginBottom: theme.spacing(2)}}
                        color={theme.pallet.text.text}
                    >
                        Quando você criar uma tarefa, ela vai aparecer dentro da seção 'A fazer'.
                    </Text>

                    <ModalContent>
                        <Input
                            placeholder="Título da tarefa"
                            type="text"
                            onChange={handleChangeTitle}
                            value={newTask.title}
                        />

                        <Textarea
                            placeholder="Descrição da tarefa"
                            onChange={handleChangeDescription}
                            value={newTask.description}
                        />
                    </ModalContent>

                    <ModalFooter>
                        <Button
                            btnType="primary"
                            type="submit"
                            disabled={!isButtonDisabled}
                        >
                            Criar Tarefa
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </MainSectionContainer>
    );
}

export default MainSection;
