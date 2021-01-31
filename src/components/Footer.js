import c from './StylesForComponents/Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={c.wrapper}>
                <h3>THANKS FOR VISITING</h3>
                <p>© 2021 #ReactMarathon.</p>
            </div>
        </footer>
    )
}

export default Footer
