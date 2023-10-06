import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI.js'
import { createSlice } from '@reduxjs/toolkit'

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (credentials) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

const initialState = { 
  isLoggedIn: false
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      isLoggedIn = true;
    },
    logout(state) {
      isLoggedIn = false;
    },
  
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer