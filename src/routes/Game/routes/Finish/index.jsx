import React, { useContext, useEffect, useState } from "react";
import { FireBaseContext } from "../../../../context/fireBaseContext";
import { PokemonContext } from "../../../../context/pokemonContext";
import { useHistory } from "react-router-dom";
import PlayerBoard from "../../../../components/PlayerBoard";
// import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";

export default function FinishPage() {
    const history = useHistory();
    const { player1Cards, player2Cards, setSelectedPokemons } = useContext(PokemonContext);
    const { addPokemon } = useContext(FireBaseContext);
    // const [isSelected_, setSelected] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        !Object.values(player2Cards).length && history.replace("/game");
    }, [player2Cards, history]);

    const handleClickCard = (card) => {
        setSelectedCard(card);
    };
    const handleClickButton = (id) => {
        addPokemon({
            ...selectedCard,
            isActive: false,
            isSelected: false,
            possession: "",
        });
        setSelectedPokemons && setSelectedPokemons({})
        history.push("/game");
    };
    // console.log("FinishPage|player1Cards", player1Cards);
    // console.log("FinishPage|player2Cards", player2Cards);

    // const handleClickCard = (id) => {
    //   setSelected(id);
    // };

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    className={s.playerOne}
                    player={1}
                    cards={[...Object.values(player1Cards)]}
                    onClickCard={handleClickCard}
                />
            </div>
            <div className={s.buttonWrap}>
                <button
                    onClick={handleClickButton}
                    // disabled={selectedCard.id}
                >
                    Add selected pokemon
                </button>
            </div>
            <div className={s.playerTwo}>
                <PlayerBoard
                    className={s.playerTwo}
                    player={1}
                    cards={player2Cards}
                    onClickCard={handleClickCard}
                />
            </div>
        </div>
    );
}