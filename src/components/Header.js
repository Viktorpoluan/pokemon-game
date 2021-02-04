import c from './StylesForComponents/Header.module.css'
import {useHistory} from 'react-router-dom'

const Header = (props) => {
    const history = useHistory()
    const handleClick = () => {
        history.push('/game')  /*props.onClickButton('game')*/
    }
    return (
        <header className={c.root}>
            <div className={c.forest}/>
            <div className={c.silhouette}/>
            <div className={c.moon}/>
            <div className={c.container}>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
                <button onClick={handleClick}>
                    Start Game
                </button>
            </div>
        </header>
    )
}

export default Header
