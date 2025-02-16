import { Button } from "../../../shared/Button"
import { ButtonTheme } from "../../../shared/Button/ui/Button"
import { Input } from "../../../shared/Input"
import { Select } from "../../../shared/Select"

import style from './Create.module.scss'


export const Create = () => {
    return (
        <div>
            <h2 className={style.title}>Форма размещения заявки</h2>

            <form action="" className={style.form}>

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

                        <div className="checkboxs"></div>
                        <Select text="Образование" placeholder={"Выберите"} options={['Высшее', 'Среднее']} required />

                    </div>
                </section>


                <section className={style.form__section}>
                    <div className={style.row}>
                        <Input text="Наименование должности" />
                        <Input text="Наименование вакансии*" />
                        <Input text="Отдел*" />
                    </div>
                    <div className={style.row}>
                        <Input text="Дата открытия*" placeholder="Placeholder" />
                        <Input text="Плановая дата закрытия*" placeholder="Placeholder" />
                    </div>
                    <div className={style.row}>

                        <div className="checkboxs"></div>
                        <Select text="Образование*" placeholder={"Выберите"} options={['Высшее', 'Среднее']} />

                    </div>
                </section>


                <section className={style.form__section}>
                    <div className={style.row}>
                        <Input text="Наименование должности" />
                        <Input text="Наименование вакансии*" />
                        <Input text="Отдел*" />
                    </div>
                    <div className={style.row}>
                        <Input text="Дата открытия*" placeholder="Placeholder" />
                        <Input text="Плановая дата закрытия*" placeholder="Placeholder" />
                    </div>
                    <div className={style.row}>

                        <div className="checkboxs"></div>
                        <Select text="Образование*" placeholder={"Выберите"} options={['Высшее', 'Среднее']} />

                    </div>
                </section>

                <div className={style.buttons}>
                    <Button>Отправить</Button>
                    <Button theme={ButtonTheme.secondary}>Сбросить</Button>
                </div>

            </form>

        </div>
    )
}
