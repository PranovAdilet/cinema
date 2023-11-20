import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'
import queryString from "query-string";


interface SeriesAsync {
    data : IFilm[] | []
    filter: {
        genre: string
        year: string
        search:string
        sort: string
        rating: string
        country: string
        type: string
    }
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: SeriesAsync = {
    data: [],
    filter: {
        genre : '',
        year: '',
        search: '',
        sort: 'viewCount',
        rating: "",
        country: "",
        type: "series"
    },
    status: 'empty',
    error: null
}

export const getSeries = createAsyncThunk(
    'series/getSeries',
    async (filter: IFilter) => {
        try {
            const queryParams = queryString.stringify({
                type: 'series',
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
)

const seriesSlice = createSlice({
    name: 'series',
    initialState,
    reducers: {
        // getCinema: (state, action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
        changeSeriesSearch: (state, action) =>  {
            state.filter.search = action.payload
        },
        changeSeriesGenre: (state,action) => {
            state.filter.genre = action.payload
        },
        changeSeriesYear: (state, action) => {
            state.filter.year = action.payload
        },
        sortSeries: (state, action) =>  {
            state.filter.sort = action.payload
        },
        sortSeriesRating: (state, action) => {
            state.filter.rating = action.payload
        },
        clearSeriesFilters: (state, action) => {
            state.filter.genre = ""
            state.filter.year = ""
            state.filter.sort = ""
            state.filter.rating = ""
            state.filter.country = ""
        },
        sortSeriesCountries : (state, action) => {
            state.filter.country = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(getSeries.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getSeries.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getSeries.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.data = action.payload
            })
    }
})

export const {changeSeriesSearch, changeSeriesGenre, changeSeriesYear, clearSeriesFilters, sortSeriesRating, sortSeriesCountries, sortSeries} = seriesSlice.actions
export default seriesSlice.reducer