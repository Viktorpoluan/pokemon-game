import c from './style.module.css'
import {useState, useEffect, useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContexts} from "../../../../components/context/firebaseContext";
import {PokemonContext} from "../../../../components/context/pokemonContext";
import {useHistory} from "react-router-dom";

const StartPage = () => {
    const firebase = useContext(FireBaseContexts)
    const poKemonContext = useContext(PokemonContext)
    const history=useHistory()

    const handStartGame =()=>{
        history.push('/game/board')
    }

    const [pokemons, setPokemons] = useState({})
    useEffect(() => {
        firebase.getPokemonSocet((pokemons) => {
            setPokemons(pokemons)
        })
        return () => firebase.offPokemonSocet()
    }, [])

    const reversCard = (key) => {
        const pokemon = {...pokemons[key]}
        poKemonContext.onSelect(key, pokemon)
        setPokemons(prevState => ({
            ...prevState,
            [key]: {...prevState[key],
            selected: !prevState[key].selected}
        }))
    }
    return (
        <div className={c.game}>
            <div className={c.buttonWrap}>
                <button onClick={handStartGame}
                        disabled={Object.keys(poKemonContext.pokemons).length<5}
                >
                    StartGame
                </button>
            </div>
            <div className={c.flex}>
                {Object.entries(pokemons).map(([key, {id, type, name, img, values, selected}]) => <PokemonCard
                    key={key}
                    type={type}
                    values={values}
                    img={img}
                    name={name}
                    id={id}
                    className={c.card}
                    reversCard={() => {
                        if(Object.keys(poKemonContext.pokemons).length<5 || selected){
                            reversCard(key)
                        }
                    }}
                    isActive={true}
                    isSelected={selected}
                />)}
            </div>
        </div>
    )
}
export default StartPage