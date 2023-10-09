import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI  from './authAPI.js'

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await authAPI.login(credentials)
  if (credentials.password === 'fail') throw new Error('Incorrect Login')
  return credentials;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (credentials) => {
  
    const response = await authAPI.register(credentials);
    return credentials;
 
  })
  



//perform async request using auth api and return is user info 

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