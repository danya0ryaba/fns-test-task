import { Formik } from 'formik'
import { list } from '../../../constants/list'
import { Button } from '../../../shared/Button'
import { ButtonTheme } from '../../../shared/Button/ui/Button'
import { Input } from '../../../shared/Input'
import { InputArea } from '../../../shared/InputArea'
import { RadioGroup } from '../../../shared/RadioGroup'
import { Select } from '../../../shared/Select'
import style from './Form.module.scss'

type FormType = {
    buttons: {
        btn_text_1: string,
        btn_text_2: string
    }
}

const initialValues = {
    post: '',
    name: '',
    department: '',
    date_open: '',
    date_close: '',
    sex: ['Мужской', 'Женский'],
    // education: ['Высшее', 'Среднее'], // по логике по умолчанию должна быть пустая строка 
    salary: ['На руки', 'До вычета налогов'],
    from: '',
    to: '',
    region: '',
    address: '',
    metro: '',
    experience: '',
    schedule: ['Полный день', 'Сменный 5/2', 'Сменный 2/2'],
    type: ['Полная занятость', 'Частичная занятость', 'Стажировка'],
    responsibilities: '',
    skills: '',
    advantages: '',
}

export const Form: React.FC<FormType> = ({
    buttons,
}) => {

    const onSubmit = (values: typeof initialValues) => {
        console.log('попал в обработчик')
        console.log(values)
    }

    return (
        <Formik
            initialValues={initialValues}
            // validationSchema={list}
            onSubmit={onSubmit}

        >
            {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit} className={style.form}>

                    <section className={style.form__section}>
                        <div className={style.row}>
                            <Input text="Наименование должности" name='post' messageError={errors.post && touched.post} />
                            <Input text="Наименование вакансии" required name='name' messageError={errors.name && touched.name} />
                            <Input text="Отдел" required name='department' messageError={errors.department && touched.department} />
                        </div>
                        <div className={style.row}>
                            <Input text="Дата открытия*" placeholder="Placeholder" name='date_open' messageError={errors.date_open && touched.date_open} />
                            <Input text="Плановая дата закрытия*" placeholder="Placeholder" name='date_close' messageError={errors.date_close && touched.date_close} />
                        </div>
                        <div className={style.row}>

                            <div className={style.checkboxs}>
                                <RadioGroup label="Пол" name="sex" options={initialValues.sex} required />
                            </div>
                            {/* <Select text="Образование" placeholder={"Выберите"} options={initialValues.education} required /> */}

                        </div>
                    </section>

                    <section className={style.form__section}>

                        <div className={style.row}>
                            <div className={style.salary}>
                                <RadioGroup label="Зарплата" name="salary" options={initialValues.salary} row />
                                <div className={style.inputs}>
                                    <label htmlFor="от" className={style.price_label}>
                                        от
                                        <Input id="от" className={style.price_input} name='from' messageError={errors.from && touched.from} />
                                    </label>
                                    <label htmlFor="до" className={style.price_label} >
                                        до
                                        <Input id="до" className={style.price_input} name='to' messageError={errors.to && touched.to} />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <Input text="Регион" required name='region' messageError={errors.region && touched.region} />
                            <Input text="Адрес" required className={style.address} name='address' messageError={errors.address && touched.address} />
                            <Input text="Станция метро, МЦД" name='metro' messageError={errors.metro && touched.metro} />
                        </div>

                        <div className={style.row}>
                            <Input text="Опыт работы" required name='experience' messageError={errors.experience && touched.experience} />

                            {/* messageError={errors.schedule && touched.schedule} */}
                            {/* написать логику на селект и на radiobutton */}
                            <Select text="График работы" required placeholder={"Выберите"} options={initialValues.schedule} name='schedule' />
                            <RadioGroup label="Тип занятости" required name="type" options={initialValues.type} />
                        </div>

                    </section>

                    <section className={style.form__section}>
                        <div className={style.row}>
                            <InputArea
                                name='responsibilities'
                                text="Функциональные обязанности"
                                placeholder="Какую работу будет выполнять сотрудник"
                            // messageError={errors.responsibilities && touched.responsibilities}
                            />
                        </div>
                        <div className={style.row}>
                            <InputArea
                                name='skills'
                                text="Пожелания к кандидату"
                                placeholder="Ключевые навыки, достижения"
                            // messageError={errors.skills && touched.skills}
                            />
                        </div>
                        <div className={style.row}>
                            <InputArea
                                name='advantages'
                                text="Преимуществом будет"
                                placeholder="Дополнительные специальные навыки"
                            // messageError={errors.advantages && touched.advantages}
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
                        <Button type="submit">{buttons.btn_text_1}</Button>
                        <Button type="reset" theme={ButtonTheme.secondary}>{buttons.btn_text_2}</Button>
                    </div>

                </form>
            )}
        </Formik>
    )
}
