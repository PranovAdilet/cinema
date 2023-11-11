import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import {getOneSeries} from "../../redux/store/reducers/oneSeries";
import OneSeriesInfo from "./OneSeriesInfo/OneSeriesInfo";
import OneSeriesVideo from "./OneSeriesVideo/OneSeriesVideo";
import {selectOneSeries} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"


const OneSeries = () => {

    window.scroll(0, 0)

    const dispatch = useAppDispatch()
    const params = useParams();

    const {product} = useSelector(selectOneSeries);

    useEffect(() => {
        dispatch(getOneSeries(params.id))
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