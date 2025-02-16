import { Link } from "react-router-dom"
import { Button } from "../../../shared/Button"
import { ButtonTheme } from "../../../shared/Button/ui/Button"
import { Input } from "../../../shared/Input"
import { InputArea } from "../../../shared/InputArea"
import { RadioButton } from "../../../shared/Radiobutton"
import { RadioGroup } from "../../../shared/RadioGroup"
import { Select } from "../../../shared/Select"

import style from './Create.module.scss'

const list = [
    'Дружный коллектив, интересные задачи и возможность быть услышанным;',
    'Приобретение навыков работы в большой, разветвлённой и сложноподчинённой структуре, задействованной в сфере ИТ;',
    'Оформление в соответствии с ТК РФ;',
    ' Полностью официальная заработная плата',
]


export const Create = () => {
    return (
        <div>
            <h2 className={style.title}>Форма размещения <Link to="/" className={style.title}>заявки</Link></h2>

            <form onSubmit={(e) => e.preventDefault()} className={style.form}>

                <section className={style.form__section}>
                    <div className={style.row}>
                        <Input text="Наименование должности" />
                        <Input text="Наименование вакансии" required />
                        <Input text="Отдел" required />
                    </div>
                    <div className={style.row}>
                        <Input text="Дата открытия*" placeholder="Placeholder" />
                        <Input text="Плановая дата закрытия*" placeholder="Placeholder" />
                    </div>
                    <div className={style.row}>

                        <div className={style.checkboxs}>
                            <RadioGroup label="Пол" name="sex" options={['Мужской', 'Женский']} required />
                        </div>
                        <Select text="Образование" placeholder={"Выберите"} options={['Высшее', 'Среднее']} required />

                    </div>
                </section>

                <section className={style.form__section}>

                    <div className={style.row}>

                        <div className={style.salary}>
                            {/* <span className={style.price}>Зарплата</span> */}

                            <RadioGroup label="Зарплата" name="salary" options={['На руки', 'До вычета налогов']} row />

                            <div className={style.inputs}>
                                <label htmlFor="от" className={style.price_label}>
                                    от
                                    <Input id="от" className={style.price_input} />
                                </label>
                                <label htmlFor="до" className={style.price_label}>
                                    до
                                    <Input id="до" className={style.price_input} />
                                </label>
                            </div>

                        </div>

                    </div>

                    <div className={style.row}>
                        <Input text="Регион" required />
                        <Input text="Адрес" required className={style.address} />
                        <Input text="Станция метро, МЦД" />
                    </div>

                    <div className={style.row}>
                        <Input text="Опыт работы" required />
                        <Select text="График работы" required placeholder={"Выберите"} options={['Полный день', 'Сменный 5/2', 'Сменный 2/2']} />
                        <RadioGroup label="Тип занятости" required name="type" options={['Полная занятость', 'Частичная занятость', 'Стажировка']} />
                    </div>

                </section>

                <section className={style.form__section}>
                    <div className={style.row}>
                        <InputArea
                            text="Функциональные обязанности"
                            placeholder="Какую работу будет выполнять сотрудник"
                        />
                    </div>
                    <div className={style.row}>
                        <InputArea
                            text="Пожелания к кандидату"
                            placeholder="Ключевые навыки, достижения"
                        />
                    </div>
                    <div className={style.row}>
                        <InputArea
                            text="Преимуществом будет"
                            placeholder="Дополнительные специальные навыки"
                        />
                    </div>
                    <div className={style.row}>
                        <div className={style.wrapper_list}>
                            <h4 className={style.offer}>Мы предлагаем</h4>
                            <div className={style.list_wrapper}>
                                <ul className={style.list}>
                                    {list.map((item, index) => (<li key={index}>{item}</li>))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <div className={style.buttons}>
                    <Button type="submit">Отправить</Button>
                    <Button type="reset" theme={ButtonTheme.secondary}>Сбросить</Button>
                </div>

            </form>

        </div>
    )
}
