import { Link, useNavigate } from "react-router-dom"

import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form"

import style from './Create.module.scss'
import { initialValues } from "../../../constants/shemaForm"
import { useCreateCardMutation } from "../../Home/model/services/cardsApi"

export const Create = () => {

    const router = useNavigate();

    const [createCard, { isLoading, isError }] = useCreateCardMutation();

    const onSubmit = async (values: any) => {
        try {
            await createCard(values);
            alert('Заявка создана');
            await router('/');
        } catch (e) {
            console.log(e);
            alert('Заявка не создана. Ошибка!');
        }
    }

    if (isError) return (<p>Ошибка!</p>)

    return (
        <>
            <Title>Форма размещения <Link to="/" className={style.title}>заявки</Link></Title>
            {isLoading ? <p>Загрузка...</p> :
                <Form
                    initialValues={initialValues}
                    onSubmitForm={onSubmit}
                    buttons={{ btn_text_1: 'Отправить', btn_text_2: 'Сбросить' }}
                />
            }
        </>
    )
}
