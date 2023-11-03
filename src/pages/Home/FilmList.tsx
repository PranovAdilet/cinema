import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineStar,AiOutlineDisconnect} from 'react-icons/ai'
import {BsBookmark} from 'react-icons/bs'
import {ImMagicWand} from 'react-icons/im'

import "swiper/css";
import image from '../../assets/slide.jpg'

const FilmList = () => {
    return (
        <section className="film-list">
            <div className="container">
                <h2 className="film-list__title">
                    Рекомендуем посмотреть
                </h2>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={30}
                    className="filmList"
                >
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className="film-list__card">
                            <div className="film-list__card-block">
                                <img src={image} alt=""/>
                                <div className="film-list__card-info">
                                    <h3 className="film-list__card-rate">
                                        8.2
                                    </h3>
                                    <p className="film-list__card-desc">
                                        2022, Корея, Детектив
                                    </p>
                                    <p className="film-list__card-time">
                                        120 мин
                                    </p>
                                    <div className="film-list__card-icons">
                                        <span className="film-list__card-icon">
                                            <BsBookmark/>
                                            <span className="film-list__card-move">
                                                Смотреть позже
                                            </span>
                                        </span>
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
                                Решение уйти
                            </h3>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
    );
};

export default FilmList;