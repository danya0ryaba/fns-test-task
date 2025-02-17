
import { Card } from "../../../components/Card"
import { Title } from "../../../components/Title"


import style from './Home.module.scss'
import { useGetCardsQuery } from ".."

export const Home = () => {

    const { data, error, isLoading } = useGetCardsQuery();

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
