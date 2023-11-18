import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper"
import {AiOutlineStar,AiOutlineDisconnect} from 'react-icons/ai'
import {BsBookmark, BsBookmarkFill} from 'react-icons/bs'
import {ImMagicWand} from 'react-icons/im'
import "swiper/css";
import {Link} from "react-router-dom"
import {useEffect} from "react";
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {useSelector} from "react-redux";
import {selectCartoons, selectFavorites, selectFilms} from "../../redux/reduxSelectors/reduxSelectors";
import {getCartoons} from "../../redux/store/reducers/cartoons";
import {IFilm} from "../../interface/app.interface";
import {getCinema, sortFilms} from "../../redux/store/reducers/cinema";
import {addFavorite, removeFavorite} from "../../redux/store/reducers/favorites";
import AddFavorite from "../AddFavorite";

const FilmList = () => {
    const dispatch = useAppDispatch()
    const {filter, data} = useSelector(selectFilms)
    const {favoritesData} = useSelector(selectFavorites)


    const userValue = localStorage.getItem('user');
    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
        dispatch(getCinema({
            ...filter,
            status:newStatus
        }))
    }, [filter])

    const addFavoriteHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, item: IFilm) => {
        e.preventDefault()
        favoritesData.findIndex((el) => el.id === item.id) > -1 ?
            dispatch(removeFavorite(item.id)) : dispatch(addFavorite(item))

    }




    const time = (item: IFilm) => {
        return <>
            {!isNaN(item.time) ? (
                <p className="film-list__card-time">{Math.floor(item.time / 60)} ч {item.time % 60} мин</p>
            ) : (
                <p className="film-list__card-time">{item.time}</p>
            )}
        </>
    }

    return (
        <section className="film-list">

            <div className="film-list__container">
                <h2 className="film-list__title">
                    Новые фильмы
                </h2>
                <Swiper
                    slidesOffsetBefore={1}
                    slidesOffsetAfter={-130}
                    centeredSlides={false}
                    slidesPerView={6.8}
                    loop={true}
                    spaceBetween={30}

                    modules={[Navigation]}
                    navigation={true}
                    className="filmList"
                >
                    {
                        data.map(item => (
                            <SwiperSlide key={item.id}>
                                <Link to={`/film/${item.id}`}>
                                    <div className="film-list__card">
                                        <div className="film-list__card-block">
                                            <img src={item.poster} alt=""/>
                                            <div className="film-list__card-info">
                                                <h3 className="film-list__card-rate">
                                                    {item.rating}
                                                </h3>
                                                <p className="film-list__card-desc">
                                                    {item.year}, {item.country}, {item.genre}
                                                </p>
                                                {time(item)}
                                                <div className="film-list__card-icons">
                                        <AddFavorite item={item}/>
                                                    <span className="film-list__card-icon">
                                            <ImMagicWand/>
                                               <span className="film-list__card-move">
                                               Похожее
                                            </span>
                                        </span>
                                                    <span className="film-list__card-icon">
                                            <AiOutlineStar/>
                                               <span className="film-list__card-move">
                                                 Oценить
                                            </span>
                                        </span>
                                                    <div className="film-list__card-icon">
                                                        <AiOutlineDisconnect/>
                                                        <p className="film-list__card-move">
                                                            Не нравится
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <h3 className="film-list__card-title">
                                            {item.title}
                                        </h3>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>
            </div>
        </section>
    );
};

export default FilmList