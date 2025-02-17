import { useField } from 'formik';
import { RadioButton } from '../../Radiobutton';
import style from './RadioGroup.module.scss';

interface RadioGroupProps {
    className?: string;
    label: string;
    name: string;
    options: string[];
    required?: boolean;
    row?: boolean;
    value?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    className,
    label,
    name,
    options,
    required,
    row = false,
    value = '',
}) => {
    const [field, meta, helpers] = useField(name);

    const handleOptionChange = (value: string) => {
        helpers.setValue(value);
    };

    return (
        <div className={`${className} ${style.wrapper}`}>
            <h5 className={style.label}>{label} {required && <span className={style.required}>*</span>}</h5>
            <div className={`${style.options} ${row && style.row}`}>
                {options.map((option) => (
                    <RadioButton
                        value={value}
                        key={option}
                        label={option}
                        name={name}
                        isChecked={field.value === option}
                        onChangeCustom={() => handleOptionChange(option)}
                    />
                ))}
            </div>
            {meta.touched && meta.error ? (
                <span className={style.error}>{meta.error}</span>
            ) : null}
        </div>
    );
};
