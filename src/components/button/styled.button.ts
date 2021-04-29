import styled, { css } from 'styled-components';

import { ButtonContainerProps } from './button.props';

const buttonPrimaryType = css`
    background-color: ${({theme}) => theme.pallet.ui.primary};
    color: ${({theme}) => theme.pallet.ui.light};

    &:hover {
        background-color: ${({theme}) => theme.pallet.ui.primary};
        color: ${({theme}) => theme.pallet.ui.light};
    }
`;

const buttonDangerType = css`
    background-color: ${({theme}) => theme.pallet.ui.red};
    color: ${({theme}) => theme.pallet.ui.light};

    &:hover {
        background-color: ${({theme}) => theme.pallet.ui.red};
        color: ${({theme}) => theme.pallet.ui.light};
    }
`;

const ButtonContainer = styled.button<ButtonContainerProps>`
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${({theme}) => theme.pallet.ui.background};

    display: flex;
    align-items: center;
    justify-content: flex-start;

    font-family: 'Roboto',sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: ${({theme}) => theme.pallet.text.text};

    padding: ${({theme}) => theme.spacing(1)} ${({theme}) => theme.spacing(2)};
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.2);

    transition: all 250ms ease;

    &:hover {
        background-color: ${({theme}) => theme.pallet.ui.strongGray};
        box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
        color: ${({theme}) => theme.pallet.text.title};
    }

    &:active {
        box-shadow: none;
        opacity: 0.8;
    }

    ${({ btnType = 'default' }) => {
        switch (btnType) {
            case 'primary':
                return buttonPrimaryType;

            case 'danger':
                return buttonDangerType;
        
            default:
                return;
        }
    }}

    &:disabled {
        cursor: not-allowed;
        opacity: .6;
    }
`;

export { ButtonContainer };
