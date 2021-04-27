import { Heading, Paragraph } from '../typografy';
import Button from '../button';
import { MainSectionContainer, SectinHeader, HeaderContent, HeaderExtra, SectionWrapper } from './styled.mainSection';

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
            </SectionWrapper>
        </MainSectionContainer>
    );
}

export default MainSection;
