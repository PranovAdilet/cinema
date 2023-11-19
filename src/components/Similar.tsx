import React from 'react';
import {useNavigate} from "react-router-dom";
import {ImMagicWand} from "react-icons/im";
import {IFilm} from "../interface/app.interface";

const Similar = ({item} : {item: IFilm}) => {

    const navigate = useNavigate()

    const similarFunction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault()
        navigate(`/similar/${item.id}`)
    }

    return (
        <span onClick={(e) => similarFunction(e)} className="film-list__card-icon">
                                            <ImMagicWand/>
                                               <span className="film-list__card-move">
                                               Похожее
                                            </span>
                                        </span>
    );
};

export default Similar;