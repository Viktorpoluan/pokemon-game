import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";
import s from "./style.module.css";
import PlayerBoard from "../../../../components/PlayerBoard";
import Result from "../../../../components/Result";

const counterWin = (board, player1, player2) => {
    let palyer1Count = player1.length;
    let palyer2Count = player2.length;
    board.forEach((item) => {
        if (item.card.possession === "red") {
            palyer2Count++;
        }
        if (item.card.possession === "blue") {
            palyer1Count++;
        }
    });
    return [palyer1Count, palyer2Count];
};

const BoardPage = () => {
    const history = useHistory();

    const {
        selectedPokemons,
        setPlayer1Cards,
        setPlayer2Cards,
        setSelectedPokemons,
    } = useContext(PokemonContext);

    const [board, setBoard] = useState([]);
    // const [player1, setPlayer1] = useState(selectedPokemons);
    const [player1, setPlayer1] = useState(() =>
        Object.values(selectedPokemons).map((item) => ({
            ...item,
            possession: "blue",
        }))
    );
    const [player2, setPlayer2] = useState([]);
    const [choiseCard, setChoiseCard] = useState(null);
    const [steps, setSteps] = useState(0);
    const [winner, setWinner] = useState(null);

    // console.log("choiseCard", choiseCard);

    const getBoard = async () => {
        const boardRequest = await fetch(
            "https://reactmarathon-api.netlify.app/api/board"
        );
        const boardResponse = await boardRequest.json();
        setBoard(boardResponse.data);
    };

    const getPlayer2 = React.useCallback(async () => {
        const player2Request = await fetch(
            "https://reactmarathon-api.netlify.app/api/create-player"
        );
        const player2Response = await player2Request.json();
        const player2Cards = player2Response.data.map((item) => ({
            ...item,
            possession: "red",
        }));
        setPlayer2(player2Cards);
        setPlayer2Cards(player2Cards);
        setPlayer1Cards(selectedPokemons);
    }, [selectedPokemons, setPlayer1Cards, setPlayer2Cards]);

    useEffect(() => {
        getBoard();
        getPlayer2();
    }, [getPlayer2]);

    useEffect(() => {
        if (Object.keys(selectedPokemons).length === 0) {
            history.replace("/game");
        }
    }, [selectedPokemons, history]);

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);

            if (count1 > count2) {
                setWinner("win");
            } else if (count1 < count2) {
                setWinner("lose");
            } else {
                setWinner("draw");
            }
        }
        return () => setWinner(null);
    }, [steps, board, player1, player2]);

    // const handleClickCard = () => {
    //   console.log("BoardPage|handleClickCard");
    // };

    const handleClickBoardPlate = async (position) => {
        if (choiseCard) {
            const params = {
                position,
                card: choiseCard,
                board,
            };

            const res = await fetch(
                "https://reactmarathon-api.netlify.app/api/players-turn",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(params),
                }
            );
            const request = await res.json();
            setBoard(request.data);

            if (choiseCard.player === 1) {
                setPlayer1((prevState) =>
                    prevState.filter((card) => card.id !== choiseCard.id)
                );
            } else {
                setPlayer2((prevState) =>
                    prevState.filter((card) => card.id !== choiseCard.id)
                );
            }
            setChoiseCard(null);
            setSteps((prevState) => prevState + 1);
        }
    };
    const handleStartGame = () => {
        if (winner === "win") {
            history.push("/game/finish");
        } else {
            history.push("/game");
            setSelectedPokemons && setSelectedPokemons({});
        }
    };
    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={Object.values(player1)}
                    minimize={true}
                    onClickCard={setChoiseCard}
                />
            </div>

            <div className={s.board}>
                {board.map((item) => (
                    <div
                        key={item.position}
                        className={s.boardPlate}
                        onClick={() => !item.card && handleClickBoardPlate(item.position)}
                    >
                        {item.card && <PokemonCard {...item.card} minimize isActive />}
                    </div>
                ))}
            </div>

            <div className={s.playerTwo}>
                <PlayerBoard
                    player={2}
                    cards={player2}
                    minimize={true}
                    onClickCard={setChoiseCard}
                />
            </div>
            {steps === 9 && (
                <Result type={winner} handleStartGame={handleStartGame} />
                )}
            </div>
    );
};

export default BoardPage;
