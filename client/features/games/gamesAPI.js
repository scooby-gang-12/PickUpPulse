import axios from "axios";

const gamesAPI  = {
  login: (credentials) => axios.post('/api/games', {username: credentials.username, password: credentials.password}),
}


export default gamesAPI;