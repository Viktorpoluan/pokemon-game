import c from './Menu.module.css'
import cl from 'classnames'
import {Link} from "react-router-dom";

const Menu = ({isUsed}) => {
    const MENU = [
        {
            title: 'HOME',
            to: '#home'
        },
        {
            title: 'GAME',
            to: '#game'
        }, {
            title: 'ABOUT',
            to: '#about'
        }, {
            title: 'CONTACT',
            to: '#contact'
        }
    ]
    return (
        <div className={cl(c.menuContainer, {[c.active]: isUsed === true, [c.deactive]: isUsed === false})}>
            <div className={c.overlay}/>
            <div className={c.menuItems}>
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Menu