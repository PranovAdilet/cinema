import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'
import queryString from 'query-string';

interface CinemaAsync {
    data: IFilm[],
    filter: {
        genre : string,
        year: string,
        search: string
        sort: string
        rating: string
        country: string
        type: string
    },
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: CinemaAsync = {
    data: [],
    filter: {
        genre : '',
        year: '',
        search: '',
        sort: '',
        rating: "",
        country: "",
        type: "films"
    },
    status: 'empty',
    error: ''
}

export const getCinema = createAsyncThunk(
    'cinema/getCinema',
    async (filter: IFilter) => {
        try {
            const queryParams = queryString.stringify({
                type: 'films',
                genre: filter.genre || undefined,
                year: filter.year || undefined,
                title_like: filter.search || undefined,
                sort: filter.sort || undefined,
                rating_gte: filter.rating || undefined,
                country: filter.country || undefined,
            });

            const res = await axios(`/films?${queryParams}`);

            if (res.status === 200) {
                return res.data;
            } else {
                throw new Error('Server error!');
            }
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                console.log('Unexpected error', err);
            }
        }
    }
);

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        // getCinema: (state, action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
        sortCountries : (state, action) => {
            state.filter.country = action.payload
        },
        changeGenre: (state,action) => {
            state.filter.genre = action.payload
        },
        changeYear: (state, action) => {
            state.filter.year = action.payload
        },
        changeSearch: (state, action) =>  {
            state.filter.search = action.payload
        },
        sortFilms: (state, action) =>  {
            state.filter.sort = action.payload
        },
        sortRating: (state, action) => {
            state.filter.rating = action.payload
        },
        clearFilters: (state, action) => {
            state.filter.genre = ""
            state.filter.year = ""
            state.filter.sort = "viewCount"
            state.filter.rating = ""
            state.filter.country = ""
        }


    },
    extraReducers : (builder) => {
        builder
            .addCase(getCinema.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getCinema.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getCinema.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.data = action.payload
            })
    }
})

export const {changeGenre, changeYear, changeSearch, sortFilms, sortRating, clearFilters, sortCountries} = cinemaSlice.actions
export default cinemaSlice.reducer