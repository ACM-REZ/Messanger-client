import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from '../types/User'

interface UserState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: UserState = {
  user: null,
  isAuthenticated: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
