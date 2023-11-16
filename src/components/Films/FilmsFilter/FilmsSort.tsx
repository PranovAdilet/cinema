import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {sortFilms} from "../../../redux/store/reducers/cinema";
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"
import {IFilterState} from "../../../interface/app.interface";


interface props{
    setFilter: (obj: IFilterState) => void
    filter: IFilterState
}

const FilmsSort = ({filter, setFilter}: props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sortFilms(filter.state))
    }, [filter.state])


    return (
        <Box className="films__filter-box" sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Сортировать по</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.state}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setFilter({
                            ...filter,
                            state: e.target.value
                        })}
                >
                    <MenuItem className="films__filter-item" value="viewCount">По популярности</MenuItem>
                    <MenuItem className="films__filter-item" value="year">Дате</MenuItem>
                    <MenuItem className="films__filter-item" value="rating">Рейтингу</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsSort;