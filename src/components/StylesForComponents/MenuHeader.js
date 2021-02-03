import Navbar from "../../routes/Home/Navbar";
import Menu from "../../routes/Home/Menu";
import {useState} from "react";


const MenuHeader = ({bgActive}) => {

    const handleChangePage = () => {
        setOpen(prevState => !prevState)
    }
    const [isOpen, setOpen] = useState(null)

    return (
        <>
            <Navbar isOpen={isOpen} bgActive={bgActive} onChangePage={handleChangePage}/>

            <Menu isOpen={isOpen}/>
        </>
    )

}


export default MenuHeader


