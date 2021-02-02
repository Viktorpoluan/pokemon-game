import Navbar from "../../routes/Home/Navbar";
import Menu from "../../routes/Home/Menu";
import {useState} from "react";


const MenuHeader = (props) => {

    const handleChangePage = (page) => {
        setPage(page)
    }
    const [page, setPage] = useState('menu')
    switch (page) {
        case 'navbar':
            return <Navbar onChangePage={handleChangePage} />
        case 'menu':
            return <Menu onChangePage={handleChangePage}/>

        default:
            return <Navbar/>
    }
    return (
        <div>


        </div>
    )
}

export default MenuHeader