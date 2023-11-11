import {useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";
import CartoonInfo from "./CartoonInfo/CartoonInfo";
import CartoonVideo from "./CartoonVideo/CartoonVideo";
import {selectOneCartoon} from "../../redux/reduxSelectors/reduxSelectors"
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {getOneCartoon} from "../../redux/store/reducers/oneCartoon";


const Cartoon = () => {
    window.scroll(0, 0)

    const dispatch = useAppDispatch()
    const params = useParams();
    const {product} = useSelector(selectOneCartoon);

    useEffect(() => {
        dispatch(getOneCartoon(params.id))
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