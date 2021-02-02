
import {useState} from "react";
import Navbar from "../routes/Home/Navbar";
import Menu from "../routes/Home/Menu";


const MenuHeader = () => {
    const [isActive, setActive] = useState(true)
    const changeState = () => {
        setActive(!isActive)
    }
    switch (isActive) {
        case true:
            return <Navbar changeState={changeState} />
        case false:
            return <Menu changeState={changeState}/>
        default:
    }
    return (
        <div>


        </div>
    )
}

export default MenuHeader