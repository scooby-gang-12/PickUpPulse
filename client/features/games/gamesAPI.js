import axios from "axios";

const gamesAPI  = {
  createGame: (formValues) => axios.post('/api/games', formValues),
  updateGame: (formValues) => axios.patch('/api/games', formValues),
  deleteGame: (id) => axios.delete('/api/games',{id: id} ),
  getAllGames: () => axios.get('/api/games')
}


export default gamesAPI;