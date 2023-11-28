import React, {useState} from 'react';
import {AiOutlineClose} from "react-icons/ai";
import Rating from "./MUI/Rating";
import {IFilm} from "../interface/app.interface";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import {patchRatingFilm} from "../redux/store/reducers/allFilms";

interface IProps{
    item: IFilm | null
    setRenderRating: (value: boolean) => void
    setRatingState: (value: boolean) => void
}
const RatingContent = ({setRatingState, item, setRenderRating}: IProps) => {

    const dispatch = useAppDispatch()

    const [rate, setRate] = useState<number | null>(item!.rating )


    const submitRating = () => {
        if (item !== null && rate !== null){
            dispatch(patchRatingFilm({
                ...item,
                rating: rate
            }))

        }
        setRatingState(false);
        setRenderRating(true);
    }


    return (
        <div className="rating">
            <div className="rating__content">
                <h2 className="rating__title">Ваша оценка</h2>
                <p className="rating__text">Оценки улучшают рекомендации</p>
                <Rating rate={rate} setRate={setRate}/>
                <button type="button" onClick={() => submitRating()} className="rating__btn">Оценить</button>
            </div>
            <AiOutlineClose onClick={() => setRatingState(false)} className="rating__icon"/>
        </div>
    );
};

export default RatingContent