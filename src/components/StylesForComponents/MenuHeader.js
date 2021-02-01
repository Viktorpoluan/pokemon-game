import Navbar from "../../routes/Home/Navbar";
import Menu from "../../routes/Home/Menu";
import {useState} from "react";
import HomePage from "../../routes/Home";
import GamePage from "../../routes/Game";


const MenuHeader = (props) => {
    const handleChangeList = (list) => {
        setList(list)
    }
    const [list, setList] = useState('menu')
    switch (list) {
        case 'menu':
            return <Menu />
        case 'navbar':
            return <Navbar onChangeList={handleChangeList}/>
        default:
            return <Menu/>
    }
    return (
        <div>

        </div>
    )
}

export default MenuHeader
