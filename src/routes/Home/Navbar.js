import cl from 'classnames'
import c from './Navbar.module.css'
import {useState} from "react";
const Navbar=(props)=> {

    const [isActive, setActive] = useState(false)
    const handleClick = () => {
        props.onChangeList(setActive(!isActive))
    }
    return (
        <nav id={c.navbar}>
            <div className={c.navWrapper}>
                <p className={c.brand}>
                    LOGO
                </p>
                <a className={cl(c.menuButton, isActive? [c.active]:[c.deactive])} onClick={handleClick}>
                    <span />
                </a>
            </div>
        </nav>
    )
}
export default Navbar