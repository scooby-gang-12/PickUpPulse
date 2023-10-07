import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { userAPI } from './userAPI.js'

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  console.log(credentials)
  if (credentials.password === 'fail') throw new Error('Incorrect Login')
  return credentials;
});


const initialState = { 
  isLoggedIn: false,
  userInfo: null,
  error: null
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
    state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state,action)=>{
        state.isLoggedIn = true
        state.userInfo = action.payload
      })
      .addCase(loginUser.rejected, (state,action)=>{
        state.error = action.error.message
      })
  }
})
export const { login, logout} = authSlice.actions
export default authSlice.reducer