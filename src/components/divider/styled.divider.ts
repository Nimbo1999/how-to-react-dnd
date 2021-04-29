import styled from 'styled-components';

const Rule = styled.hr`
    border: 1px solid ${({theme}) => theme.pallet.text.hint};
    width: 100%;
    margin: ${({theme}) => theme.spacing(2)} 0px;
`;

export { Rule }