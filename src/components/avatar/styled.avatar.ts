import styled from 'styled-components';

const AvatarWrapper = styled.div`
    width: ${({theme}) => theme.spacing(5)};
    height: ${({theme}) => theme.spacing(5)};

    border-radius: ${({theme}) => theme.spacing(3)};
    box-shadow: 0px 3px 4px 2px rgba(0, 0, 0, 0.20);
    border: 1px solid ${({theme}) => theme.pallet.ui.background};

    background-color: ${({theme}) => theme.pallet.ui.strongBlue};
    background-image: url("https://avatars.githubusercontent.com/u/42950729?s=400&u=43f4efdd8199d2e3bb146d3089dd97f5e04e06d6&v=4");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export { AvatarWrapper }
