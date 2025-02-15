import React from 'react'

import style from './Input.module.scss'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    text: string;
    messageError?: string;
    onSend?: () => void;
}

export const Input: React.FC<InputProps> = ({
    type = 'text',
    text,
    className,
    messageError,
    onSend,
    ...props
}) => {

    const classError = Boolean(messageError) ? style.input__error : '';

    return (
        <div>
            <div className={`${style.wrapper__input} ${className}`}>
                <label className={style.input__label} htmlFor={text}>{text}</label>
                <input
                    id={text}
                    className={`${style.input} ${classError}`}
                    {...props}
                />
            </div>
            {messageError && (
                <span className={style.error}>ошибка</span>
            )}
            {/* <span className={style.error}>ошибка</span> */}
        </div>
    );
};
