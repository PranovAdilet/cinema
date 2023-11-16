import Slider from "../../components/MUI/Slider";
import CartoonsList from "../../components/MUI/CartoonsList";
import FilmList from "../../components/MUI/FilmsList";
import SeriesList from "../../components/MUI/SeriesList";

const Home = () => {
    return (

        <div>
            <Slider/>
            <FilmList/>
            <SeriesList/>
            <CartoonsList/>
        </div>
    );
};

export default Home;