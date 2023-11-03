import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm} from '../../../interface/app.interface'

interface CinemaAsync {
    product : IFilm | null,
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: CinemaAsync = {
    product : null,
    error : '',
    status : 'empty'
}



export const getOneFilm = createAsyncThunk(
    "onefilm/getOneFilm",
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
const onefilm = createSlice({
    name: "onefilm",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getOneFilm.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getOneFilm.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getOneFilm.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.product = action.payload
            })
    }
})

export default  onefilm.reducer