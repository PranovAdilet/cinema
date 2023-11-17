import React from 'react';
import {useAppDispatch} from "../../redux/hooks/reduxHooks";
import {changeCartoonsYear, sortCountriesCartoons} from "../../redux/store/reducers/cartoons";
import {IFilter} from "../../interface/app.interface";

interface props {
    active: string
    setActive: (value: string) => void
    value: string
    filter: IFilter
}



const SortCartoons = ({setActive, active, value, filter}: props) => {


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