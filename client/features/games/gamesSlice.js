import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  gamesAPI  from './gamesAPI.js'

export const createGame = createAsyncThunk(
  'games/createGame',
  async (formValues, thunkAPI) => {
    console.log("Form values in gamesSlice createGame:", formValues);
    const response = await gamesAPI.createGame(formValues)
    return response.data
  }
)
export const updateGame = createAsyncThunk(
  'games/updateGame',
  async (formValues, thunkAPI) => {
    const response = await gamesAPI.updateGame(formValues)
    return response.data
  }
)
export const deleteGame = createAsyncThunk(
  'games/deleteGame',
  async (id, thunkAPI) => {
    console.log(id)
    const response = await gamesAPI.deleteGame(id)
    return response.data
  }
)
export const getAllGames = createAsyncThunk(
  'games/getAllGames',
  async (_, thunkAPI) => {
    const response = await gamesAPI.getAllGames()
    return response.data
  }
)
export const getGamesNearMe = createAsyncThunk(
  'games/getGamesNearMe',
  async (locationQuery, thunkAPI) => {
    const response = await gamesAPI.getGamesNearMe(locationQuery)
    return response.data
  }
  
)


const initialState = { 
  gamesArr: [
  //   {
  //     "id" : 1,
  //     "gameName": "Bobby B Ball",
  //     "sport": "basketball",
  //     "location": {
  //         "type": "Point",
  //         "coordinates": [
  //             -118.4162385,
  //             33.9173211
  //         ]
  //     },
  //     "address": "123 Main St, El Segundo, CA 90245, USA",
  //     "partySize": "4",
  //     "dateTime": "2023-10-06T15:00"
  // },{
  //   "id" : 2,
  //   "gameName": "Golfing around",
  //   "sport": "golf",
  //   "location": {
  //       "type": "Point",
  //       "coordinates": [
  //           -118.4162385,
  //           33.9173211
  //       ]
  //   },
  //   "address": "123 Main St, El Segundo, CA 90245, USA",
  //   "partySize": "4",
  //   "dateTime": "2023-10-06T19:00"
  // }
  ]
}

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    addGame(state,action) {
      state.gamesArr.push(action.payload)
    },
    editGame(state,action) {
      const gameIndex = state.gamesArr.findIndex(game => game.id === action.payload.id);
      if (gameIndex !== -1) {
        state.gamesArr[gameIndex] = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(createGame.fulfilled, (state,action) => {
      state.gamesArr = action.payload
    })
    .addCase(createGame.pending, (state,action) => {})
    .addCase(createGame.rejected, (state,action) => {})
    // UPDATE GAME
    .addCase(updateGame.fulfilled, (state,action) => {
      state.gamesArr = action.payload
    })
    .addCase(updateGame.pending, (state,action) => {})
    .addCase(updateGame.rejected, (state,action) => {})
    // DELETE GAME
    .addCase(deleteGame.fulfilled, (state,action) => {
      state.gamesArr = action.payload
    })
    .addCase(deleteGame.pending, (state,action) => {})
    .addCase(deleteGame.rejected, (state,action) => {})
    // GET ALL GAMES 
    .addCase(getAllGames.fulfilled, (state,action) => {
      state.gamesArr = action.payload
    })
    .addCase(getAllGames.pending, (state,action) => {})
    .addCase(getAllGames.rejected, (state,action) => {})
    // GET GAMES NEAR ME
    .addCase(getGamesNearMe.fulfilled, (state,action) => {
      state.gamesArr = action.payload
    })
    .addCase(getGamesNearMe.pending, (state,action) => {})
    .addCase(getGamesNearMe.rejected, (state,action) => {})
  }
  
})

export const { addGame, editGame } = gamesSlice.actions
export default gamesSlice.reducer