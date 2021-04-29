import styled, { css } from 'styled-components';

const inputBase = css`
    outline: none;
    padding: ${({theme}) => theme.spacing(2)};
    margin: ${({theme}) => theme.spacing(1)} 0px;

    border: 1px solid ${({theme}) => theme.pallet.ui.strongGray};
    border-radius: ${({theme}) => theme.spacing(0.5)};

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1em;
    color: ${({theme}) => theme.pallet.text.text};

    transition: border 250ms ease;

    &:focus {
        border: 1px solid ${({theme}) => theme.pallet.ui.primary};
    }
`;

const InputComponent = styled.input`
    ${inputBase};
`;

const TextareaComponent = styled.textarea`
    ${inputBase};
    resize: vertical;
    flex: 1;
    width: 100% !important;
`;

const SelectComponent = styled.select`
    ${inputBase};
`;

const OptionComponent = styled.option``;

export {InputComponent, TextareaComponent, SelectComponent, OptionComponent}