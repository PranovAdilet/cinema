import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper"
import {AiOutlineDisconnect} from 'react-icons/ai'
import "swiper/css";
import {Link} from "react-router-dom"
import {IFilm} from "../../interface/app.interface";
import AddFavorite from "../AddFavorite";
import Similar from "../Similar";
import {useState} from "react";
import RatingContent from "../RatingContent";
import RatingFilm from "../RatingFilm";


interface IProps{
    data: IFilm[]
}

const FilmList = ({data} : IProps) => {

    const [ratingState, setRatingState] = useState(false)
    const time = (item: IFilm) => {
        return <>
            {!isNaN(item.time) ? (
                <p className="film-list__card-time">{Math.floor(item.time / 60)} ч {item.time % 60} мин</p>
            ) : (
                <p className="film-list__card-time">{item.time}</p>
            )}
        </>
    }

    const titleFunction = () => {
        if (data[0] && data[0].type === "series"){
            return "Лучшие сериалы"
        }else if (data[0] && data[0].type === "films"){
            return "Новые фильмы"
        } else {
            return "Лучшие мультфильмы"
        }


    }

    return (
        <section className="film-list">
            <div className="film-list__container">
                <h2 className="film-list__title">{
                    titleFunction()
                }</h2>
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
                                                    <Similar item={item}/>
                                                    <RatingFilm setRatingState={setRatingState}/>
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
            {
                ratingState && <RatingContent setRatingState={setRatingState}/>
            }
        </section>
    );
};

export default FilmList