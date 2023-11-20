import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import OneSeriesInfo from "./OneSeriesInfo/OneSeriesInfo";
import OneSeriesVideo from "./OneSeriesVideo/OneSeriesVideo";
import {selectFilm} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {getOneFilm} from "../../redux/store/reducers/oneFilm";


const OneSeries = () => {

    window.scroll(0, 0)

    const dispatch = useAppDispatch()
    const params = useParams();

    const {product} = useSelector(selectFilm);

    useEffect(() => {
        dispatch(getOneFilm(params.id))
    },[]);



    return (
        <section className="film">
            <div className="container">
                <div className="film__row">
                    {
                        product !== null && <>
                            <OneSeriesVideo product={product}/>
                            <OneSeriesInfo product={product}/>
                        </>
                    }

                </div>
            </div>
        </section>
    );
};

export default OneSeries;