import React, { useEffect, useState, InputHTMLAttributes } from 'react';

import style from './Radiobutton.module.scss';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    name: string;
    isChecked?: boolean;
    disabled?: boolean;
    onChangeCustom?: (checked: boolean) => void;
    messageError?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
    className = '',
    label,
    isChecked = false,
    disabled = false,
    onChangeCustom,
    messageError,
    ...otherProps
}) => {

    const [checked, setChecked] = useState(isChecked);

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e)
        const newChecked = e.target.checked;
        setChecked(prev => !prev);
        if (onChangeCustom) {
            onChangeCustom(newChecked);
        }
    };

    return (
        <label className={style.radio__label}>
            <div className={`${style.radio} ${checked && style.active}`}>
                {checked && (
                    <svg width="10" height="10.5" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 6.5L5.5 11.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                )}
            </div>
            <input
                type="radio"
                className={`${className} ${style.input}`}
                checked={checked}
                value={label}
                onChange={handleChange}
                style={{ display: 'none' }}
                {...otherProps}
            />
            {label}
        </label>
    );
};