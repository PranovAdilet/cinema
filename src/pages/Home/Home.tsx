import React, {useEffect} from "react";
import Slider from "../../components/MUI/Slider";
import FilmList from "../../components/MUI/FilmsList";
import {getCinema} from "../../redux/store/reducers/cinema";
import {useSelector} from "react-redux";
import {selectCartoons, selectFilms, selectSeries} from "../../redux/reduxSelectors/reduxSelectors";
import {getSeries} from "../../redux/store/reducers/series";
import {getCartoons} from "../../redux/store/reducers/cartoons";
import {IFilter} from "../../interface/app.interface";
import {useAppDispatch} from "../../redux/hooks/reduxHooks";

const Home = () => {
    const {filter: filterSeries, data : dataSeries} = useSelector(selectSeries)
    const {filter : filterCartoons, data : dataCartoons} = useSelector(selectCartoons)
    const {filter : filterFilms, data : dataFilms} = useSelector(selectFilms)

    const dispatch = useAppDispatch()
    const fetchData = (filter : IFilter, dispatchFunction : Function) => {
        dispatch(dispatchFunction(filter))
    };

    useEffect(() => {
        fetchData(filterFilms, getCinema);
        fetchData(filterSeries, getSeries);
        fetchData(filterCartoons, getCartoons);
    }, []);

    return (

        <div>
            <Slider/>
            <FilmList data={dataFilms}/>
            <FilmList data={dataSeries}/>
            <FilmList data={dataCartoons}/>
        </div>
    );
};

export default Home;