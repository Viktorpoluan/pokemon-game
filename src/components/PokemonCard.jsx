import React from "react";
import s from "./StyleForComponents/PokemonCard.module.css";

const PokemonCard = ({key_, id, type, values: {top, right, bottom, left}, img, classNames, name, isActive, minimize, isSelected, isSelected_, handleClickCard, onClickCard, possession
                     }) => {
    const handleClick = () => {
        handleClickCard && handleClickCard(key_);
        onClickCard && onClickCard();
    };


return (
    <div className={minimize ? s.root__min : s.root} onClick={handleClick} >
        <div
            className={`
            ${classNames}
          ${s.pokemonCard}
          ${isSelected && s.selected} 
          ${isActive ? s.active : ""} 
          ${isSelected_ === id ? s.selected2 : ""}
          `}

        >
            <div className={s.cardFront}>
                <div className={`${s.wrap} ${s.front}`}>
                    <div className={`${s.pokemon} ${s[type]}`} style={{backgroundColor:possession}}>
                        <div className={s.values}>
                            <div className={`${s.count} ${s.top}`}>{top}</div>
                            <div className={`${s.count} ${s.right}`}>{right}</div>
                            <div className={`${s.count} ${s.bottom}`}>{bottom}</div>
                            <div className={`${s.count} ${s.left}`}>{left}</div>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={img} alt={name}/>
                        </div>
                        {!minimize && (
                            <div className={s.info}>
                                <span className={s.number}>#{id}</span>
                                <h3 className={s.name}>{name}</h3>
                                <small className={s.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={s.cardBack}>
                <div className={`${s.wrap} ${s.back}`}></div>
            </div>
        </div>
    </div>
)}


export default PokemonCard
