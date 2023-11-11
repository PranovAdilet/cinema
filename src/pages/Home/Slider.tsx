import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from "swiper";

import "swiper/css";
import "swiper/css/navigation"



const Slider = () => {
    return (
        <section className="slider">

            <Swiper
                loop={true}
                slidesPerView={1}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    pauseOnMouseEnter: true
                }}
                effect="slide"
                speed={2000}
                modules={[Navigation, Autoplay]}
                className="sliderSwiper"
            >
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://thumbs.dfs.ivi.ru/storage23/contents/c/c/f5d288cdcba5afbc210f27d5d39623.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://static.kinoafisha.info/upload/movie_shots/6/9/5/8329596/657a9239da7c2e79456fd5b3d98a52b1.jpeg" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="https://thumbs.dfs.ivi.ru/storage37/contents/5/e/a797cd0fc366b4398a858d889e8ac1.jpg/1216x370/?q=60" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider__block">
                        <img src="	https://thumbs.dfs.ivi.ru/storage5/contents/3/5/7a52809d0ae6fa6fafdf6d6d15223b.png/1216x370/?q=60" alt="" className="slider__block-img"/>
                    </div>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Slider;