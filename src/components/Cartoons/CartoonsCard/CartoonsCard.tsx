import {Link} from 'react-router-dom'
import {BsBookmark, BsBookmarkFill} from "react-icons/bs";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineDisconnect, AiOutlineStar} from "react-icons/ai";
import {IFilm} from "../../../interface/app.interface"
import {addFavorite, removeFavorite} from "../../../redux/store/reducers/favorites";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../../redux/reduxSelectors/reduxSelectors";
import {useAppDispatch} from "../../../redux/hooks/reduxHooks";
import AddFavorite from "../../AddFavorite";

const CartoonsCard = ({item}: {item: IFilm}) => {
    const dispatch = useAppDispatch()
    const {favoritesData} = useSelector(selectFavorites)
    const addFavoriteHandler = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.preventDefault()
        favoritesData.findIndex((el) => el.id === item.id) > -1 ?
            dispatch(removeFavorite(item.id)) : dispatch(addFavorite(item))

    }

    return (
        <div key={item.id} className="film-list__card films__card">
            <Link to={`/cartoons/${item.id}`}>
                <div className="film-list__card-block">
                    <img src={item.poster} alt=""/>
                    <div className="film-list__card-info">
                        <h3 className="film-list__card-rate">
                            {item.rating}
                        </h3>
                        <p className="film-list__card-desc">
                            {item.year}, {item.country}, {item.genre}
                        </p>
                            {!isNaN(item.time) ? (
                                <p className="film-list__card-time">{Math.floor(item.time / 60)} ч {item.time % 60} мин</p>
                            ) : (
                                <p className="film-list__card-time">{item.time}</p>
                            )}

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
            </Link>

            <h3 className="film-list__card-title">
                <Link to={`/film/${item.id}`}>
                    {item.title}
                </Link>

            </h3>
        </div>
    );
};

export default CartoonsCard;