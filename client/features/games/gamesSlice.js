import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  gamesAPI  from './gamesAPI.js'

export const createGame = createAsyncThunk(
  'games/createGame',
  async (formValues, thunkAPI) => {
    // const response = await gamesAPI.createGame(formValues)
    // console.log(formValues)
    return
    // return response.data
  }
)
export const updateGame = createAsyncThunk(
  'games/updateGame',
  async (formValues, thunkAPI) => {
    return
  }
)
export const deleteGame = createAsyncThunk(
  'games/createGame',
  async (id, thunkAPI) => {
    return
  }
)
export const getAllGames = createAsyncThunk(
  'games/getAllGames',
  async (_, thunkAPI) => {
    return
  }
)

const initialState = { 
  gamesArr: [
    {
      "id" : 1,
      "gameName": "Bobby B Ball",
      "sport": "basketball",
      "location": {
          "type": "Point",
          "coordinates": [
              -118.4162385,
              33.9173211
          ]
      },
      "address": "123 Main St, El Segundo, CA 90245, USA",
      "partySize": "4",
      "dateTime": "2023-10-06T15:00"
  },{
    "id" : 2,
    "gameName": "Golfing around",
    "sport": "golf",
    "location": {
        "type": "Point",
        "coordinates": [
            -118.4162385,
            33.9173211
        ]
    },
    "address": "123 Main St, El Segundo, CA 90245, USA",
    "partySize": "4",
    "dateTime": "2023-10-06T19:00"
}
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
    
  }
})

export const { addGame, editGame } = gamesSlice.actions
export default gamesSlice.reducer