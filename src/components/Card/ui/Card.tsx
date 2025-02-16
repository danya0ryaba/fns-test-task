import { Link } from 'react-router-dom'
import { CardType } from '../../../constants/cards'
import style from './Card.module.scss'

export const Card: React.FC<CardType> = ({
    id,
    date,
    job,
    map,
    salary,
    experience,
    metro
}) => {
    return (
        <div className={style.card}>

            <div className={style.card__content}>
                <h3 className={style.title}>{date}</h3>
                <Link to={`/edit/${id}`}>
                    <svg className={style.edit} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21H22" stroke="#4C73E3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M16.9813 2.6895C17.4228 2.24802 18.0216 2 18.6459 2C18.9551 2 19.2612 2.06089 19.5468 2.17919C19.8324 2.2975 20.0919 2.4709 20.3105 2.6895C20.5291 2.90809 20.7025 3.16761 20.8208 3.45322C20.9391 3.73883 21 4.04494 21 4.35409C21 4.66323 20.9391 4.96935 20.8208 5.25496C20.7025 5.54057 20.5291 5.80008 20.3105 6.01868L6.43891 19.8903L2 21L3.10973 16.5611L16.9813 2.6895Z" stroke="#4C73E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Link>
            </div>

            <h5 className={style.subtitle}>{job}</h5>

            <div className={style.info}>
                <div className={style.info__map}>
                    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.00065 18.3333L7.44862 18.841C7.59064 18.9955 7.79085 19.0833 8.00065 19.0833C8.21045 19.0833 8.41066 18.9955 8.55268 18.841L8.00065 18.3333ZM12.7147 13.2077L12.1627 12.7L12.7147 13.2077ZM3.28661 13.2077L3.83864 12.7L3.28661 13.2077ZM3.2866 2.95644L2.73457 2.44874L2.73457 2.44874L3.2866 2.95644ZM12.7147 2.95644L13.2667 2.44874V2.44874L12.7147 2.95644ZM8.55268 18.841L13.2667 13.7154L12.1627 12.7L7.44862 17.8256L8.55268 18.841ZM2.73458 13.7154L7.44862 18.841L8.55268 17.8256L3.83864 12.7L2.73458 13.7154ZM2.73457 2.44874C-0.13288 5.56655 -0.132878 10.5976 2.73458 13.7154L3.83864 12.7C1.4991 10.1562 1.4991 6.00795 3.83864 3.46414L2.73457 2.44874ZM13.2667 2.44874C10.3661 -0.705132 5.63519 -0.705132 2.73457 2.44874L3.83864 3.46414C6.14501 0.9564 9.85629 0.9564 12.1627 3.46414L13.2667 2.44874ZM13.2667 13.7154C16.1342 10.5976 16.1342 5.56655 13.2667 2.44874L12.1627 3.46414C14.5022 6.00795 14.5022 10.1562 12.1627 12.7L13.2667 13.7154ZM9.75 7.5C9.75 8.4665 8.9665 9.25 8 9.25V10.75C9.79492 10.75 11.25 9.29493 11.25 7.5H9.75ZM8 5.75C8.9665 5.75 9.75 6.5335 9.75 7.5H11.25C11.25 5.70508 9.79492 4.25 8 4.25V5.75ZM6.25 7.5C6.25 6.5335 7.0335 5.75 8 5.75V4.25C6.20507 4.25 4.75 5.70508 4.75 7.5H6.25ZM8 9.25C7.0335 9.25 6.25 8.4665 6.25 7.5H4.75C4.75 9.29493 6.20507 10.75 8 10.75V9.25Z" fill="#4C73E3" />
                    </svg>
                    <span>{map}</span>
                </div>

                <div className={style.info__date}>
                    <span className={style.date__item}><b className={style.text_bold}>{salary}</b>на руки</span>
                    <span className={style.date__item}>Требуемый опыт: <b className={style.text_bold}>{experience}</b></span>
                    <span className={style.date__item}>
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.032 13.103L6.536 4.5L9.5 9.5291L12.452 4.5L15.968 13.103H17V14.4069H11.696V13.103H12.488L11.72 10.961L9.5 14.5L7.28 10.961L6.512 13.103H7.304V14.4069H2V13.103H3.032Z" fill="#FF0013" />
                        </svg>
                        <span>{metro}</span>
                    </span>
                </div>
            </div>

        </div>
    )
}
