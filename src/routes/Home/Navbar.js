import cl from 'classnames'
import c from './Navbar.module.css'


const Navbar=({isUsed, onChangePage, isPageActive=false})=> {

    return (
        <nav id={c.navbar} className={cl({[c.bgActive]:isPageActive})} >
            <div className={c.navWrapper}>
                <p className={c.brand}>
                    LOGO
                </p>
                <a className={cl(c.menuButton, {[c.active]:isUsed})} onClick={onChangePage}>
                    <span />
                </a>
            </div>
        </nav>
    )
}
export default Navbar