import s from './style.module.css';

import {PokemonContext} from "../../../../components/context/pokemonContext";
import {useContext} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import {FireBaseContexts} from "../../../../components/context/firebaseContext";
import {useState} from "react";

const BoardPage = () => {
        return (
            <div className={s.root}>
                <div className={s.playerOne}>
                </div>
                <div className={s.board}>
                    <div className={s.boardPlate}>1</div>
                    <div className={s.boardPlate}>2</div>
                    <div className={s.boardPlate}>3</div>
                    <div className={s.boardPlate}>4</div>
                    <div className={s.boardPlate}>5</div>
                    <div className={s.boardPlate}>6</div>
                    <div className={s.boardPlate}>7</div>
                    <div className={s.boardPlate}>8</div>
                    <div className={s.boardPlate}>9</div>
                </div>
            </div>
        );
    }
;

export default BoardPage;
