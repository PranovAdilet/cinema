import {RootReducer} from "../store";

export const selectFilms =(state : RootReducer) => state.cinema
export const selectSeries =(state : RootReducer) => state.series
export const selectUser =(state : RootReducer) => state.user
export const selectFilm =(state : RootReducer) => state.oneFilm
export const selectOneSeries =(state : RootReducer) => state.oneSeries