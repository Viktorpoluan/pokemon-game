import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import s from './StyleForComponents/PlayBoard.module.css'
import cl from 'classnames'
import j from './StyleForComponents/PokemonCard.module.css'

const PlayerBoard = ({ player, cards, onClickCard, minimize }) => {
    const [isSelected_, setSelected] = useState(null);

    const handleClickCard = (id) => {
        setSelected(id);
    };

    return (
        <div className={cl(s.cardBoard, j.selected)}>
            {cards.map((card) => (
                <PokemonCard
                    key={card.id}
                    key_={card.id}
                    id={card.id}
                    type={card.type}
                    values={card.values}
                    img={card.img}
                    name={card.name}
                    minimize={minimize}
                    className={s.card}
                    isActive={true}
                    isSelected={true}
                    isSelected_={isSelected_}
                    handleClickCard={handleClickCard}
                    onClickCard={() => {
                        onClickCard({ player, ...card });
                    }}
                />
            ))}
        </div>
    );
};
export default PlayerBoard;