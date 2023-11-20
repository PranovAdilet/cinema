import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'
import queryString from "query-string";

interface CartoonsAsync {
    data: IFilm[],
    dataLength: number,
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

const initialState: CartoonsAsync = {
    data: [],
    dataLength: 0,
    filter: {
        genre : '',
        year: '',
        search: '',
        sort: 'viewCount',
        rating: "",
        country: "",
        type: "cartoons"
    },
    status: 'empty',
    error: ''
}

export const getCartoons = createAsyncThunk(
    'cartoons/getCartoons',
    async (filter: IFilter) => {
        try {
            const queryParams = queryString.stringify({
                type: 'cartoons',
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

const cartoonsSlice = createSlice({
    name: 'cartoons',
    initialState,
    reducers: {
        sortCountriesCartoons : (state, action) => {
            state.filter.country = action.payload
        },
        changeCartoonsGenre: (state,action) => {
            state.filter.genre = action.payload
        },
        changeCartoonsYear: (state, action) => {
            state.filter.year = action.payload
        },
        changeCartoonsSearch: (state, action) =>  {
            state.filter.search = action.payload
        },
        sortCartoons: (state, action) =>  {
            state.filter.sort = action.payload
        },
        sortCartoonsRating: (state, action) => {
            state.filter.rating = action.payload
        },
        clearCartoonsFilters: (state, action) => {
            state.filter.genre = ""
            state.filter.year = ""
            state.filter.sort = ""
            state.filter.rating = ""
            state.filter.country = ""
        }


    },
    extraReducers : (builder) => {
        builder
            .addCase(getCartoons.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getCartoons.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getCartoons.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.data = action.payload
                state.dataLength = action.payload.length
            })
    }
})

export const {changeCartoonsGenre, changeCartoonsYear, changeCartoonsSearch, sortCartoons, sortCartoonsRating, clearCartoonsFilters, sortCountriesCartoons} = cartoonsSlice.actions
export default cartoonsSlice.reducer