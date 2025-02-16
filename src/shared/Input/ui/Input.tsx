// import React from 'react'

// import style from './Input.module.scss'
// import { useField } from 'formik';

// export interface InputProps
//     extends React.InputHTMLAttributes<HTMLInputElement> {
//     className?: string;
//     text?: string;
//     messageError?: string | undefined | boolean;
//     onSend?: () => void;
//     required?: boolean
// }

// export const Input: React.FC<InputProps> = ({
//     type = 'text',
//     text = '',
//     className,
//     messageError,
//     onSend,
//     required = false,
//     ...props
// }) => {
//     const [field, meta] = useField(text);

//     const classError = Boolean(meta.touched && meta.error) ? style.input__error : '';

//     return (
//         <div>
//             <div className={`${style.wrapper__input} ${className}`}>
//                 <label className={style.input__label} htmlFor={text}>{text} {required && <span className={style.required}>*</span>}</label>
//                 <input
//                     type={type}
//                     id={text}
//                     className={`${style.input} ${classError}`}
//                     {...field}
//                     {...props}
//                 />
//             </div>
//             {meta.touched && meta.error && (
//                 <span className={style.error}>{meta.error}</span>
//             )}
//             {/* <span className={style.error}>ошибка</span> */}
//         </div>
//     );
// };
import React from 'react';
import { useField } from 'formik'; // Импортируйте useField для работы с Formik
import style from './Input.module.scss';

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
    const [field, meta] = useField(props.name); // Используйте useField для подключения к Formik

    const classError = Boolean(meta.touched && meta.error) ? style.input__error : '';

    return (
        <div>
            <div className={`${style.wrapper__input} ${className}`}>
                <label className={style.input__label} htmlFor={text}>{text} {required && <span className={style.required}>*</span>}</label>
                <input
                    type={type}
                    id={text}
                    className={`${style.input} ${classError}`}
                    {...field} // Связываем поле с Formik
                    {...props}
                />
            </div>
            {meta.touched && meta.error && (
                <span className={style.error}>{meta.error}</span> // Используем ошибку из meta
            )}
        </div>
    );
};
