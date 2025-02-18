import React, { useEffect, useState, InputHTMLAttributes } from 'react';
import Radio from '../../../assets/icons/radio.svg'

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
        const newChecked = e.target.checked;
        setChecked(prev => !prev);
        if (onChangeCustom) {
            onChangeCustom(newChecked);
        }
    };

    return (
        <label className={style.radio__label}>
            <div className={`${style.radio} ${checked && style.active}`}>
                {checked && <Radio />}
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