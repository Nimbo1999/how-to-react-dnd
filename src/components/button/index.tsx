import { HTMLProps } from 'react';
import { ButtonProps } from './button.props';
import {ButtonContainer} from './styled.button';

function Button({ btnType = 'default', type = 'button', disabled, children, ...props }: ButtonProps) {
    return (
        <ButtonContainer
            btnType={ btnType }
            type={type}
            disabled={disabled}
            {...props}
        >
            {children}
        </ButtonContainer>
    );
}

export default Button;
