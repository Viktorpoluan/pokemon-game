import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import App from './App';
import state from "./State";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
        <App state = {state}/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)

