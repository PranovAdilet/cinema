import React from 'react';
import {AiOutlineStar} from "react-icons/ai";

interface IProps {
    setRatingState: (value: boolean) => void
}

const RatingFilm = ({setRatingState}: IProps) => {
    return (
        <span onClick={(e) => {
            e.preventDefault()
            setRatingState(true)
        }} className="film-list__card-icon">
            <AiOutlineStar/>
            <span className="film-list__card-move">
                Oценить
            </span>
        </span>
    );
};

export default RatingFilm;