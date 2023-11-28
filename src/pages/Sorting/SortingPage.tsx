import React from 'react';
import {Link} from "react-router-dom";

const SortingPage = () => {
    return (
        <div className="favorites">
            <div className="container">
                <div className="favorites__top">
                    <Link to="/" className="favorites__profile">Главное</Link>
                    <p className="favorites__text">-</p>
                    <Link to="/films" className="favorites__text">Фильмы</Link>
                </div>
                <h2 className="favorites__title">Фильмы:</h2>
                <div className="favorites__cards">

                </div>
            </div>

        </div>
    );
};

export default SortingPage;