import { Link } from 'react-router-dom'
import { CardRequestType } from '../../../types/types'

import Edit from '../../../assets/icons/edit.svg'
import Map from '../../../assets/icons/map.svg'
import Metro from '../../../assets/icons/metro.svg'

import style from './Card.module.scss'

export const Card: React.FC<CardRequestType> = ({
    id,
    post,
    date_open,
    from,
    region,
    address,
    metro,
    experience,
}) => {
    return (
        <div className={style.card}>
            <div className={style.card__content}>
                <h3 className={style.title}>Дата публикации: {String(date_open)}</h3>
                <Link to={`/edit/${id}`}>
                    <Edit className={style.edit} />
                </Link>
            </div>
            <h5 className={style.subtitle}>{post}</h5>
            <div className={style.info}>
                <div className={style.info__map}>
                    <Map />
                    <span>{region + ', ' + address}</span>
                </div>
                <div className={style.info__date}>
                    <span className={style.date__item}><b className={style.text_bold}>от {from}</b>на руки</span>
                    <span className={style.date__item}>Требуемый опыт: <b className={style.text_bold_exp}>{experience}</b></span>
                    <span className={style.date__item}>
                        <Metro />
                        <span>{metro}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}