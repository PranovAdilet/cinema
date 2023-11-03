import {useEffect} from 'react';
import {getCinema, sortFilms} from "../../redux/store/reducers/cinema";
import {useSelector} from "react-redux";
import FilmsCard from "./FilmsCard/FilmsCard";
import SkeletonCard from "./SkeletonCard/SkeletonCard";
import FilmsSort from "./FilmsFilter/FilmsSort";
import FilmsYear from "./FilmsFilter/FilmsYear";
import { selectFilms} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"

const Films = () => {

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


    return (
        <section className="films">
            <div className="container">
                <h2 className="films__title">
                    Фильмы
                </h2>
                <div className="films__sort">
                    <select onChange={(e) => {
                        const selectedValue = e.target.value
                        if (selectedValue === "rating"){
                            dispatch(sortFilms("rating"))
                        }else if(selectedValue === "popularity"){
                            dispatch(sortFilms("viewCount"))
                        }else if(selectedValue === "date"){
                            dispatch(sortFilms("year"))
                        }
                    }} className="films__select">
                        <option value="popularity" selected>По популярности</option>
                        <option value="date">Дате</option>
                        <option value="rating">Рейтингу</option>
                    </select>
                </div>
                <div className="films__filter">
                    <div className="films__filter-sort">
                        <FilmsSort/>
                        <FilmsYear/>
                    </div>
                </div>
                <div className="films__row">
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