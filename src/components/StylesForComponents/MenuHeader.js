import Navbar from "../../routes/Home/Navbar";
import Menu from "../../routes/Home/Menu";
import {useState} from "react";

const MenuHeader = (props) => {
    const handleChangeList = (list) => {
        setList(list)
    }
    const [list, setList] = useState('navbar')
    switch (list) {
        case 'menu':
            return <Menu onChangeList={handleChangeList}/>
        case 'navbar':
            return <Navbar onChangeList={handleChangeList}/>
        default:
            return <Navbar/>
    }
    return (
        <div>

        </div>
    )
}

export default MenuHeader
