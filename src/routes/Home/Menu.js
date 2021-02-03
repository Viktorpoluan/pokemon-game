import c from './Menu.module.css'
import cl from 'classnames'
const Menu=({isUsed})=> {

    return(
        <div className={cl(c.menuContainer,{[c.active]:isUsed===true,[c.deactive]:isUsed===false})} >
            <div className={c.overlay}/>
            <div className={c.menuItems} >
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Menu