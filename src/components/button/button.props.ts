import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    btnType?: 'default' |  'primary' | 'danger',
}

export interface ButtonContainerProps {
    btnType: 'default' | 'primary' | 'danger'
}