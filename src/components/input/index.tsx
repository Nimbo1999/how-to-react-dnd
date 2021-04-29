import { HTMLAttributes } from 'react';

import { InputProps, TextareaProps } from './input.props';
import { InputComponent, TextareaComponent, SelectComponent, OptionComponent } from './styled.input';

function Input({value, type, ...props}: InputProps) {
    return (
        <InputComponent
            value={value}
            type={type}
            {...props}
        />
    );
}

function Textarea({ value, ...props }: TextareaProps) {
    return (
        <TextareaComponent
            value={value}
            {...props}
        />
    );
}

function Select(props: HTMLAttributes<HTMLSelectElement>) {
    return (
        <SelectComponent {...props} />
    );
}

function Option(props: HTMLAttributes<HTMLOptionElement>) {
    return (
        <OptionComponent {...props} />
    );
}

export { Input, Textarea, Select, Option };
