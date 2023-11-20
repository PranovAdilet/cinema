import {useEffect, useState} from 'react';
import {getSeries} from "../../redux/store/reducers/series";
import {useSelector} from "react-redux";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import { selectSeries} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {IFilterState} from "../../interface/app.interface";
import {clearFilters} from "../../redux/store/reducers/cinema";
import FilmsActiveItem from "../../components/FilmsActiveItem";
import {TfiClose} from "react-icons/tfi";
import SeriesGenreSort from "../../components/SeriesFilter/SeriesGenreSort";
import SeriesYearSort from "../../components/SeriesFilter/SeriesYearSort";
import SeriesCountrySort from "../../components/SeriesFilter/SeriesCountrySort";
import SeriesSort from "../../components/SeriesFilter/SeriesSort";
import SeriesRatingSort from "../../components/SeriesFilter/SeriesRatingSort";
import Card from "../../components/Card";



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


    const values = ["2023", "2022", "2021", "Новые", "Япония", "Россия"]


    useEffect(() => {
       dispatch( getSeries({
           ...filter
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
                                        <Card key={item.id} item={item}/>
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