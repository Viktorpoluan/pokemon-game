import cl from 'classnames'
import c from './Navbar.module.css'

const Navbar = ({isUsed, onChangePage, isPageActive = false}) => {
    return (
        <nav id={c.navbar} className={cl({[c.bgActive]: isPageActive})}>
            <div className={c.navWrapper}>
                <p className={c.brand}>
                    LOGO
                </p>
                <div className={cl(c.menuButton, {[c.active]: isUsed})} onClick={onChangePage}>
                    <span/>
                </div>
            </div>
        </nav>
    )
}
export default Navbar