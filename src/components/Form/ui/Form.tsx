import { Formik } from 'formik'
import { list } from '../../../constants/list'
import { Button } from '../../../shared/Button'
import { ButtonTheme } from '../../../shared/Button/ui/Button'
import { Input } from '../../../shared/Input'
import { InputArea } from '../../../shared/InputArea'
import { RadioGroup } from '../../../shared/RadioGroup'
import { Select } from '../../../shared/Select'
import { userSchema } from '../../../constants/shemaForm'

import style from './Form.module.scss'
import { useCreateCardMutation } from '../../../pages/Create'

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
    sex: '', //['Мужской', 'Женский'],
    education: '', //['Высшее', 'Среднее'],
    salary: '', // ['На руки', 'До вычета налогов'],
    from: '',
    to: '',
    region: '',
    address: '',
    metro: '',
    experience: '',
    schedule: '', // ['Полный день', 'Сменный 5/2', 'Сменный 2/2'],
    type: '', // ['Полная занятость', 'Частичная занятость', 'Стажировка'],
    responsibilities: '',
    skills: '',
    advantages: '',
}

export const Form: React.FC<FormType> = ({
    buttons,
}) => {

    const [createCard, { isLoading, isError }] = useCreateCardMutation();

    const onSubmit = async (values: typeof initialValues) => {
        const response = await createCard(values)
        console.log('дописать + сделать общий url')
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={onSubmit}
        >
            {({ handleSubmit, errors, touched, resetForm }) => (
                <form onSubmit={handleSubmit} className={style.form}>

                    <section className={style.form__section}>
                        <div className={style.row}>
                            <Input text="Наименование должности" name='post' />
                            <Input text="Наименование вакансии" required name='name' messageError={errors.name && touched.name} />
                            <Input text="Отдел" required name='department' messageError={errors.department && touched.department} />
                        </div>
                        <div className={style.row}>
                            <Input type='date' text="Дата открытия" required placeholder="Placeholder" name='date_open' messageError={errors.date_open && touched.date_open} />
                            <Input type='date' text="Плановая дата закрытия" required placeholder="Placeholder" name='date_close' messageError={errors.date_close && touched.date_close} />
                        </div>
                        <div className={style.row}>

                            <div className={style.checkboxs}>
                                <RadioGroup label="Пол" name="sex" options={['Мужской', 'Женский']} required />
                            </div>
                            <Select
                                text="Образование"
                                placeholder={"Выберите"}
                                options={['Высшее', 'Среднее']}
                                required
                                name='education'
                            />

                        </div>
                    </section>

                    <section className={style.form__section}>

                        <div className={style.row}>
                            <div className={style.salary}>
                                <RadioGroup label="Зарплата" name="salary" options={['На руки', 'До вычета налогов']} row />
                                <div className={style.inputs}>
                                    <label htmlFor="от" className={style.price_label}>
                                        от
                                        <Input id="от" className={style.price_input} name='from' />
                                    </label>
                                    <label htmlFor="до" className={style.price_label} >
                                        до
                                        <Input id="до" className={style.price_input} name='to' />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className={style.row}>
                            <Input text="Регион" required name='region' />
                            <Input text="Адрес" required className={style.address} name='address' />
                            <Input text="Станция метро, МЦД" name='metro' />
                        </div>

                        <div className={style.row}>
                            <Input text="Опыт работы" required name='experience' />

                            {/* messageError={errors.schedule && touched.schedule} */}
                            {/* написать логику на селект и на radiobutton */}
                            <Select text="График работы" required placeholder={"Выберите"} options={['Полный день', 'Сменный 5/2', 'Сменный 2/2']} name='schedule' />
                            <RadioGroup label="Тип занятости" required name="type" options={['Полная занятость', 'Частичная занятость', 'Стажировка']} />
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
                        <Button onClick={resetForm} type="reset" theme={ButtonTheme.secondary}>{buttons.btn_text_2}</Button>
                    </div>

                </form>
            )}
        </Formik>
    )
}
