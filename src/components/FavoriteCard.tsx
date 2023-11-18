import React from 'react';
import {BiSolidTrashAlt} from "react-icons/bi";
import {removeFavorite} from "../redux/store/reducers/favorites";
import {useSelector} from "react-redux";
import {selectCartoons, selectFavorites, selectFilms, selectSeries} from "../redux/reduxSelectors/reduxSelectors";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import {IFilm} from "../interface/app.interface";
import {useNavigate} from "react-router-dom";

const FavoriteCard = ({item} : {item : IFilm}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {data : films} = useSelector(selectFilms)


    const {data: cartoons} = useSelector(selectCartoons)
    const {data: series} = useSelector(selectSeries)
    const typeFunction = () => {
            if (films.find((el) => el.title === item.title)){
                return `/film/${item.id}`
            }else if (series.find((el) => el.title === item.title)){
                return `/series/${item.id}`
            } else if (cartoons.find((el) => el.title === item.title)){
                return `/cartoons/${item.id}`
            }else {
                alert("Ошибка в пути!")
                return "/"
            }
    }
    const removeItem = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(removeFavorite(item.id))
    }

    const formatTime = (time: number) => {
        if (!isNaN(time)) {
            return `${Math.floor(time / 60)} ч ${time % 60} мин`;
        } else {
            return `${time}`;
        }
    };

    return (
        <>
            <div onClick={() => navigate(typeFunction())} className="favorites__card">
                <img className="favorites__card-img" src={item.poster} alt=""/>
                <div className="favorites__card-info">
                    <div className="favorites__card-info-top">
                        <h4 className="favorites__card-descr-title">{item.title.length > 17 ? item.title.slice(0,14) +"..." : item.title}</h4>
                        <p className="favorites__card-descr">{item.year}, {item.country}</p>
                        {!isNaN(item.time) ? (
                            <p className="favorites__card-descr">{formatTime(item.time)}</p>
                        ) : (
                            <p className="favorites__card-descr">{item.time}</p>
                        )}
                    </div>
                    <p className="favorites__card-subscr">{item.genre}</p>
                    <BiSolidTrashAlt onClick={(e) => removeItem(e)} className="favorites__trash"/>
                </div>
            </div>
        </>
    );
};

export default FavoriteCard;