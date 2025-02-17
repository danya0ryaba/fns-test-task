import { Link, useParams } from "react-router-dom"
import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form";

import style from '../../Create/ui/Create.module.scss'

import { useDispatch } from "react-redux";
import { useGetCardIdQuery } from "../../Home";



export const Edit = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetCardIdQuery(id || '')

    const onSubmit = (values: any) => {
        console.log(values);
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
