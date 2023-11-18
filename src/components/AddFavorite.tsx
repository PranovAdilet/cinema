import React from 'react';
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {IFilm} from "../interface/app.interface";
import {addFavorite, removeFavorite} from "../redux/store/reducers/favorites";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import {useSelector} from "react-redux";
import { selectFavorites} from "../redux/reduxSelectors/reduxSelectors";

const AddFavorite = ({item} : {item: IFilm}) => {

    const dispatch = useAppDispatch()
    const {favoritesData} = useSelector(selectFavorites)

    const addFavoriteHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, item: IFilm) => {
        e.preventDefault()
        favoritesData.find((el) => el.title === item.title)  ?
            dispatch(removeFavorite(item.id)) : dispatch(addFavorite(item))

    }
    return (
        <span onClick={(e) => addFavoriteHandler(e,item)} className="film-list__card-icon">
                                            {
                                                favoritesData.find((el) => el.title === item.title) ? <BsBookmarkFill/> : <BsBookmark/>
                                            }
            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
    );
};

export default AddFavorite;