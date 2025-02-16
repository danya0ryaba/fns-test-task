import { Link, useParams } from "react-router-dom"
import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form";

import style from '../../Create/ui/Create.module.scss'


export const Edit = () => {

    const { id } = useParams();
    console.log(id)

    return (
        <div>
            <Title>Форма редактирования <Link to="/" className={style.title}>заявки</Link></Title>

            <Form buttons={{ btn_text_1: 'Сохранить', btn_text_2: 'Отменить' }} />

        </div>
    )
}
