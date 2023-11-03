import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginField} from "../../../interface/app.interface"
import axios from "../../../utils/axios";

interface IUser{
    email: string
    login: string
}

interface UserSlice {
    user: IUser,
    status: "loading" | "empty" | "done" | "error"
    error:string
}

const initialState: UserSlice = {
    user: {
        email: '',
        login: ''
    },
    status: "empty",
    error:""
}
export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (data:ILoginField,{rejectWithValue} ) => {
        try {
            const res = await axios.post("/login",data)

            if(res.status !== 200 ){
                throw new Error('Ошибка при входе')
            }
            return res.data.user
        }
        catch (err) {
            if (err instanceof Error){
                console.log(err.message)
                return rejectWithValue(err.message)
            }else {
                console.log('Unexpected error', err)
                return rejectWithValue("Unexpected error")
            }
        }
    }
)


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginAccount : (state,action) => {
             state.user = {
                email: action.payload.email,
                login: action.payload.login
            }
        },
        logOutAccount : (state) => {
            state.user = {
                email: '',
                login: ''
            }
        }
    },
    extraReducers:(builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(loginUser.rejected,(state, action) => {
                state.status = "error"
                state.error = action.payload as string
            })
            .addCase(loginUser.fulfilled,(state, action) => {
                state.user = action.payload
                state.status = "done"
            })

    }
})

export const {loginAccount, logOutAccount} = userSlice.actions
export default userSlice.reducer