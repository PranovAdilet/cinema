import {useEffect, useState} from 'react';
import {getCinema, clearFilters} from "../../redux/store/reducers/cinema";
import {useSelector} from "react-redux";
import FilmsCard from "./FilmsCard/FilmsCard";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import GenreSort from "./FilmsFilter/GenreSort";
import FilmsYear from "./FilmsFilter/FilmsYear";
import { selectFilms} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import RatingSort from "./FilmsFilter/RatingSort";
import FilmsSort from "./FilmsFilter/FilmsSort";
import {TfiClose} from "react-icons/tfi"

const Films = () => {
    const [filmsState, setFilmsState ] = useState('')
    const [year, setYear] = useState('');
    const [genreState, setGenreState] = useState('')
    const [rating, setRating] = useState('')

    const dispatch = useAppDispatch()
    const {status, error, data, filter} = useSelector(selectFilms)
    const userValue = localStorage.getItem('user');

    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
        dispatch(getCinema({
            ...filter,
            status:newStatus
        }))
    }, [filter])


    const clearFilter = () => {
        dispatch(clearFilters(filter))
        setFilmsState("")
        setYear("")
        setRating("")
        setGenreState("")
    }


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Фильмы
                </h2>

                <div className="films__filter">
                    <div className="films__filter-sort">
                        <GenreSort genreState={genreState} setGenreState={setGenreState}/>
                        <FilmsYear year={year} setYear={setYear}/>
                        <RatingSort rating={rating} setRating={setRating}/>
                        <FilmsSort filmsState={filmsState} setFilmsState={setFilmsState}/>
                    </div>
                    <div className="films__filter2">
                        <p className="films__item">Новые</p>
                        <p className="films__item">2023 год</p>
                        <p className="films__item">2022 год</p>
                        <p className="films__item">2021 год</p>
                    </div>


                   <div onClick={() => clearFilter()} className="films__close">
                       <span><TfiClose/></span>
                       <p>Сбросить фильтры</p>
                   </div>

                </div>
                <div className={status === 'loading' ? "" : "films__row"}>
                    {
                        status === 'loading' ?
                            <SkeletonCard cards={12}/>
                            : status === 'done' ?
                                <>
                                    {data.map((item) => (
                                            <FilmsCard key={item.id} item={item}/>
                                    ))
                                    }
                                </> : <h2>{error}</h2>
                    }
                </div>
            </div>
        </section>
    );
};

export default Films;