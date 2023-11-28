import React from 'react';
import {changeYear, sortCountries} from "../redux/store/reducers/cinema";
import {useAppDispatch} from "../redux/hooks/reduxHooks";
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";

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
        <div className={`  films__active-block`}>
            <p className={`${active === value ? "films__item_active" : "films__item"}`} onClick={handleClick}>{value}</p>
            {
                active !== value ? <GoPlus className="films__active-icon"/> : <IoMdClose className="films__active-icon"/>
            }

        </div>
    );
};

export default FilmsActiveItem;