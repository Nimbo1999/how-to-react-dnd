import styled from 'styled-components';
import { HeadingProps, ParagraphProps, TextProps } from './typografy.props';

const Heading = styled.h2<HeadingProps>`
    color: ${({color, theme}) => color ? color : theme.pallet.text.title};

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.3125em;
`;

const Paragraph = styled.p<ParagraphProps>`
    color: ${({theme, color}) => color ? color : theme.pallet.text.text};

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1em;
`;

const Text = styled.span<TextProps>`
    color: ${({theme, color}) => color ? color : theme.pallet.text.text};

    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    font-style: ${({fontStyle = 'normal'}) => fontStyle};
    line-height: 1em;
    text-decoration: ${({underline}) => underline ? 'underline' : 'none'};
`;

export { Heading, Paragraph, Text }