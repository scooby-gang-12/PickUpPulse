import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import userAPI  from './userAPI.js'

  export const attendGame = createAsyncThunk(
    'games/attendGame',
    async(id,thunkAPI) => {
      console.log(id)
      const response = await userAPI.attendGame(id)
      return response.data
    }
  )
  
  export const unattendGame = createAsyncThunk(
    'games/unattendGame',
    async(id,thunkAPI) => {
      const response = await userAPI.unattendGame(id)
      return response.data
    }
  )



const initialState = { 
  userInfo: null,
  error: null
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearGames(state) {
    state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(attendGame.fulfilled, (state,action)=>{
        state.userInfo = action.payload
      })
      .addCase(unattendGame.fulfilled, (state,action)=>{
        state.userInfo = action.payload
      })
  }
})
export const { login, logout} = userSlice.actions
export default userSlice.reducer