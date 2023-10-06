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

const authSlice = createSlice({
  name: 'auth',
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

export const { login, logout } = authSlice.actions
export default authSlice.reducer