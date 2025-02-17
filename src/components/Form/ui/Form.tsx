import { Formik } from 'formik'
import { list } from '../../../constants/list'
import { Button } from '../../../shared/Button'
import { ButtonTheme } from '../../../shared/Button/ui/Button'
import { Input } from '../../../shared/Input'
import { InputArea } from '../../../shared/InputArea'
import { RadioGroup } from '../../../shared/RadioGroup'
import { Select } from '../../../shared/Select'
import { education, salary, schedule, sex, type, userSchema } from '../../../constants/shemaForm'

import style from './Form.module.scss'
import { CardRequestTypeWithoutId } from '../../../pages/Create/model/types/createCardType'

type FormType = {
    onSubmitForm?: (value: any) => void
    buttons: {
        btn_text_1: string,
        btn_text_2: string
    },
    initialValues: CardRequestTypeWithoutId
}

export const Form: React.FC<FormType> = ({
    buttons,
    onSubmitForm,
    initialValues
}) => {

    const onSubmit = async (values: typeof initialValues) => {
        onSubmitForm && onSubmitForm(values)
    }
    console.log(initialValues.post)
    return (
        <>
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
                                    <RadioGroup label="Пол" name="sex" options={sex} required value={initialValues.sex} />
                                </div>
                                <Select
                                    value={initialValues.education}
                                    text="Образование"
                                    placeholder={"Выберите"}
                                    options={education}
                                    required
                                    name='education'
                                />

                            </div>
                        </section>

                        <section className={style.form__section}>

                            <div className={style.row}>
                                <div className={style.salary}>
                                    <RadioGroup
                                        value={initialValues.salary}
                                        label="Зарплата"
                                        name="salary"
                                        options={salary}
                                        row
                                    />
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
                                <Select
                                    value={initialValues.schedule}
                                    text="График работы"
                                    required
                                    placeholder={"Выберите"}
                                    options={schedule}
                                    name='schedule'
                                />
                                <RadioGroup
                                    value={initialValues.type}
                                    label="Тип занятости"
                                    required
                                    name="type"
                                    options={type}
                                />
                            </div>

                        </section>

                        <section className={style.form__section}>
                            <div className={style.row}>
                                <InputArea
                                    name='responsibilities'
                                    text="Функциональные обязанности"
                                    placeholder="Какую работу будет выполнять сотрудник"
                                />
                            </div>
                            <div className={style.row}>
                                <InputArea
                                    name='skills'
                                    text="Пожелания к кандидату"
                                    placeholder="Ключевые навыки, достижения"
                                />
                            </div>
                            <div className={style.row}>
                                <InputArea
                                    name='advantages'
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
                            <Button type="submit">{buttons.btn_text_1}</Button>
                            <Button onClick={resetForm} type="reset" theme={ButtonTheme.secondary}>{buttons.btn_text_2}</Button>
                        </div>

                    </form>
                )}
            </Formik>


        </>

    )
}
