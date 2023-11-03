import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {changeGenre} from "../../../redux/store/reducers/cinema";
import {useAppDispatch} from "../../../redux/hooks/reduxHooks"

const FilmsSort = () => {

    const dispatch = useAppDispatch();

    const [genreState, setGenreState] = useState('')
    useEffect(() => {
        dispatch(changeGenre(genreState))
    }, [genreState])


    return (
        <Box className="films__filter-box" sx={{minWidth: 250}}>
            <FormControl fullWidth>
                <InputLabel style={{color: 'white'}} id="demo-simple-select-label">Жанр</InputLabel>
                <Select style={{color: 'white'}}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={genreState}
                        label="fasf"
                        onChange={(e:SelectChangeEvent<string> ) => setGenreState(e.target.value)}
                >
                    <MenuItem className="films__filter-item" value="">По умолчанию</MenuItem>
                    <MenuItem className="films__filter-item" value="Приключения">Приключения</MenuItem>
                    <MenuItem className="films__filter-item" value="Комедия">Комедия</MenuItem>
                    <MenuItem className="films__filter-item" value="Криминал">Криминал</MenuItem>
                    <MenuItem className="films__filter-item" value="Фантастика">Фантастика</MenuItem>
                    <MenuItem className="films__filter-item" value="Боевик">Боевик</MenuItem>
                    <MenuItem className="films__filter-item" value="драма">Драма</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default FilmsSort;