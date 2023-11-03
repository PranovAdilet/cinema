import {AiOutlineStar} from 'react-icons/ai'
import {IFilm} from '../../../interface/app.interface'



const FilmsInfo = ({ product }: {product: IFilm}) => {
    return (
        <div className="film__info">
            <h2 className="film__info-title">
                {product.title}
            </h2>
            <div className="film__info-date">
                <p className="film__info-year">
                    {product.year}
                </p>
                <p>
                    {Math.floor(product.time / 60)} ч {product.time % 60} мин
                </p>
            </div>
            <p className="film__info-genre">
                Жанр: {product.genre}
            </p>
            <div className="film__info-up">
                <div className="film__info-rate">
                    <p>{product.rating}</p>
                    Рейтинг
                </div>
                <div className="film__info-rate film__info-like">
                    <p><AiOutlineStar/></p>
                    Нравится
                </div>
            </div>
            <p className="film__info-desc">
                {product.description}
            </p>
        </div>
    );
};

export default FilmsInfo;