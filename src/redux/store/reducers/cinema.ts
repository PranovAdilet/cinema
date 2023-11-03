import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'

interface CinemaAsync {
    data: IFilm[],
    dataLength: number,
    filter: {
        genre : string,
        year: string,
        search: string
        sort: string
    },
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: CinemaAsync = {
    data: [],
    dataLength: 0,
    filter: {
        genre : '',
        year: '',
        search: '',
        sort: 'viewCount'
    },
    status: 'empty',
    error: ''
}

export const getCinema = createAsyncThunk(
    'cinema/getCinema',
    async (filter: IFilter) => {
        try {
            const res = await axios(`/films?${filter.genre !== '' ? `genre=${filter.genre}&` : ''}${filter.year !== '' ? `year=${filter.year}&` : ''}${filter.search !== '' ? `title_like=${filter.search}&` : ''}${filter.sort ? `_sort=${filter.sort}&_order=desc&` : ""} `)
            if (res.statusText !== 'OK') {
                throw new Error('Server error !')
            }
            return res.data
        } catch (err) {
            if (err instanceof Error){
                console.log(err.message)
            }else {
                console.log('Unexpected error', err)
            }
        }
    }
)

const cinemaSlice = createSlice({
    name: 'cinema',
    initialState,
    reducers: {
        // getCinema: (state, action) => {
        //     state.data = action.payload
        //     state.dataLength = action.payload.length
        // }
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
                state.dataLength = action.payload.length
            })
    }
})

export const {changeGenre, changeYear, changeSearch, sortFilms} = cinemaSlice.actions
export default cinemaSlice.reducer