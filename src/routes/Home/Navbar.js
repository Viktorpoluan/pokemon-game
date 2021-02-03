import cl from 'classnames'
import c from './Navbar.module.css'


const Navbar=({isOpen, onChangePage, bgActive=false})=> {

    return (
        <nav id={c.navbar} className={cl({[c.bgActive]:bgActive})} >
            <div className={c.navWrapper}>
                <p className={c.brand}>
                    LOGO
                </p>
                <a className={cl(c.menuButton, {[c.active]:isOpen})} onClick={onChangePage}>
                    <span />
                </a>
            </div>
        </nav>
    )
}
export default Navbar