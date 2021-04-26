import styled, { css } from 'styled-components';

interface ContainerProps {
    type?: string;
}

const Container = styled.button<ContainerProps>`
    border: none;
    outline: none;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Roboto',sans-serif;
    font-size: 1rem;
    color: ${({theme}) => theme.pallet.text.text};
    font-weight: 500;

    padding: ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(2)};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

    // TODO: Criar os estilos para o botão primario e danger.
`;

export { Container };
