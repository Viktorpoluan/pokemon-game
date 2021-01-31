import {useState} from 'react'
import c from './StylesForComponents/PokemonCard.module.css'
import back from '../components/images/back.jpg'

const PokemonCard = ({id, type, name, img, values}) => {
    const [isActive, setActive] = useState(false)
    const reversCard = () => {
        setActive(!isActive)
    }
    return (
        <div className={c.root}>
            <div className={`${c.pokemonCard} ${isActive ? c.active : ''}`} onClick={reversCard}>
                <div className={c.cardFront}>
                    <div className={`${c.wrap} ${c.front}`}>
                        <div className={`${c.pokemon} ${c[type]}`}>
                            <div className={c.values}>
                                <div className={`${c.count} ${c.top}`}>{values.top}</div>
                                <div className={`${c.count} ${c.right}`}>{values.right}</div>
                                <div className={`${c.count} ${c.bottom}`}>{values.bottom}</div>
                                <div className={`${c.count} ${c.left}`}>{values.left}</div>
                            </div>
                            <div className={c.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={c.info}>
                                <span className={c.number}>#{id}</span>
                                <h3 className={c.name}>{name}</h3>
                                <small className={c.type}>Type: <span>{type}</span></small>
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
