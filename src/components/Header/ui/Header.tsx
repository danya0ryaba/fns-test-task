import { Link, NavLink } from 'react-router-dom'
import style from './Header.module.scss'

export const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.wrapper}>

                <Link className={style.logo} to="/" />

                <nav className={style.nav}>

                    <NavLink
                        className={({ isActive }) => `${style.link} ${isActive && style.link_active}`}
                        to="/"
                    >
                        Все заявки
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `${style.link} ${isActive && style.link_active}`}
                        to="/create"
                    >
                        Создание заявки
                    </NavLink>

                </nav>
            </div>
        </header>
    )
}
