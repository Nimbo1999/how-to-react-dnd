import { HTMLAttributes } from 'react';

import {Container} from './styled.button';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    btnType?: 'danger' | 'primary',
}

function Button({ btnType = 'primary', children }: ButtonProps) {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default Button;
