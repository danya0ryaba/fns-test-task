import { useState } from 'react';

import style from './Select.module.scss'

interface CustomSelectProps {
    className?: string
    text: string;
    options: string[];
    placeholder: string;
    messageError?: string
    required?: boolean
    name?: string
}

export const Select: React.FC<CustomSelectProps> = ({
    options,
    placeholder,
    className = '',
    text,
    required = false,
    messageError,
    name,
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const classError = Boolean(messageError) ? style.select__error : '';
    const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedValue(option);
        setIsOpen(false);
    };

    return (
        <div className={`${className} ${style.wrapper__select}`}>

            <label className={style.input__label} htmlFor={text}>{text} {required && <span className={style.required}>*</span>}</label>

            <div className={`${style.select} ${isOpen && style.open} ${classError}`} onClick={toggleSelect}>
                {selectedValue ? selectedValue : placeholder}
                <svg
                    className={style.select__arrow}
                    style={{ transform: rotate }}
                    width="20"
                    height="20"
                    viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 7.29138L9.75 12.7086L18.25 7.29138" stroke="#4C73E3" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" />
                </svg>
            </div>

            {isOpen && (
                <ul className={style.select__options}>
                    {options.map(option => (
                        <li
                            key={option}
                            className={style.select__option}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {messageError && (
                <span className={style.error}>ошибка</span>
            )}
            {/* <span className={style.error}>ошибка</span> */}
        </div>
    );
};