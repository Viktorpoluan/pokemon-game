import {useState} from 'react'
import c from './StylesForComponents/PokemonCard.module.css'
import back from '../components/images/back.jpg'

const PokemonCard = (props) => {
    const [isActive, setActive] = useState(false)
    const reversCard = () => {
        setActive(true)
    }
    return (
        <div className={c.root}>
            <div className={`${c.pokemonCard} ${isActive ? c.active : ''}`} onClick={reversCard}>
                <div className={c.cardFront}>
                    <div className={`${c.wrap} ${c.front}`}>
                        <div className={`${c.pokemon} ${c[props.type]}`}>
                            <div className={c.values}>
                                <div className={`${c.count} ${c.top}`}>{props.values.top}</div>
                                <div className={`${c.count} ${c.right}`}>{props.values.right}</div>
                                <div className={`${c.count} ${c.bottom}`}>{props.values.bottom}</div>
                                <div className={`${c.count} ${c.left}`}>{props.values.left}</div>
                            </div>
                            <div className={c.imgContainer}>
                                <img src={props.img} alt={props.name}/>
                            </div>
                            <div className={c.info}>
                                <span className={c.number}>#{props.id}</span>
                                <h3 className={c.name}>{props.name}</h3>
                                <small className={c.type}>Type: <span>{props.type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={c.cardBack}>
                    <div className={`${c.wrap} ${c.back}`}>
                        <img src={back} alt='back'/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PokemonCard
