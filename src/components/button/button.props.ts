import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    btnType?: 'default' |  'primary' | 'danger';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export interface ButtonContainerProps {
    btnType: 'default' | 'primary' | 'danger'
}