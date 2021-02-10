import c from './Menu.module.css'
import cl from 'classnames'
import {Link, NavLink} from "react-router-dom";

const Menu = ({isUsed, onChangePage}) => {
    const MENU = [
        {
            title: 'HOME',
            to: 'home'
        },
        {
            title: 'GAME',
            to: 'game'
        }, {
            title: 'ABOUT',
            to: 'about'
        }, {
            title: 'CONTACT',
            to: 'contact'
        }
    ]
    return (
        <div className={cl(c.menuContainer, {[c.active]: isUsed === true, [c.deactive]: isUsed === false})}>
            <div className={c.overlay}/>
            <div className={c.menuItems}>
                <ul onClick={onChangePage}>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <NavLink to={`/${to}`}>
                                    {title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Menu