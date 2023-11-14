import {useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"
import {sortCartoonsRating} from "../../../redux/store/reducers/cartoons";
import {IFilterState} from "../../../interface/app.interface";

interface props{
    setFilter: (obj: IFilterState) => void
    filter: IFilterState
}


const CartoonsRatingSort = ({ setFilter, filter} : props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(sortCartoonsRating(filter.rating))
    }, [filter.rating])


    return (
        <Box className="films__filter-box" sx={{minWidth: 200}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Рейтинг I-R</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={filter.rating}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setFilter({
                            ...filter,
                            rating: e.target.value
                        })}
                >
                    <MenuItem className="films__filter-item" value="">Любой рейтинг</MenuItem>
                    <MenuItem className="films__filter-item" value="9">Больше 9</MenuItem>
                    <MenuItem className="films__filter-item" value="8">Больше 8</MenuItem>
                    <MenuItem className="films__filter-item" value="7">Больше 7</MenuItem>
                    <MenuItem className="films__filter-item" value="6">Больше 6</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default CartoonsRatingSort;