import React, {useEffect, useState} from "react";
import Slider from "../../components/MUI/Slider";
import FilmList from "../../components/MUI/FilmsList";
import {getCinema} from "../../redux/store/reducers/cinema";
import {useSelector} from "react-redux";
import {selectCartoons, selectFilms, selectSeries} from "../../redux/reduxSelectors/reduxSelectors";
import {getSeries} from "../../redux/store/reducers/series";
import {getCartoons} from "../../redux/store/reducers/cartoons";
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import Sorting from "../../components/Sorting";

const Home = () => {
    const { data : dataSeries} = useSelector(selectSeries)
    const { data : dataCartoons} = useSelector(selectCartoons)
    const { data : dataFilms} = useSelector(selectFilms)

    const [stateRenderRating, setStateRenderRating] = useState<boolean>(false)

    const newFilter = {
        genre : '',
        year: '',
        search: '',
        sort: '',
        rating: "",
        country: "",
        type: "films"
    }
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getCinema(newFilter))
        dispatch(getCartoons(newFilter))
        dispatch(getSeries(newFilter))
        setStateRenderRating(false)

    }, [stateRenderRating]);

    return (

        <div>
            <Slider/>
            <Sorting/>
            <FilmList setStateRenderRating={setStateRenderRating} stateRenderRating={stateRenderRating} data={dataFilms}/>
            <FilmList  setStateRenderRating={setStateRenderRating} stateRenderRating={stateRenderRating} data={dataSeries}/>
            <FilmList  setStateRenderRating={setStateRenderRating} stateRenderRating={stateRenderRating} data={dataCartoons}/>
            <FilmList setStateRenderRating={setStateRenderRating} stateRenderRating={stateRenderRating} data={dataFilms}/>
            <FilmList  setStateRenderRating={setStateRenderRating} stateRenderRating={stateRenderRating} data={dataSeries}/>
        </div>
    );
};

export default Home;