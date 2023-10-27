import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authAPI  from './authAPI.js'

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials) => {
  const response = await authAPI.login(credentials)
  if (credentials.password === 'fail') throw new Error('Incorrect Login')
  return response.data;
});

export const registerUser = createAsyncThunk('auth/registerUser', async (credentials) => {
    const response = await authAPI.register(credentials);
    return credentials;
  });

  export const logoutUser = createAsyncThunk('auth/logoutUser', async () => {
    await authAPI.logout();
    return null; 
  });

  export const attendGame = createAsyncThunk(
    'games/attendGame',
    async(id,thunkAPI) => {
      const response = await authAPI.attendGame(id)
      return response.data
    }
  )
  
  export const unattendGame = createAsyncThunk(
    'games/unattendGame',
    async (id,thunkAPI) => {
      const response = await authAPI.unattendGame(id)
      
      return response.data.updatedAttendingGames
    }
  )

  export const getUser = createAsyncThunk(
    'auth/getUser',
    async(_,thunkAPI) => {
      const response = await authAPI.getUser()
      
      return response.data
    }
  )


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
    logout(state) {
    state.isLoggedIn = false;
    state.userInfo = null;
    state.error = null;
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
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.userInfo = null;
      })
      .addCase(attendGame.fulfilled, (state,action)=>{
        state.userInfo = action.payload
      })
      .addCase(unattendGame.fulfilled, (state,action)=>{
        state.userInfo.attendingGames = action.payload
      })
      .addCase(getUser.fulfilled, (state,action)=>{
        state.userInfo = action.payload
      })
  }
})
export const { login, logout} = authSlice.actions
export default authSlice.reducer