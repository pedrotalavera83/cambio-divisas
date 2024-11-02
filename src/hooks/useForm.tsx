import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Record<string, any>>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | { target: { name: string; value: any } }) => {
        const { name, value } = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    return [values, handleChange] as const;
};