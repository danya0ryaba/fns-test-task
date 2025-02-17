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
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    className,
    label,
    name,
    options,
    required,
    row = false,
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
                        key={option}
                        label={option}
                        name={name}
                        isChecked={field.value === option} // Проверяем, выбрана ли опция
                        onChangeCustom={() => handleOptionChange(option)} // Обработчик изменения
                    />
                ))}
            </div>
            {meta.touched && meta.error ? (
                <span className={style.error}>{meta.error}</span> // Показываем ошибку, если есть
            ) : null}
        </div>
    );
};
