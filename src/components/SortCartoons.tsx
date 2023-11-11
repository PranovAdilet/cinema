import React from 'react';
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import {changeCartoonsYear, sortCountriesCartoons} from "../redux/store/reducers/cartoons";
import {useSelector} from "react-redux";
import {selectFilms} from "../redux/reduxSelectors/reduxSelectors";

interface props {
    active: string
    setActive: (value: string) => void
    value: string
}



const SortCartoons = ({setActive, active, value}: props) => {

    const {filter} = useSelector(selectFilms)

    const dispatch = useAppDispatch()

    const handleClick = () => {
        if (!isNaN(+value)) {
            dispatch(changeCartoonsYear(value))
        } else if (value === 'Новые') {
            dispatch(changeCartoonsYear('2023&year=2022'))
        } else {
            dispatch(sortCountriesCartoons(value))
        }
        setActive(value)
    }

    return (
        <p onClick={handleClick}
           className={`${active === value ? "films__item_active" : "" } films__item`}>{value}
        </p>
    );
};

export default SortCartoons;