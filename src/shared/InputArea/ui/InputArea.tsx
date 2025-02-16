import style from './InputArea.module.scss'


export interface InputAreaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    text: string;
}

export const InputArea: React.FC<InputAreaProps> = ({
    className = '',
    text,
    ...otherProps
}) => {
    return (
        <div className={`${style.wrapper__input} ${className}`}>
            <label className={style.input__label} htmlFor={text}>{text}</label>
            <textarea id={text} className={`${style.textarea} ${style.input}`} {...otherProps}></textarea>
        </div>
    )
}
