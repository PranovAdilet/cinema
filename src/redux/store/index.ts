import {configureStore, combineReducers} from "@reduxjs/toolkit";
import cinemaSlice from "../store/reducers/cinema"
import oneFilm from "../store/reducers/oneFilm"
import series from "../store/reducers/series"
import users from "./reducers/users"
import oneSeries from "../store/reducers/oneSeries"
import cartoons from "./reducers/cartoons";
import oneCartoon from "./reducers/oneCartoon";


const rootReducer = combineReducers({
    cinema: cinemaSlice,
    oneFilm: oneFilm,
    series: series,
    users: users,
    oneSeries: oneSeries,
    cartoons: cartoons,
    oneCartoon: oneCartoon
})

const store = configureStore({
    reducer: rootReducer
})

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store