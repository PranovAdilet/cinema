import React, {useEffect, useState} from 'react';
import {getCinema, clearFilters} from "../../redux/store/reducers/cinema";
import {useSelector} from "react-redux";
import Card from "../../components/Card";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import GenreSort from "../../components/FilmsFilter/GenreSort";
import FilmsYear from "../../components/FilmsFilter/FilmsYear";
import {selectData, selectFilms} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import RatingSort from "../../components/FilmsFilter/RatingSort";
import FilmsSort from "../../components/FilmsFilter/FilmsSort";
import {TfiClose} from "react-icons/tfi"
import FilmsActiveItem from "../../components/FilmsActiveItem";
import {IFilterState} from "../../interface/app.interface";
import FilmsCountrySort from "../../components/FilmsFilter/FilmsCountrySort";


const Films = () => {
    window.scroll(0, 0)

    const [filterState, setFilterState] = useState<IFilterState>({
        state: "",
        year: "",
        genreState: "",
        country: "",
        rating: ""
    })
    const [active, setActive] = useState('')

    const dispatch = useAppDispatch()

    const {status, error, data, filter} = useSelector(selectFilms)


    const values = ["2023", "2022", "2021", "Новые", "Япония", "Россия", "Лучшие"]


    useEffect(() => {
        dispatch(getCinema({
            ...filter
        }))
    }, [filter])


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
        <>
            <section className="films">
                <div className="container">
                    <h2 className="films__title">
                        Фильмы
                    </h2>

                    <div className="films__filter">
                        <div className="films__filter-sort">
                            <GenreSort setFilter={setFilterState} filter={filterState}/>
                            <FilmsYear filter={filterState} setFilter={setFilterState}/>
                            <RatingSort filter={filterState}  setFilter={setFilterState}/>
                            <FilmsCountrySort filter={filterState}  setFilter={setFilterState}/>
                            <FilmsSort filter={filterState}  setFilter={setFilterState}/>
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

        </>

    );
};

export default Films;