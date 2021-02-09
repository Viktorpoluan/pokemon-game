import PokemonCard from "../../components/PokemonCard";
import c from "../Home/style.module.css";
import {useState, useEffect, useContext} from "react";

import random from 'utils.random'
import {FireBaseContexts} from "../../components/context/firebaseContext";

const GamePage = () => {
    const firebase = useContext(FireBaseContexts)
    const [pokemons, setPokemons] = useState({})
    const getPokemons= async ()=>{
        const response = await firebase.getPokemonsOnetime()
        setPokemons(response)
    }
    useEffect(() => {
        getPokemons()
    }, [])

    const reversCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]}
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active
                }
                acc[item[0]] = pokemon
                firebase.postPokemon(item[0], pokemon)
                return acc;
            }, {})
        })
    }
    const addCard = () => {
        const pokemon = {
            "abilities": [
                "intimidate",
                "shed-skin",
                "unnerve"
            ],
            "stats": {
                "hp": 60,
                "attack": 95,
                "defense": 69,
                "special-attack": 65,
                "special-defense": 79,
                "speed": 80
            },
            "type": "poison",
            "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+random(100,900)+".png",
            "name": "arbok",
            "base_experience": 157,
            "height": 35,
            "id": random(100,900),
            "values": {
                "top": 5,
                "right": 9,
                "bottom": "A",
                "left": "A"
            }
        }
        firebase.addPokemon(pokemon, async ()=>{
          await  getPokemons()
        })
    }

    let someData = Object.entries(pokemons).map(([key, {id, type, name, img, values, active}]) => <PokemonCard key={key}
                                                                                                               type={type}
                                                                                                               values={values}
                                                                                                               img={img}
                                                                                                               name={name}
                                                                                                               id={id}
                                                                                                               reversCard={reversCard}
                                                                                                               isActive={active}
    />)
    debugger
    return (
        <>
            <div className={c.button}>
                <button className={c.button} onClick={addCard}>addCard</button>
            </div>
            <div className={c.flex}>
                {someData}
            </div>
        </>
    )
}
export default GamePage