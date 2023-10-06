import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { gamesAPI } from './gamesAPI.js'

const initialState = { 
  games: ['game 1', 'game2']
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    createGame(state,action) {
      state = [...state,action.payload]
    },  
  },
})

export const { createGame } = gamesSlice.actions
export default gamesSlice.reducer