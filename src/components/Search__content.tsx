import React from 'react';
import Search from "./Search";
import {AiOutlineClose} from "react-icons/ai";


interface IProps {
    setSearchState : (value: boolean) => void
}
const SearchContent = ({setSearchState} : IProps) => {

    return (
        <div className="search">
            <div className="container">
                <div className="search__content">
                    <h2 className="search__title">Поиск</h2>
                    <Search setSearchState={setSearchState}/>
                </div>
            </div>
            <AiOutlineClose onClick={() => setSearchState(false)} className="rating__icon"/>

        </div>
    );
};

export default SearchContent;