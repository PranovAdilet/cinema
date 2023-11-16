import {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"
import {changeCartoonsGenre} from "../../../redux/store/reducers/cartoons";
import {IFilterState} from "../../../interface/app.interface";

interface props{
    setFilter: (obj: IFilterState) => void
    filter: IFilterState
}


const CartoonsGenreSort = ({ setFilter, filter} : props) => {

    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(changeCartoonsGenre(filter.genreState))
    }, [filter.genreState])


    return (
        <Box className="films__filter-box" sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Жанр</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.genreState}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setFilter({
                            ...filter,
                            genreState: e.target.value
                        })}
                >
                    <MenuItem className="films__filter-item" value="">По умолчанию</MenuItem>
                    <MenuItem className="films__filter-item" value="Приключения">Приключения</MenuItem>
                    <MenuItem className="films__filter-item" value="Комедия">Комедия</MenuItem>
                    <MenuItem className="films__filter-item" value="Триллер">Триллер</MenuItem>
                    <MenuItem className="films__filter-item" value="Фантастика">Фантастика</MenuItem>
                    <MenuItem className="films__filter-item" value="Боевик">Боевик</MenuItem>
                    <MenuItem className="films__filter-item" value="драма">Драма</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CartoonsGenreSort;