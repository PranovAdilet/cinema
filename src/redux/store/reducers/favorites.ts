import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFilm} from "../../../interface/app.interface";


interface IFavoritesState{
    favoritesData: IFilm[]

}
const initialState: IFavoritesState = {
    favoritesData: []
}


const favoritesSlice = createSlice({
    name: "favoritesSlice",
    initialState,
    reducers: {
        addFavorite : (state, action: PayloadAction<IFilm>) => {
            state.favoritesData = [...state.favoritesData, action.payload]
            console.log("ok")
        }
    }
})

export const {addFavorite} = favoritesSlice.actions

export default favoritesSlice.reducer

