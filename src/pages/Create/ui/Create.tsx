import { Link } from "react-router-dom"

import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form"

import style from './Create.module.scss'

export const Create = () => {
    return (
        <>
            <Title>Форма размещения <Link to="/" className={style.title}>заявки</Link></Title>
            <Form buttons={{ btn_text_1: 'Отправить', btn_text_2: 'Сбросить' }} />
        </>
    )
}
