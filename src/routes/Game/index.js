import PokemonCard from "../../components/PokemonCard";
import c from "../Home/style.module.css";
import {useState} from "react";

const GamePage = (props) => {
    const [isActive, setActive] = useState(null)
    const reversCard = (isCActive) => {
        setActive(isCActive)
    }

    let someData = props.state.map((d, id) => <PokemonCard key={id}
                                                           type={d.type}
                                                           values={d.values}
                                                           img={d.img}
                                                           name={d.name}
                                                           id={d.id}
                                                           reversCard={reversCard}
                                                           onClick={(isCActive)=>reversCard(isCActive)}
                                                           isActive={isActive}
    />)

    return (
        <div className={c.flex}>
            {someData}
        </div>
    )
}
export default GamePage