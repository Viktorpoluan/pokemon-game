import React, { useContext } from "react";
import PokemonCard from "../../../../components/PokemonCard";
import { PokemonContext } from "../../../../context/pokemonContext";

import s from "./style.module.css";

const StartPage = ({ pokemons, handleClickCard, handleStartGame }) => {
  const { selectedPokemons } = useContext(PokemonContext);
  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={handleStartGame}
          disabled={Object.keys(selectedPokemons).length < 5}
        >
          Start Game
        </button>
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { id, type, values, img, name, isActive, isSelected }]) => (
            <PokemonCard
              key={key}
              key_={key}
              id={id}
              type={type}
              values={values}
              img={img}
              name={name}
              isActive={!isActive ? true : false}
              isSelected={isSelected}
              handleClickCard={handleClickCard}
            />
          )
        )}
      </div>
    </>
  );
};

export default StartPage;
