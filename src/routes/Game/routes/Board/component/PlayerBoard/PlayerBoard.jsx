import PokemonCard from "../../../../../../components/PokemonCard";
/*import c from '../../../Board/style.module.css'*/
import cl from 'classnames'
import cx from './style.module.css'
import {useState} from "react";

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [selected, setSelected] = useState(null)

    return (
        <>
            {cards.map((item) => (
                    <div className={cl(cx.cardBoard,{[cx.selected]:selected === item.id})} onClick={() => {
                        setSelected(item.id);
                        onClickCard && onClickCard({player,...item})
                    }}>
                        <PokemonCard
                            key={item.id}
                            type={item.type}
                            values={item.values}
                            img={item.img}
                            name={item.name}
                            id={item.id}
                            minimize
                            isActive
                        />
                    </div>
                )
            )}
        </>
    )
}
export default PlayerBoard