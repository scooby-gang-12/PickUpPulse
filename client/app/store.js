import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/auth/authSlice.js'

export const store = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
})

export default store;