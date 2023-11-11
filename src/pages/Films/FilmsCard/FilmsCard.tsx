import {Link} from 'react-router-dom'
import {BsBookmark} from "react-icons/bs";
import {ImMagicWand} from "react-icons/im";
import {AiOutlineDisconnect, AiOutlineStar} from "react-icons/ai";
import {IFilm} from "../../../interface/app.interface"

const FilmsCard = ({item}: {item: IFilm}) => {

    
    return (
        <div key={item.id} className="film-list__card films__card">
            <Link to={`/film/${item.id}`}>
                <div className="film-list__card-block">
                    <img src={item.poster} alt=""/>
                    <div className="film-list__card-info">
                        <h3 className="film-list__card-rate">
                            {item.rating}
                        </h3>
                        <p className="film-list__card-desc">
                            {item.year} {item.country} {item.genre}
                        </p>
                        <p className="film-list__card-time">
                            {Math.floor(item.time / 60)} ч {item.time % 60} мин
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
            </Link>

            <h3 className="film-list__card-title">
                <Link to={`/film/${item.id}`}>
                    {item.title}
                </Link>

            </h3>
        </div>
    );
};

export default FilmsCard;