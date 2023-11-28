import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { IShippingFields} from "../../../interface/app.interface"
import axios from "../../../utils/axios";



interface IUser{
    email: string
    login: string
    phone: string
    avatar: string
}

interface UserSlice {
    user: IUser,
    status: "loading" | "empty" | "done" | "error"
    error:string,
    users: IShippingFields[]
    activeUsers: IShippingFields[]
}

const initialState: UserSlice = {
    user: {
        phone: "",
        email: '',
        login: '',
        avatar: ""
    },
    status: "empty",
    error:"",
    users: [],
    activeUsers: []
}
export const getAllUsers = createAsyncThunk(
    "user/getAllUsers",
    async (_, {rejectWithValue}) => {
        try {
            const res = await axios("/users")
            if(res.status !== 200 ){
                throw new Error('Ошибка при загрузке данных')
            }
            return res.data
        }
        catch (err){
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



export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async (actionUser : IShippingFields, {rejectWithValue}) => {
        try {
            const res = await axios.delete(`/users/${actionUser.id}`)
            if (res.status !== 200){
                throw new Error("Ошибка при удалении")
            }
            return res.data

        }catch (err){
            if (err instanceof Error){
                return rejectWithValue(err.message)
            }else {
                return rejectWithValue("Unexpected error")
            }
        }
    }
)

export const editUser = createAsyncThunk(
    "user/editUser",
    async (patchUser: IShippingFields, {rejectWithValue}) => {
        try {
            const res = await axios.patch(`/users/${patchUser.id}`,patchUser)
            if (res.status !== 200){
                throw new Error("Ошибка при редактировании!")
            }

            return res.data

        }catch (err){
            if (err instanceof Error){
                return rejectWithValue(err.message)
            }else {
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
            const existingUserIndex = state.activeUsers.findIndex((item) => item.id === action.payload.id);

            if (existingUserIndex !== -1) {
                state.activeUsers[existingUserIndex] = { ...action.payload };

            } else {
                state.activeUsers = [...state.activeUsers, { ...action.payload }];
            }

            state.user = action.payload;
        },
        logOutAccount : (state, action) => {
            if (state.activeUsers.length >= 1){
                state.activeUsers = state.activeUsers.filter((item) => item.email !== action.payload.email)
                console.log(state.activeUsers)
            }else {
                state.activeUsers = []
                console.log(2)
            }

            state.user = {
                email: '',
                login: '',
                phone: "",
                avatar: ""
            }

        }
    },
    extraReducers:(builder) => {
        builder

            .addCase(getAllUsers.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(getAllUsers.rejected,(state, action) => {
                state.status = "error"
                state.error = action.payload as string
            })
            .addCase(getAllUsers.fulfilled,(state, action) => {
                state.users = action.payload
                state.status = "done"
            })


            .addCase(deleteUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(deleteUser.rejected,(state, action) => {
                state.status = "error"
                state.error = action.payload as string
            })
            .addCase(deleteUser.fulfilled,(state, action) => {
                state.user = action.payload
                state.status = "done"
            })

            .addCase(editUser.pending, (state) => {
                state.status = "loading"
                state.error = ""
            })
            .addCase(editUser.rejected,(state, action) => {
                state.status = "error"
                state.error = action.payload as string
            })
            .addCase(editUser.fulfilled,(state, action) => {
                state.user = action.payload
                state.status = "done"
            })

    }
})

export const {loginAccount, logOutAccount} = userSlice.actions
export default userSlice.reducer