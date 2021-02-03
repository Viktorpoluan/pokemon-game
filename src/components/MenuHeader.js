import Navbar from "../routes/Home/Navbar";
import Menu from "../routes/Home/Menu";
import {useState} from "react";


const MenuHeader = ({isPageActive}) => {

    const handleChangePage = () => {
        setUsed(prevState => !prevState)
    }
    const [isUsed, setUsed] = useState(null)

    return (
        <>
            <Navbar isUsed={isUsed} isPageActive={isPageActive} onChangePage={handleChangePage}/>

            <Menu isUsed={isUsed}/>
        </>
    )

}


export default MenuHeader