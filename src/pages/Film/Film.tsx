import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import {getOneFilm} from "../../redux/store/reducers/oneFilm";
import FilmsInfo from "./FilmInfo/FilmInfo";
import FilmVideo from "./FilmVideo/FilmVideo";
import { selectFilm} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"


const Film = () => {
    window.scroll(0, 0)

    const dispatch = useAppDispatch()
    const params = useParams();
    const {product} = useSelector(selectFilm);

    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[params.id]);
    

    return (
        <section className="film">
            <div className="container">
                <div className="film__row">
                    {
                        product !== null && <>
                            <FilmVideo trailer={product.trailer}/>
                            <FilmsInfo product={product}/>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Film;