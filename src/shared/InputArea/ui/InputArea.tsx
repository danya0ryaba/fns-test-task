import { useField } from 'formik';
import style from './InputArea.module.scss';

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
    const [field, meta] = useField(otherProps.name);

    return (
        <div className={`${style.wrapper__input} ${className}`}>
            <label className={style.input__label} htmlFor={text}>{text}</label>
            <textarea
                id={text}
                className={`${style.textarea} ${style.input} ${meta.touched && meta.error ? style.error : ''}`}
                {...field}
                {...otherProps}
            ></textarea>
            {meta.touched && meta.error && (
                <span className={style.error}>{meta.error}</span>
            )}
        </div>
    );
};
