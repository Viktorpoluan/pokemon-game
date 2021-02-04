import PokemonCard from "../../components/PokemonCard";
import c from "../Home/style.module.css";
import Layout from "../../components/Layout";

const GamePage = (props) => {
    let someData = props.state.map((d, id) => <PokemonCard key={id}
                                                           type={d.type}
                                                           values={d.values}
                                                           img={d.img}
                                                           name={d.name}
                                                           id={d.id}

    />)
   return(
       <div className={c.flex}>
           {someData}
       </div>
   )
}

export default GamePage