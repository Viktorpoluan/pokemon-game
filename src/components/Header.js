import c from './StylesForComponents/Header.module.css'

const Header = (props) => {
    const handleClick =()=>{
        props.onClickButton('game')
    }
    return (
        <header className={c.root}>
            <div className={c.forest}/>
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
