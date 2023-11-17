import {RootReducer} from "../store";

export const selectFilms =(state : RootReducer) => state.cinema
export const selectSeries =(state : RootReducer) => state.series
export const selectUser =(state : RootReducer) => state.users
export const selectFilm =(state : RootReducer) => state.oneFilm
export const selectOneSeries =(state : RootReducer) => state.oneSeries
export const selectCartoons =(state : RootReducer) => state.cartoons
export const selectOneCartoon =(state : RootReducer) => state.oneCartoon

export const selectFavorites =(state : RootReducer) => state.favorites