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
                        <span>Все заявки</span>
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `${style.link} ${isActive && style.link_active}`}
                        to="/create"
                    >
                        <span>Создание заявки</span>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}
