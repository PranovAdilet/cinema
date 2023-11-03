import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootReducer, AppDispatch } from '../store/index'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootReducer> = useSelector