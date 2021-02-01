import {useState} from 'react'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";



const App = (props) => {
    const handleChangePage = (page) => {
        setPage(page)
    }
    const [page, setPage] = useState('app')
    switch (page) {
        case 'app':
            return <HomePage onChangePage={handleChangePage} state={props.state}/>
        case 'game':
            return <GamePage/>
        default:
            return <HomePage/>
    }
    return (
        <div>

        </div>
    )
}

export default App
