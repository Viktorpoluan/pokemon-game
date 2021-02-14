import React, { useState } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import StartPage from "./routes/Start";
import BoardPage from "./routes/Board";
import FinishPage from "./routes/Finish";
import { PokemonContext } from "../../context/pokemonContext";

const IndexPage = () => {
  const [selectedPokemons, setSelectedPokemons] = useState({});
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [player2Cards, setPlayer2Cards] = useState([]);
  const match = useRouteMatch();

  const handleSelectedPokemons = (key, pokemon) => {
    setSelectedPokemons((prevState) => {
      if (prevState[key]) {
        const copyState = { ...prevState };
        delete copyState[key];
        return copyState;
      }
      return { ...prevState, [key]: pokemon };
    });
  };

  return (
    <PokemonContext.Provider
        value={{
          selectedPokemons,
          setSelectedPokemons,
          handleSelectedPokemons,
          setPlayer1Cards,
          setPlayer2Cards,
          player1Cards,
          player2Cards,
        }}
    >
      <Switch>
        <Route path={`${match.path}/`} exact component={StartPage} />
        <Route path={`${match.path}/board`} component={BoardPage} />
        <Route path={`${match.path}/finish`} component={FinishPage} />
        <Route render={() => <Redirect to={`${match.path}/`} />} />
      </Switch>
    </PokemonContext.Provider>
  );
};

export default IndexPage;
