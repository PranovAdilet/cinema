import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm} from '../../../interface/app.interface'

interface SeriesAsync {
    product : IFilm | null,
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: SeriesAsync = {
    product : null,
    error : '',
    status : 'empty'
}



export const getOneSeries = createAsyncThunk(
    "oneSeries/getOneSeries",
    async (id: string | undefined) => {
        try {
            const res = await axios(`/films/${id}`)
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
const oneSeries = createSlice({
    name: "oneSeries",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getOneSeries.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getOneSeries.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getOneSeries.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.product = action.payload
            })
    }
})

export default  oneSeries.reducer