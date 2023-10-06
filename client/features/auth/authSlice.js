import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI.js'


// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async (credentials) => {
//     const response = await userAPI.fetchById(userId)
//     return response.data
//   }
// )

const initialState = { 
  isLoggedIn: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
      console.log(state.isLoggedIn)
    },
    logout(state) {
     state.isLoggedIn = false;
    },
  
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer