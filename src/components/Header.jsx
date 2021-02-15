import React from "react";
import {useHistory} from "react-router-dom";
import s from "./StyleForComponents/Header.module.css";

const Header = ({
                    title = "Title",
                    descr = "Descripttion",
                    setPage,
                    children,
                }) => {
    const history = useHistory();

    const handleClick = () => {
        history.push("/game");
    };
    return (
        <div className={s.root}>
            <header className={s.root}>
                <div className={s.forest}></div>
                <div className={s.silhouette}></div>
                <div className={s.moon}></div>
                <div className={s.container}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <div className={s.buttonWrap}>
                        <button className={s.button} onClick={handleClick}>
                            Start Game
                        </button>
                    </div>
                </div>
            </header>
            {children}
        </div>

    );
};

export default Header
