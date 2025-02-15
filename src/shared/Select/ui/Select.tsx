import style from './Select.module.scss'

// import ArrowIcon from '../../../assets/arrow.svg'

interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
    className?: string
    text: string
    messageError?: string;
}

export const Select: React.FC<SelectProps> = ({
    className = '',
    text,
    messageError,
}) => {

    const classError = Boolean(messageError) ? style.input__error : '';

    return (
        <div className={className}>

            <div className={style.wrapper__input}>

                <label className={style.input__label} htmlFor={text}>Выберите фрукт:</label>

                <select id={text} name="fruits" className={`${style.select} ${style.input} ${classError}`}>
                    <option value="apple">Яблоко</option>
                    <option value="banana">Банан</option>
                    <option value="orange">Апельсин</option>
                    <option value="grape">Виноград</option>
                </select>

                {/* <ArrowIcon /> */}



                {messageError && (
                    <span className={style.error}>ошибка</span>
                )}

                <span className={style.error}>ошибка</span>

            </div>

        </div>
    )
}
