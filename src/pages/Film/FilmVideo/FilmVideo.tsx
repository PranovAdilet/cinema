import ReactPlayer from 'react-player';


const FilmsRight = ({trailer} : {trailer: string}) => {

    return (
        <div className="film__right">

                <ReactPlayer
                    url={`${trailer}`}
                    controls={true}
                    width="100%"
                    height="400px"

                />

        </div>
    );
};

export default FilmsRight;