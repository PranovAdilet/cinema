import {useEffect} from 'react';
import {getSeries} from "../../redux/store/reducers/series";
import {useSelector} from "react-redux";
import SkeletonCard from "../Films/SkeletonCard/SkeletonCard";
import { selectSeries} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import SeriesSort from "../Series/SeriesFilter/SeriesSort";
import SeriesYear from "../Series/SeriesFilter/SeriesYear";
import OneSeries from "./OneSeries/OneSeries";
import OneSeriesCard from "./OneSeries/OneSeriesCard/OneSeriesCard";



const Series = () => {

    const dispatch = useAppDispatch()
    const {status, error, data, filter} = useSelector(selectSeries)

    const userValue = localStorage.getItem('user');

    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
       dispatch( getSeries({
           ...filter,
           status:newStatus
       }))
    },[filter])


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Сериалы
                </h2>
                <div className="films__sort">
                    <select>
                        <option value="" selected>По популярности</option>
                        <option value="" >Дате</option>
                        <option value="" >Рейтингу</option>
                    </select>
                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <select>
                            <option value="" disabled>Жанры</option>
                            <option value="" >Комедии</option>
                            <option value="" >Аниме</option>
                        </select>
                        <select>
                            <option value="" disabled>Страны</option>
                            <option value="" >США</option>
                            <option value="" >Япония</option>
                        </select>
                        <select>
                            <option value="" disabled>Годы</option>
                            <option value="" >2022</option>
                            <option value="" >2021</option>
                        </select>
                    </div>

                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <SeriesSort/>
                        <SeriesYear/>
                    </div>
                </div>
                <div className={status === 'loading' ? "" : "films__row"}>
                    {
                        status === 'loading' ?
                            <SkeletonCard cards={12}/>
                            : status === 'done' ?
                                <>
                                    {data.map((item) => (
                                        <OneSeriesCard key={item.id} item={item}/>
                                    ))
                                    }
                                </> : <h2>{error}</h2>
                    }
                </div>
            </div>
        </section>
    );
};

export default Series;