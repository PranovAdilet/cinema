import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import CartoonInfo from "./CartoonInfo/CartoonInfo";
import CartoonVideo from "./CartoonVideo/CartoonVideo";
import {selectFilm} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {getOneFilm} from "../../redux/store/reducers/oneFilm";


const Cartoon = () => {
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
                            <CartoonVideo product={product}/>
                            <CartoonInfo product={product}/>
                        </>
                    }
                </div>
            </div>
        </section>
    );
};

export default Cartoon;