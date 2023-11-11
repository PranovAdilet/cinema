import {useEffect} from 'react';
import {getSeries} from "../../redux/store/reducers/series";
import {useSelector} from "react-redux";
import SkeletonCard from "../Films/SkeletonCard/SkeletonCard";
import { selectSeries} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import SeriesSort from "../Series/SeriesFilter/SeriesSort";
import SeriesYear from "../Series/SeriesFilter/SeriesYear";
import OneSeriesCard from "../OneSeries/OneSeriesCard/OneSeriesCard";



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