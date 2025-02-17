import { Link, useNavigate, useParams } from "react-router-dom"
import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form";

import style from '../../Create/ui/Create.module.scss'

import { useGetCardIdQuery } from "../../Home";
import { useUpdateCardMutation } from "../model/services/cardUpdateApi";



export const Edit = () => {

    const { id } = useParams()
    const router = useNavigate();

    const { data, isLoading, isError } = useGetCardIdQuery(id || '')

    const [updateCard, { isError: isErrorUpdateCard }] = useUpdateCardMutation();

    const onSubmit = async (body: any) => {
        try {
            const response = await updateCard({ id: id || '', body });
            console.log(response);
            alert('Заявка отредактирована');
            router('/');
        } catch (e) {
            console.log("маслину словил");
            console.log(isErrorUpdateCard);
        }
    }

    if (isLoading) return <p>Загрузка...</p>;
    if (isError) return <p>Ошибка!</p>;

    return (
        <>
            <Title>Форма редактирования <Link to="/" className={style.title}>заявки</Link></Title>
            <Form
                initialValues={data!}
                onSubmitForm={onSubmit}
                buttons={{ btn_text_1: 'Сохранить', btn_text_2: 'Отменить' }}
            />
        </>
    )
}
