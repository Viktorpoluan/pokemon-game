import React, { useEffect, useContext } from "react";
import StartPage from "./StartPage";

import { FireBaseContext } from "../../../../context/fireBaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom";

const Container = () => {
  const history = useHistory();
  const Firebase = useContext(FireBaseContext);
  const { selectedPokemons, handleSelectedPokemons } = useContext(
    PokemonContext
  );
  const [pokemons, setPokemons] = React.useState({});

  useEffect(() => {
    Firebase.getPokemonsSoket((pokemons) => {
      const pokemons_ = Object.fromEntries(
          Object.entries(pokemons).map((item) => [
            item[0],
            { ...item[1], isActive: false, isSelected: false, possession: "" },
          ])
      );
      setPokemons(pokemons_);
      console.log(pokemons_)
    });
    return () => Firebase.offPokemonsSoket();
  }, [Firebase]);


  const handleClickCard = (key) => {
    if (Object.keys(selectedPokemons).length < 5 || selectedPokemons[key]) {
      handleSelectedPokemons(key, { ...pokemons[key] });
      setPokemons((prevState) => ({
        ...prevState,
        [key]: { ...prevState[key], isSelected: !prevState[key].isSelected },
      }));
    }

  };

  const handleStartGame = () => {
    history.push("/game/board");
  };

  return (
    <StartPage
      pokemons={pokemons}
      handleClickCard={handleClickCard}
      handleStartGame={handleStartGame}
    />
  );
};

export default Container;
