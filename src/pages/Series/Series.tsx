import {useEffect, useState} from 'react';
import {getSeries} from "../../redux/store/reducers/series";
import {useSelector} from "react-redux";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import { selectSeries} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import OneSeriesCard from "../../components/Series/OneSeriesCard/OneSeriesCard";
import {IFilterState} from "../../interface/app.interface";
import {clearFilters} from "../../redux/store/reducers/cinema";
import FilmsActiveItem from "../../components/Films/FilmsActiveItem";
import {TfiClose} from "react-icons/tfi";
import RatingSort from "../../components/Films/FilmsFilter/RatingSort";
import FilmsSort from "../../components/Films/FilmsFilter/FilmsSort";
import FilmsCountrySort from "../../components/Films/FilmsFilter/FilmsCountrySort";
import SeriesGenreSort from "../../components/Series/SeriesFilter/SeriesGenreSort";
import SeriesYearSort from "../../components/Series/SeriesFilter/SeriesYearSort";
import SeriesCountrySort from "../../components/Series/SeriesFilter/SeriesCountrySort";
import SeriesSort from "../../components/Series/SeriesFilter/SeriesSort";
import SeriesRatingSort from "../../components/Series/SeriesFilter/SeriesRatingSort";



const Series = () => {
    const [filterState, setFilterState] = useState<IFilterState>({
        state: "",
        year: "",
        genreState: "",
        country: "",
        rating: ""
    })
    const [active, setActive] = useState('')

    const dispatch = useAppDispatch()
    const {status, error, data, filter} = useSelector(selectSeries)


    const userValue = localStorage.getItem('user');

    const values = ["2023", "2022", "2021", "Новые", "Япония", "Россия"]

    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
       dispatch( getSeries({
           ...filter,
           status:newStatus
       }))
    },[filter])

    const clearFilter = () => {
        dispatch(clearFilters(filter))
        setFilterState({
            state: "",
            year: "",
            genreState: "",
            country: "",
            rating: ""
        })
        setActive("")
    }


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Сериалы
                </h2>

                <div className="films__filter">
                    <div className="films__filter-sort">
                        <SeriesGenreSort filter={filterState}  setFilter={setFilterState}/>
                        <SeriesYearSort filter={filterState}  setFilter={setFilterState}/>
                        <SeriesRatingSort filter={filterState}  setFilter={setFilterState}/>
                        <SeriesCountrySort filter={filterState}  setFilter={setFilterState}/>
                        <SeriesSort filter={filterState}  setFilter={setFilterState}/>
                    </div>
                    <div className="films__filter2">
                        {
                            values.map((item, index) => (
                                <FilmsActiveItem key={index} active={active} setActive={setActive} value={item}/>
                            ))
                        }
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