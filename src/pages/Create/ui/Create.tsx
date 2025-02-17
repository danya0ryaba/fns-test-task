import { Link, useNavigate } from "react-router-dom"

import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form"

import style from './Create.module.scss'
import { useCreateCardMutation } from "../model/services/createCardApi"

export const Create = () => {

    const router = useNavigate();

    const [createCard, { isLoading, isError }] = useCreateCardMutation();

    const onSubmit = async (values: any) => {
        const response = await createCard(values)
        alert('Заявка создана');
        console.log(response);
        router('/');
    }

    if (isError) return (<p>Ошибка!</p>)

    return (
        <>
            <Title>Форма размещения <Link to="/" className={style.title}>заявки</Link></Title>
            {isLoading ? <p>Загрузка...</p> :
                <Form
                    onSubmitForm={onSubmit}
                    buttons={{ btn_text_1: 'Отправить', btn_text_2: 'Сбросить' }}
                />
            }
        </>
    )
}
