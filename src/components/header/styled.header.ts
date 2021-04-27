import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: ${({theme}) => theme.pallet.ui.primary};
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.25);

    padding: ${({theme}) => theme.spacing(2)} ${({theme}) => theme.spacing(3)};
`;

export { HeaderContainer }