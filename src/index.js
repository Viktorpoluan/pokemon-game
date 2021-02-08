import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App';
import firebaseD from "./service/fireBase";
import {FireBaseContexts} from "./components/context/firebaseContext";
/*import state from "./State";*/

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FireBaseContexts.Provider value={new firebaseD()}>
                <App /*state = {state}*//>
            </FireBaseContexts.Provider>

        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

