import { Card } from "../../../components/Card"
import { Title } from "../../../components/Title"

import { cards } from "../../../constants/cards"

import style from './Home.module.scss'

export const Home = () => {

    return (
        <>
            <Title>Заявки на размещение вакансий</Title>
            <div className={style.wrapper__cards}>
                {cards.map((card) => (
                    <Card key={card.id} {...card} />
                ))}
            </div>
        </>
    )
}
