import { ButtonProps } from './button.props';
import {ButtonContainer} from './styled.button';

function Button({ btnType = 'default', children }: ButtonProps) {
    return (
        <ButtonContainer btnType={ btnType }>
            {children}
        </ButtonContainer>
    );
}

export default Button;
