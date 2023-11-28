import React from 'react';
import { HiOutlineTrophy } from "react-icons/hi2";
import { BsFire } from "react-icons/bs";
import { RiKnifeLine } from "react-icons/ri";
import { CiMap } from "react-icons/ci";
import { BsRocketTakeoff } from "react-icons/bs";
import { TbHearts } from "react-icons/tb";
import { GiTvRemote } from "react-icons/gi";
import { MdOutlineTheaterComedy, MdFamilyRestroom } from "react-icons/md";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import {sortingFilms} from "../redux/store/reducers/allFilms";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";


const Sorting = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const sortArr = [
        {title: "Лучшие", icon: <HiOutlineTrophy className="sorting__item-icon"/>, link: "/films", sortTitle: ""},
        {title: "Новые", icon: <BsFire className="sorting__item-icon"/>, link: "/films", sortTitle: ""},
        {title: "Ужасы", icon: <RiKnifeLine className="sorting__item-icon"/>, link: "/series", sortTitle: ""},
        {title: "Приключения", icon: <CiMap className="sorting__item-icon"/>, link: "/films", sortTitle: "Приключения"},
        {title: "Фантастика", icon: <BsRocketTakeoff className="sorting__item-icon"/>, link: "/films", sortTitle: "Фантастика"},
        {title: "Драмы", icon: <TbHearts className="sorting__item-icon"/>, link: "/films", sortTitle: "драма"},
        {title: "Аниме", icon: <GiTvRemote className="sorting__item-icon"/>, link: "cartoons", sortTitle: ""},
        {title: "Комедия", icon: <MdOutlineTheaterComedy className="sorting__item-icon"/>, link: "/films", sortTitle: "Комедия"},
        {title: "Семейное", icon: <MdFamilyRestroom className="sorting__item-icon"/>, link: "/films", sortTitle: ""}
    ]


    return (
        <div className="sorting">


                <Swiper
                    slidesPerView={6.5}
                    spaceBetween={15}
                    speed={500}
                    className="sliderSwiper"
                >
                    {
                        sortArr.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div onClick={() => {
                                    dispatch(sortingFilms(item.sortTitle))
                                    navigate(item.link)
                                }} className="sorting__item">
                                    {item.icon}
                                    <p className="sorting__item-title">{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
        </div>
    );
};

export default Sorting;