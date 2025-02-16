import { useState } from 'react'
import { RadioButton } from '../../Radiobutton'

import style from './RadioGroup.module.scss'

interface RadioGroupProps {
    className?: string
    label: string
    name: string
    options: string[]
    required?: boolean
    row?: boolean
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    className,
    label,
    name,
    options,
    required,
    row = false,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };
    return (
        <div className={className}>

            <h5 className={style.label}>{label} {required && <span className={style.required}>*</span>}</h5>

            <div className={`${style.options} ${row && style.row}`}>
                {options.map((option) => (
                    <RadioButton
                        key={option}
                        label={option}
                        name={name}
                        isChecked={selectedOption === option}
                        onChangeCustom={() => handleOptionChange(option)}
                    />
                ))}
            </div>
        </div>
    )
}
