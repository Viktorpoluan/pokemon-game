import c from './Menu.module.css'
import cl from 'classnames'
import {useState} from "react";

const Menu=(props)=> {
    /*const [isActive,setActive]=useState(true)*/
    const handleClick =()=>{
        props.onChangePage('navbar');

    }
    return(
        <div className={cl(c.menuContainer,c.active)} onClick={handleClick}>
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