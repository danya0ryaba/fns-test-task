import { useField } from 'formik';

import style from './Input.module.scss';
import { useRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    text?: string;
    messageError?: string | undefined | boolean;
    required?: boolean;
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    text = '',
    className,
    messageError,
    required = false,
    ...props
}) => {
    const [field, meta] = useField(props.name);
    const classError = Boolean(meta.touched && meta.error) ? style.input__error : '';
    const classDate = type === 'date' ? style.input__date : '';
    const refDate = useRef<null | HTMLInputElement>(null);

    const onFocusDate = () => {
        refDate.current?.showPicker();
    }

    return (
        <div>
            <div className={`${style.wrapper__input} ${className}`}>
                <label className={style.input__label} htmlFor={text}>{text} {required && <span className={style.required}>*</span>}</label>
                <input
                    ref={refDate}
                    onFocus={onFocusDate}
                    type={type}
                    id={text}
                    className={`${style.input} ${classError} ${classDate}`}
                    {...field}
                    {...props}
                />

                {meta.touched && meta.error && (
                    <span className={style.error}>{meta.error}</span>
                )}
            </div>
        </div>
    );
};