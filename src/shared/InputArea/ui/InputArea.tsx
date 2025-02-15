

import style from './InputArea.module.scss'


export interface InputAreaProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    text: string;
}

export const InputArea: React.FC<InputAreaProps> = ({
    className = '',
    text,
}) => {
    return (
        <div className={`${style.wrapper__input} ${className}`}>
            <label className={style.input__label} htmlFor={text}>{text}</label>
            <textarea id={text} className={`${style.textarea} ${style.input}`}></textarea>
        </div>
    )
}
