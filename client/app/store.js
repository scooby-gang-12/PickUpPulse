import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice.js'
import gamesReducer from '../features/games/gamesSlice'
export const store = configureStore({
  reducer: {
    games: gamesReducer,
    auth: authReducer,
  },
})
    
export default store;
