import {configureStore, combineReducers} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import cinemaSlice from "../store/reducers/cinema"
import oneFilm from "../store/reducers/oneFilm"
import series from "../store/reducers/series"
import users from "./reducers/users"
import cartoons from "./reducers/cartoons";
import favoritesSlice from "./reducers/favorites";
import allData from "./reducers/allFilms";
import {Persistor} from "redux-persist/es/types";



const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    cinema: cinemaSlice,
    oneFilm: oneFilm,
    series: series,
    users: users,
    cartoons: cartoons,
    favorites: favoritesSlice,
    allData: allData
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })

})
 const persistor: Persistor = persistStore(store)

export {store, persistor}

export type RootReducer = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store

