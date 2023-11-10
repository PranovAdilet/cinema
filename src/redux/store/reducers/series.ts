import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'


interface SeriesAsync {
    data : IFilm[] | []
    dataLength: number
    filter: {
        genre: string
        year: string
        search:string
        sort: string
        rating: string
    }
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: SeriesAsync = {
    data: [],
    dataLength: 0,
    filter: {
        genre : '',
        year: '',
        search: '',
        sort: 'viewCount',
        rating: ""
    },
    status: 'empty',
    error: null
}

export const getSeries = createAsyncThunk(
    'series/getSeries',
    async (filter: IFilter) => {
        try {
            const res = await axios(`/series?${filter.genre !== '' ? `genre=${filter.genre}&` : ''}${filter.year !== '' ? `year=${filter.year}&` : ''}${filter.search !== '' ? `title_like=${filter.search}&` : ''}${filter.sort ? `_sort=${filter.sort}&_order=desc&` : ""}`)
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
        sortSeriesFilms: (state, action) =>  {
            state.filter.sort = action.payload
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
                state.dataLength = action.payload.length
            })
    }
})

export const {changeSeriesSearch, changeSeriesGenre, changeSeriesYear, sortSeriesFilms} = seriesSlice.actions
export default seriesSlice.reducer