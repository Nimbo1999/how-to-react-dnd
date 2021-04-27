import styled from 'styled-components';

const MainSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;

    width: 100%;
`;

const SectionWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 1200px;
    margin: ${({theme}) => theme.spacing(4)} auto;

    hr {
        margin: ${({theme}) => theme.spacing(3)} 0px;
        border-color: ${({theme}) => theme.pallet.ui.light};
    }
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

export { MainSectionContainer, SectinHeader, HeaderContent, HeaderExtra, SectionWrapper }
