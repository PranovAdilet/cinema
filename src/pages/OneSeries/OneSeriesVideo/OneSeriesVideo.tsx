import ReactPlayer from 'react-player';
import {IFilm} from "../../../../interface/app.interface";

const FilmsRight = ({product} : {product: IFilm}) => {

    return (
        <div className="film__right">

            <ReactPlayer
                url={`${product.trailer}`}
                controls={true}
                width="100%"
                height="400px"
            />

        </div>
    );
};

export default FilmsRight;