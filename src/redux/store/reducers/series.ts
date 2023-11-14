import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm, IFilter} from '../../../interface/app.interface'


interface SeriesAsync {
    data : IFilm[] | []
    filter: {
        genre: string
        year: string
        search:string
        sort: string
        rating: string
        country: string
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
        country: ""
    },
    status: 'empty',
    error: null
}

export const getSeries = createAsyncThunk(
    'series/getSeries',
    async (filter: IFilter) => {
        try {
            const res = await axios(`/series?${filter.genre !== '' ? `genre=${filter.genre}&` : ''
            }${filter.year !== '' ? `year=${filter.year}&` : ''
            }${filter.search !== '' ? `title_like=${filter.search
            }&` : ''}${filter.sort !== "" ? `_sort=${filter.sort
            }&_order=desc&` : ""}${filter.rating !== "" ? `rating_gte=${filter.rating}&` : ""
            }${filter.country !== "" ? `country=${filter.country}` : "" } `)
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