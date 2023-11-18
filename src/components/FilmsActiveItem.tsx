import React from 'react';
import {changeYear, sortCountries} from "../redux/store/reducers/cinema";
import {useAppDispatch} from "../redux/hooks/reduxHooks";

interface props {
    active: string
    setActive: (value: string) => void
    value: string
}



const FilmsActiveItem = ({setActive, active, value}: props) => {

    const handleClick = () => {
        if (!isNaN(+value)) {
            dispatch(changeYear(value));
        } else if (value === 'Новые') {
            dispatch(changeYear('2023&year=2022'));
        } else {
            dispatch(sortCountries(value));
        }
        setActive(value);
    };

    const dispatch = useAppDispatch()
    return (
        <p onClick={handleClick}
           className={`${active === value ? "films__item_active" : ""} films__item`}>{value}
        </p>
    );
};

export default FilmsActiveItem;