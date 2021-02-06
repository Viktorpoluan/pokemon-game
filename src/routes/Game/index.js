import PokemonCard from "../../components/PokemonCard";
import c from "../Home/style.module.css";
import {useState} from "react";

const GamePage = (props) => {
    const [pokemons, setPokemons] = useState(props.state)
    const reversCard = (id) => {
        setPokemons(prevState=>{
            return Array.from(prevState,(objkt)=>{
                if (objkt.id===id){
                    objkt.active=true
                }
                return objkt
            })
        })
    }
    let someData = pokemons.map(({id, type, name, img, values, active}) => <PokemonCard key={id}
                                                           type={type}
                                                           values={values}
                                                           img={img}
                                                           name={name}
                                                           id={id}
                                                           reversCard={reversCard}
                                                           isActive={active}
    />)

    return (
        <div className={c.flex}>
            {someData}
        </div>
    )
}
export default GamePage