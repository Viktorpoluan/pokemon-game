import s from './style.module.css';
import {PokemonContext} from "../../../../components/context/pokemonContext";
import {useContext, useState, useEffect} from "react";
import PokemonCard from "../../../../components/PokemonCard";
import {useHistory} from "react-router-dom";
import PlayerBoard from "./component/PlayerBoard/PlayerBoard";


const BoardPage = () => {
        const {pokemons} = useContext(PokemonContext)
        const [board, setBoard] = useState([])
        const [player1, setPlayer1] = useState(() => {
            return Object.values(pokemons).map(item => ({
                ...item,
                possession: 'blue'
            }))
        })
        const [player2, setPlayer2] = useState([])
        const [chCard, setChCard] = useState(null)

        const history = useHistory()
        useEffect(async () => {
            const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board')// получаем из базы борд
            const boardRequest = await boardResponse.json()
            setBoard(boardRequest.data)
            const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player')// получаем из базы 2 игрока
            const player2Request = await player2Response.json()
            setPlayer2(() => {
                return player2Request.data.map(item => ({
                    ...item,
                    possession: 'red'
                }))
            })
            console.log(player2)
        }, [])

        const handleClickBP = async (position) => {
            if (chCard) {
                const params = {
                    position,
                    card: chCard,
                    board
                }

                const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(params),
                });

                const request = await res.json();
                setBoard(request.data)
            }
        }
        /*if (Object.keys(pokemons).length===0){
            history.replace('/game')
        }*/
        return (
            <div className={s.root}>
                <div className={s.playerOne}>
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onClickCard={(card) => setChCard(card)}
                    />

                </div>
                <div className={s.playerTwo}>
                    <PlayerBoard
                        player={2}
                        cards={player2}
                        onClickCard={(card) => setChCard(card)}
                    />
                </div>
                <div className={s.board}>
                    {board.map(item => (
                        <div
                            key={item.position}
                            className={s.boardPlate}
                            onClick={() => !item.card ? handleClickBP(item.position) : ''}
                        >
                            {item.card ? <PokemonCard {...item.card} isActive minimize/> : ''}
                        </div>
                    ))}

                </div>

            </div>
        );
    }
;

export default BoardPage;
