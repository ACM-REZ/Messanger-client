import { configureStore, Store } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import themeReducer from '../entities/theme/model/themeSlice'
import userReducer from '../entities/user/model/userSlice'

export const store: Store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
