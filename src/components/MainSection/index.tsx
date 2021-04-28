import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Heading, Paragraph } from '../typografy';
import Button from '../button';
import TodoSection from '../todo-section';

import {
    MainSectionContainer, SectinHeader, HeaderContent, HeaderExtra, SectionWrapper
} from './styled.mainSection';

function MainSection() {
    return (
        <MainSectionContainer>
            <SectionWrapper>
                <SectinHeader>
                    <HeaderContent>
                        <Heading>Todo List</Heading>
                        <Paragraph>Cadastre novos itens para realizar e mova-os conforme desejar.</Paragraph>
                    </HeaderContent>

                    <HeaderExtra>
                        <Button btnType="primary">
                            Cadastrar tarefa
                        </Button>
                    </HeaderExtra>
                </SectinHeader>

                <hr />

                <DndProvider backend={HTML5Backend}>
                    <TodoSection />
                </DndProvider>
            </SectionWrapper>
        </MainSectionContainer>
    );
}

export default MainSection;
