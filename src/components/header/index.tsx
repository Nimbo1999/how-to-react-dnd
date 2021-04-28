import { HeaderContainer } from './styled.header';
import { Heading } from '../typografy';
import { useTheme } from 'styled-components';
import Avatar from '../avatar';

function Header() {
    const theme = useTheme();

    return (
        <HeaderContainer>
            <Heading color={theme.pallet.ui.background}>
                Header
            </Heading>

            <Avatar />
        </HeaderContainer>
    );
}

export default Header;