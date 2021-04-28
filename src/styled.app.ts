import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100vw;
`;

const SectionFooter = styled.footer`
    display: flex;
    justify-content: center;

    width: 100%;
    padding: ${({theme}) => theme.spacing(1)};

    background-color: ${({theme}) => theme.pallet.ui.primary};
`;

export { Container, SectionFooter };