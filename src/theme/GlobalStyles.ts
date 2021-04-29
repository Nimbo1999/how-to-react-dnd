import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 16px;
    }

    body {
        background-color: ${({ theme }) => theme.pallet.ui.background};
        color: ${({ theme }) => theme.pallet.text.text};
        font-family: 'Roboto', sans-serif;
    }

    button {
        cursor: pointer;
    }

    p {
        font-size: 1rem;
        font-weight: 400;
        color: ${({theme}) => theme.pallet.text.text};
    }

    .ReactModal__Overlay {
        z-index: 100;
        opacity: 0;
        transition: opacity 400ms ease-in-out;
    }

    .ReactModal__Overlay--after-open{
        opacity: 1;
    }

    .ReactModal__Overlay--before-close{
        opacity: 0;
    }

    .ReactModalOverlayOverride {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({theme}) => theme.pallet.text.title}ad;
    }

    .ReactModalContentOverride {
        outline: none;

        position: absolute;
        right: auto;
        bottom: auto;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        display: flex;
        flex-direction: column;

        width: 100%;
        height: 100%;
        max-width: 600px;
        max-height: 600px;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: ${({theme}) => theme.spacing(.5)};

        overflow: auto;
        -webkit-overflow-scrolling: touch;
        padding: ${({theme}) => theme.spacing(3)};
    }
`;

export default GlobalStyle;