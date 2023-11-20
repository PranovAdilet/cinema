import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import RatingUi from "@mui/material/Rating"

interface IProps{
    setRatingState: (value: boolean) => void
}
const RatingContent = ({setRatingState}: IProps) => {

    return (
        <div className="rating">
            <div className="rating__content">
                <h2 className="rating__title">Ваша оценка</h2>
                <p className="rating__text">Оценки улучшают рекомендации</p>
                <RatingUi/>
                <button className="rating__btn">Оценить</button>
            </div>
            <AiOutlineClose onClick={() => setRatingState(false)} className="rating__icon"/>
        </div>
    );
};

export default RatingContent