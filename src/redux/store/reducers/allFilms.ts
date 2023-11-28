import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFilm} from "../../../interface/app.interface";
import axios from "../../../utils/axios";




interface allDataAsync {
    data: IFilm[],
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string,
    film : IFilm | null
    sorting: string
}

export const getAllData = createAsyncThunk(
    'cinema/getAllData',
    async () => {
        try {
            const res = await axios(`/films`)
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

export const patchRatingFilm = createAsyncThunk(
    "cinema",
    async (item: IFilm) => {
        try {
            const res = await axios.patch(`/films/${item.id}`, item)
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

const initialState: allDataAsync = {
    data: [],
    status: 'empty',
    error: '',
    film: null,
    sorting: ""
}


const allDataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {
        sortingFilms: (state, action) => {
            state.sorting = action.payload
        }
    },
    extraReducers : (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getAllData.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getAllData.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.data = action.payload
            })
        builder
            .addCase(patchRatingFilm.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(patchRatingFilm.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(patchRatingFilm.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.film = action.payload
            })
    }
})
export const {sortingFilms} = allDataSlice.actions
export default allDataSlice.reducer