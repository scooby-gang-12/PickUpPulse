import axios from "axios";

const gamesAPI  = {
  createGame: (formValues) => axios.post('/api/games', formValues),
  updateGame: (formValues) => axios.patch('/api/games', formValues),
  deleteGame: (id) => axios.delete(`/api/games/${id}`),
  getAllGames: () => axios.get('/api/games'),
  getGamesNearMe: (locationQuery) => axios.get(`/api/games/nearMe?lat=${locationQuery.lat}&lng=${locationQuery.lng}&radius=${locationQuery.radius}`)
}


export default gamesAPI;