import {useEffect, useState} from 'react';
import {clearCartoonsFilters, getCartoons} from "../../redux/store/reducers/cartoons";
import {useSelector} from "react-redux";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";
import {selectCartoons} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {TfiClose} from "react-icons/tfi"
import CartoonsGenreSort from "../../components/CartoonsFilter/CartoonsGenreSort";
import CartoonsYearSort from "../../components/CartoonsFilter/CartoonsYearSort";
import CartoonsRatingSort from "../../components/CartoonsFilter/CartoonsRatingSort";
import CartoonsSort from "../../components/CartoonsFilter/CartoonsSort";
import SortCartoons from "../../components/CartoonsFilter/SortCartoons";
import CartoonsCountrySort from "../../components/CartoonsFilter/CartoonsCountrySort";
import {IFilterState} from "../../interface/app.interface";
import Card from "../../components/Card";

const Cartoons = () => {
    const [filterState, setFilterState] = useState<IFilterState>({
        state: "",
        year: "",
        genreState: "",
        country: "",
        rating: ""
    })

    const [active, setActive] = useState('')

    const values = ["2023", "2022", "2021", "Новые", "Япония", "Россия"]

    const dispatch = useAppDispatch()
    const {status, error, data, filter} = useSelector(selectCartoons)
    const userValue = localStorage.getItem('user');

    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
        dispatch(getCartoons({
            ...filter,
            status:newStatus
        }))
    }, [filter])

    const clearFilter = () => {
        dispatch(clearCartoonsFilters(filter))
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
                    Мультфильмы
                </h2>

                <div className="films__filter">
                    <div className="films__filter-sort">
                        <CartoonsGenreSort  filter={filterState}  setFilter={setFilterState}/>
                        <CartoonsYearSort  filter={filterState}  setFilter={setFilterState}/>
                        <CartoonsRatingSort filter={filterState}  setFilter={setFilterState}/>
                        <CartoonsCountrySort filter={filterState}  setFilter={setFilterState}/>
                        <CartoonsSort filter={filterState}  setFilter={setFilterState}/>
                    </div>
                    <div className="films__filter2">
                        {
                            values.map((item) => (
                                <SortCartoons filter={{...filter, status: newStatus}} key={item} active={active} setActive={setActive} value={item}/>
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

export default Cartoons;