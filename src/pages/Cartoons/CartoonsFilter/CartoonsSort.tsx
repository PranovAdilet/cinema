import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"
import {sortCartoons} from "../../../redux/store/reducers/cartoons";
import {IFilterState} from "../../../interface/app.interface";


interface props{
    filmsState: string
    setFilter: (obj: IFilterState) => void
    filter: IFilterState
}

const CartoonsSort = ({filmsState, setFilter, filter}: props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sortCartoons(filmsState))
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
                        onChange={(e:SelectChangeEvent<string> ) => setFilter({
                            ...filter,
                            cartoonState: e.target.value
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

export default CartoonsSort;