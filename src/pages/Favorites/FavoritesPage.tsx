import React from 'react';
import img from "../../gotem.jpg"
import {useSelector} from "react-redux";
import {selectFavorites} from "../../redux/reduxSelectors/reduxSelectors";

const FavoritesPage = () => {

    const {favoritesData} = useSelector(selectFavorites)
    console.log(favoritesData)

    return (
        <div className="favorites">
            <div className="container">
                <div className="favorites__top">
                    <p className="favorites__profile">Профиль</p>
                    <p className="favorites__text">-</p>
                    <p className="favorites__text">Смотреть позже</p>
                </div>
                <h2 className="favorites__title">Смотреть позже</h2>
                <div className="favorites__cards">
                    {
                        favoritesData.length && favoritesData.map((item) => (
                            <div className="favorites__card">
                                <img className="favorites__card-img" src={item.poster} alt=""/>
                                <div className="favorites__card-info">
                                    <div className="favorites__card-info-top">
                                        <h4 className="favorites__card-descr-title">{item.title.length > 14 ? item.title.slice(0,14) +"..." : item.title}</h4>
                                        <p className="favorites__card-descr">{item.year}, {item.country}</p>
                                        <p className="favorites__card-descr">{item.time}</p>
                                    </div>
                                    <p className="favorites__card-subscr">Подписка</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default FavoritesPage;