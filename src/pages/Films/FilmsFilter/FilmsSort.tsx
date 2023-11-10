import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {sortFilms} from "../../../redux/store/reducers/cinema";
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"
import {useSelector} from "react-redux";
import {selectFilms} from "../../../redux/reduxSelectors/reduxSelectors";

interface props{
    filmsState: string
    setFilmsState: (value: string) => void
}

const GenreSort = ({filmsState, setFilmsState}: props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sortFilms(filmsState))
    }, [filmsState])


    return (
        <Box className="films__filter-box" sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Сортировать по</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filmsState}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setFilmsState(e.target.value)}
                >
                    <MenuItem className="films__filter-item" value="viewCount">По популярности</MenuItem>
                    <MenuItem className="films__filter-item" value="year">Дате</MenuItem>
                    <MenuItem className="films__filter-item" value="rating">Рейтингу</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default GenreSort;