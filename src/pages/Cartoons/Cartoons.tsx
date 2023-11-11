import {useEffect, useState} from 'react';
import {clearCartoonsFilters, getCartoons} from "../../redux/store/reducers/cartoons";
import {useSelector} from "react-redux";
import SkeletonCard from "../Films/SkeletonCard/SkeletonCard";
import {selectCartoons} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {TfiClose} from "react-icons/tfi"
import CartoonsCard from "./CartoonsCard/CartoonsCard";
import CartoonsGenreSort from "./CartoonsFilter/CartoonsGenreSort";
import CartoonsYearSort from "./CartoonsFilter/CartoonsYearSort";
import CartoonsRatingSort from "./CartoonsFilter/CartoonsRatingSort";
import CartoonsSort from "./CartoonsFilter/CartoonsSort";
import SortCartoons from "../../components/SortCartoons";
import CartoonsCountrySort from "./CartoonsFilter/CartoonsCountrySort";
import {IFilterState} from "../../interface/app.interface";

const Cartoons = () => {
    const [filterState, setFilterState] = useState<IFilterState>({
        cartoonState: "",
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
            cartoonState: "",
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
                        <CartoonsGenreSort filter={filterState} genreState={filterState.genreState} setFilter={setFilterState}/>
                        <CartoonsYearSort  filter={filterState} year={filterState.year} setFilter={setFilterState}/>
                        <CartoonsRatingSort filter={filterState} rating={filterState.rating} setFilter={setFilterState}/>
                        <CartoonsSort filter={filterState} filmsState={filterState.cartoonState} setFilter={setFilterState}/>
                        <CartoonsCountrySort filter={filterState} country={filterState.country} setFilter={setFilterState}/>
                    </div>
                    <div className="films__filter2">
                        {
                            values.map((item, index) => (
                                <SortCartoons key={index} active={active} setActive={setActive} value={item}/>
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
                                        <CartoonsCard key={item.id} item={item}/>
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