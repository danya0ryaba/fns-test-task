import { useEffect, useRef, useState } from 'react';
import { useField } from 'formik';

import Arrow from '../../../assets/icons/select-arrow.svg';

import style from './Select.module.scss';

interface CustomSelectProps {
    className?: string;
    text: string;
    options: string[];
    placeholder: string;
    required?: boolean;
    name?: string;
    value?: string;
}

export const Select: React.FC<CustomSelectProps> = ({
    options,
    placeholder,
    className = '',
    text,
    required = false,
    name,
    value = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | null>(value || null);
    const selectRef = useRef<HTMLDivElement | null>(null);

    const [_, meta, helpers] = useField(name);

    const classError = Boolean(meta.touched && meta.error) ? style.select__error : '';
    const rotate = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: string) => {
        setSelectedValue(option);
        helpers.setValue(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`${className} ${style.wrapper__select}`} ref={selectRef}>
            <label className={style.input__label} htmlFor={text}>{text} {required && <span className={style.required}>*</span>}</label>
            <div className={`${style.select} ${isOpen && style.open} ${classError}`} onClick={toggleSelect}>
                {selectedValue || placeholder}
                <Arrow width="20" height="20" className={style.select__arrow} style={{ transform: rotate }} />
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
            {meta.touched && meta.error && (
                <span className={style.error}>{meta.error}</span>
            )}
        </div>
    );
};