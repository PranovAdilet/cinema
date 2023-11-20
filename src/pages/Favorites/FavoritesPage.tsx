import React from 'react';
import {useSelector} from "react-redux";
import {selectFavorites} from "../../redux/reduxSelectors/reduxSelectors";
import FavoriteCard from "../../components/FavoriteCard";
import { ImBookmarks } from "react-icons/im";

const FavoritesPage = () => {

    const {favoritesData} = useSelector(selectFavorites)

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
                        favoritesData.length ? favoritesData.map((item) => (
                           <FavoriteCard key={item.id} item={item}/> )):
                            <div className="favorites__empty">
                                <ImBookmarks className="favorites__empty-icon"/>
                                <h2 className="favorites__text">Здесь будут фильмы, которые ты решишь посмотреть позже</h2>
                            </div>
                    }
                </div>
            </div>

        </div>
    );
};

export default FavoritesPage;