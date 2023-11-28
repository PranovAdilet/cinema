import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useAppDispatch } from '../redux/hooks/reduxHooks';
import {useEffect, useState} from 'react';
import { getCinema } from '../redux/store/reducers/cinema';
import { useSelector } from 'react-redux';
import { selectFilms } from '../redux/reduxSelectors/reduxSelectors';
import { useNavigate } from 'react-router-dom';
import {AutocompleteChangeDetails} from "@mui/material";


interface IProps {
    setSearchState : (value: boolean) => void
}
const Search = ({setSearchState}: IProps) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { filter, data } = useSelector(selectFilms);

    useEffect(() => {
        dispatch(getCinema(filter));
    }, []);


    const handlerAutocompleteChange = (
        event: React.SyntheticEvent<Element, Event>,
        value: string,
        reason: string,
        details?: AutocompleteChangeDetails<string> | undefined
    ) => {
        const searchFilms = data.find((item) => item.title === value)
        if (searchFilms){
            setSearchState(false)
            navigate(`/film/${searchFilms.id}`)
        }
    };
    console.log(data)
    return (
        <Stack spacing={2} sx={{ width: 1300 }}>
            <Autocomplete
                className="header__search"
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                onChange={handlerAutocompleteChange}
                options={data.map((option) => {
                    return option.title
                })}
                renderInput={(params) => (
                    <TextField
                        className="header__search-field"
                        {...params}
                        label="Фильмы"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            style: {
                                color: '#a5a1b2',
                                fontSize: '17px',
                                fontWeight: 400,
                                background: 'white',
                                borderRadius: '7px',
                                padding: '15px 25px',
                            },
                        }}

                        InputLabelProps={{
                            style: {
                                color: '#a5a1b2',
                                textAlign: 'center',
                                lineHeight: '2.5',
                                fontSize: '17px'
                            },
                        }}
                    />
                )}
                renderOption={(props, option) => (
                    <li {...props} style={{ color: 'black', padding: '10px' }}>
                        {option}
                    </li>
                )}
            />
        </Stack>
    );
};

export default Search;
