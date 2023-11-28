import {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppDispatch} from "../../redux/hooks/reduxHooks"
import {IFilterState} from "../../interface/app.interface";
import {sortSeriesCountries} from "../../redux/store/reducers/series";

interface props{
    setFilter: (obj: IFilterState) => void
    filter: IFilterState
}

const SeriesCountrySort = ({filter, setFilter} : props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sortSeriesCountries(filter.country))
    }, [filter.country])


    return (
        <Box className="films__filter-box" sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Страны</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.country}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setFilter({
                            ...filter,
                            country: e.target.value
                        })}
                >
                    <MenuItem className="films__filter-item" value="Россия">Россия</MenuItem>
                    <MenuItem className="films__filter-item" value="Германия">Германия</MenuItem>
                    <MenuItem className="films__filter-item" value="Франция">Франция</MenuItem>
                    <MenuItem className="films__filter-item" value="Польша">Польша</MenuItem>
                    <MenuItem className="films__filter-item" value="Корея">Корея</MenuItem>
                    <MenuItem className="films__filter-item" value="Китай">Китай</MenuItem>
                    <MenuItem className="films__filter-item" value="США">США</MenuItem>
                    <MenuItem className="films__filter-item" value="Австралия">Австралия</MenuItem>
                    <MenuItem className="films__filter-item" value="Япония">Япония</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SeriesCountrySort;