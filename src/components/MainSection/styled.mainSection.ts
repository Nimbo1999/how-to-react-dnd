import styled from 'styled-components';

const MainSectionContainer = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;
`;

const SectionWrapper = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: ${({theme}) => theme.spacing(4)} ${({theme}) => theme.spacing(8)};
`;

const SectinHeader = styled.header`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderContent = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
`;

const HeaderExtra = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const ModalFooter = styled.footer`
    display: flex;
    justify-content: flex-end;
    margin-top: ${({theme}) => theme.spacing(2)};
`;

const Form = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

export {
    MainSectionContainer, SectinHeader, HeaderContent, HeaderExtra, SectionWrapper, ModalContent,
    ModalFooter, Form
}
