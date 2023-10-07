import axios from "axios";

const authAPI  = {
  login: (credentials) => axios.post('/api/auth/login', {username: credentials.username, password: credentials.password}),
  register: (credentials) => axios.post('/api/auth/register', {fullName: credentials.fullName, username: credentials.username, password: credentials.password, favoriteSports: credentials.favSports, location: credentials.location}),
  logout: () => axios.post('/api/auth/logout'),
}


export default authAPI;