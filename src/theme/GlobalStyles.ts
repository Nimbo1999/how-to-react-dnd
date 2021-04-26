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
`;

export default GlobalStyle;