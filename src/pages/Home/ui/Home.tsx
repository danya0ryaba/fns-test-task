import { useDispatch } from "react-redux"
import { Card } from "../../../components/Card"
import { Title } from "../../../components/Title"

import { useEffect } from "react"

import style from './Home.module.scss'
import { setCards, useGetCardsQuery } from ".."

export const Home = () => {

    const dispatch = useDispatch();
    const { data, error, isLoading } = useGetCardsQuery();

    useEffect(() => {
        if (data) {
            dispatch(setCards(data));
        }
    }, [data, dispatch]);

    if (isLoading) return <p>Загрузка...</p>;
    if (error) return <p>Ошибка!</p>;

    return (
        <>
            <Title>Заявки на размещение вакансий</Title>
            <div className={style.wrapper__cards}>
                {
                    Number(data?.length) > 0 ?
                        data?.map((card) => (
                            <Card key={card.id} {...card} />
                        )) :
                        <p>Нет заявок</p>
                }
            </div>
        </>
    )
}
