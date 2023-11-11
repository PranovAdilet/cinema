import {createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "../../../utils/axios";
import {IFilm} from '../../../interface/app.interface'

interface CartoonAsync {
    product : IFilm | null,
    status: "loading"| "error" | "done" | "empty" | null,
    error: null | string
}

const initialState: CartoonAsync = {
    product : null,
    error : '',
    status : 'empty'
}



export const getOneCartoon = createAsyncThunk(
    "oneCartoon/getOneCartoon",
    async (id: string | undefined) => {
        try {
            const res = await axios(`/cartoons/${id}`)
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
const oneCartoon = createSlice({
    name: "oneCartoon",
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder
            .addCase(getOneCartoon.pending, (state) => {
                state.status = 'loading'
                state.error = ''
            })
        builder
            .addCase(getOneCartoon.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.payload as string
            })
        builder
            .addCase(getOneCartoon.fulfilled, (state, action) => {
                state.status = 'done'
                state.error = ''
                state.product = action.payload
            })
    }
})

export default  oneCartoon.reducer