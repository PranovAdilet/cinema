import {RootReducer} from "../store";

export const selectFilms =(state : RootReducer) => state.cinema
export const selectSeries =(state : RootReducer) => state.series
export const selectUser =(state : RootReducer) => state.users
export const selectFilm =(state : RootReducer) => state.oneFilm
export const selectCartoons =(state : RootReducer) => state.cartoons

export const selectFavorites =(state : RootReducer) => state.favorites

export const selectData =(state : RootReducer) => state.allData