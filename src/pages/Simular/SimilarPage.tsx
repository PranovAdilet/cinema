import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {selectData, selectFilm} from "../../redux/reduxSelectors/reduxSelectors";
import {Link, useParams} from "react-router-dom";
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {getAllData} from "../../redux/store/reducers/allFilms";
import {getOneFilm} from "../../redux/store/reducers/oneFilm";
import Card from "../../components/Card";
import SkeletonCard from "../../components/SkeletonCard/SkeletonCard";

const SimilarPage = () => {
    window.scroll(0,0)

    const params = useParams().id
    const dispatch = useAppDispatch()

    const {product} = useSelector(selectFilm)
    const {data, status, error} = useSelector(selectData)

    useEffect(() => {
        dispatch(getAllData())
        dispatch(getOneFilm(params))
    }, [params])

    const similarData = product && data.filter((item) =>  item.id !== product.id &&
        item.genre === product.genre &&
            product.type === item.type)

    const typeFilm = () => {
       if (product !== null){
           if (product.type === "series"){
               return "Сериалы"
           } else if (product.type === "films"){
               return "Фильмы"
           } else if (product.type === "cartoons"){
               return "Мультфильмы"
           }
       }
    }
    console.log(data)


    return (
        <div className="favorites">
            {
                product !== null &&  <div className="container">
                    <div className="favorites__top">
                        <Link to={"/"} className="favorites__profile">Главная</Link>
                        <p className="favorites__text">-</p>
                        <Link to={`/${product.type}`} className="favorites__profile">{typeFilm()}</Link>
                        <p className="favorites__text">-</p>
                        <p className="favorites__text">{product.title}»</p>
                    </div>
                    <h2 className="favorites__title">Похожее на «{product.title}»</h2>
                    <div className={status === 'loading' ? "" : "films__row"}>
                        {
                            status === 'loading' ?
                                <SkeletonCard cards={12}/>
                                : status === 'done' ?
                                    <>
                                        {similarData && similarData.map((item) => (
                                            <Card key={item.id} item={item}/>
                                        ))
                                        }
                                    </> : <h2>{error}</h2>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default SimilarPage;