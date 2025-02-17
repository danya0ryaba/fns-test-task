import { Link, useParams } from "react-router-dom"
import { Title } from "../../../components/Title"
import { Form } from "../../../components/Form";

import style from '../../Create/ui/Create.module.scss'
import { useGetCardIdQuery } from "../model/services/cardIdApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCard } from "../model/slice/cardSlice";


export const Edit = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { data, isLoading, isError } = useGetCardIdQuery(id || '')

    useEffect(() => {
        if (data) {
            dispatch(getCard(data));
        }
    }, [data, dispatch]);

    if (isLoading) return <p>Загрузка...</p>;
    if (isError) return <p>Ошибка!</p>;

    return (
        <>
            <Title>Форма редактирования <Link to="/" className={style.title}>заявки</Link></Title>
            <Form buttons={{ btn_text_1: 'Сохранить', btn_text_2: 'Отменить' }} />
        </>
    )
}
