import c from './StylesForComponents/PokemonCard.module.css'
import back from '../components/images/back.jpg'
import cl from 'classnames'

const PokemonCard = ({id, type, name, img, values, isActive, reversCard}) => {
    return (
        <div className={c.root} onClick={reversCard}>
            <div className={cl(c.pokemonCard, {[c.active]: isActive})}>
                <div className={c.cardFront}>
                    <div className={cl(c.wrap, c.front)}>
                        <div className={cl(c.pokemon, c[type])}>
                            <div className={c.values}>
                                <div className={cl(c.count, c.top)}>{values.top}</div>
                                <div className={cl(c.count, c.right)}>{values.right}</div>
                                <div className={cl(c.count, c.bottom)}>{values.bottom}</div>
                                <div className={cl(c.count, c.left)}>{values.left}</div>
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
                    <div className={cl(c.wrap, c.back)}>
                        <img src={back} alt='back'/>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default PokemonCard
