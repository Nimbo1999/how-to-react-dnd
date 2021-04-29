import { HTMLAttributes } from 'react';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    value?: string;
    type?: string;
}

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
    value?: string;
}