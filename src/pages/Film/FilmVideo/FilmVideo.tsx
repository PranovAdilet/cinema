import ReactPlayer from 'react-player';
import {IFilm} from "../../../interface/app.interface";
import {useState} from "react";

const FilmsRight = ({product} : {product: IFilm}) => {
    const [playerReady, setPlayerReady] = useState(false)

    const handlePLayerReady = () => {
        setPlayerReady(true)
    }

    return (
        <div className="film__right">

            {
                playerReady && <ReactPlayer
                    url={`${product.trailer}`}
                    controls={true}
                    width="100%"
                    height="400px"
                    onReady={handlePLayerReady}
                />
            }

        </div>
    );
};

export default FilmsRight;