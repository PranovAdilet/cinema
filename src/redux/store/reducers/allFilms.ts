import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IFilm, IFilter} from "../../../interface/app.interface";
import axios from "../../../utils/axios";
import {getCinema} from "./cinema";



interface allDataAsync {
    data: IFilm[],
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
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

const initialState: allDataAsync = {
    data: [],
    status: 'empty',
    error: ''
}


const allDataSlice = createSlice({
    name: 'allData',
    initialState,
    reducers: {},
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
    }
})

export default allDataSlice.reducer