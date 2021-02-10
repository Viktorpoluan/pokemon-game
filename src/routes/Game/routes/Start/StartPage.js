import c from './style.module.css'
import {useState, useEffect, useContext} from "react";
import random from 'utils.random'
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContexts} from "../../../../components/context/firebaseContext";

const StartPage = () => {
    const firebase = useContext(FireBaseContexts)
    const [pokemons, setPokemons] = useState({})
    useEffect(() => {
        firebase.getPokemonSocet((pokemons) => {
            setPokemons(pokemons)
        })
        return () => firebase.offPokemonSocet()
    }, [])

    const reversCard = (key) => {
        setPokemons(prevState => ({
            ...prevState,
            [key]: {...prevState[key],
            selected: !prevState[key].selected}
        }))
    }
    return (
        <>
            <div className={c.buttonWrap}>
                <button>
                    StartGame
                </button>
            </div>
            <div className={c.card}>
                {Object.entries(pokemons).map(([key, {id, type, name, img, values, selected}]) => <PokemonCard
                    key={key}
                    type={type}
                    values={values}
                    img={img}
                    name={name}
                    id={id}
                    className={c.card}
                    reversCard={() => reversCard(key)}
                    isActive={true}
                    isSelected={selected}
                />)}
            </div>
        </>
    )
}
export default StartPage