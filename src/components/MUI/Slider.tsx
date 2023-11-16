import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/navigation"
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {useSelector} from "react-redux";
import { selectSeries} from "../../redux/reduxSelectors/reduxSelectors";
import {useEffect} from "react";
import {getSeries} from "../../redux/store/reducers/series";
import {Link} from "react-router-dom";
import grimm from "../../../public/assets/grimm.webp"



const Slider = () => {

    const dispatch = useAppDispatch()
    const {filter, data} = useSelector(selectSeries)


    const userValue = localStorage.getItem('user');
    const newStatus = userValue !== null ? 'gold' : 'free';

    useEffect(() => {
        dispatch(getSeries({
            ...filter,
            status:newStatus
        }))
    }, [filter])

    return (
        <section className="slider">

            <Swiper
                loop={true}
                slidesPerView={2.001}
                centeredSlidesBounds={true}
                centeredSlides={true}
                spaceBetween={30}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    stopOnLastSlide: false,
                    pauseOnMouseEnter: true
                }}
                speed={500}
                modules={[Navigation, Autoplay]}
                className="sliderSwiper"
            >
                {
                    data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <Link to={`/series/${item.id}`}>
                                    <div className="slider__block">
                                        <img  src={item.poster} alt="" className="slider__block-img"/>
                                        <h3 className="slider__title">{item.title}</h3>
                                        <div className="slider__descr">
                                            <p className="slider__rating">{item.rating}</p>
                                            <p >{item.year}</p>
                                         <p >{item.genre}</p>
                                    </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                    ))
                }

            </Swiper>

        </section>
    );
};

export default Slider;