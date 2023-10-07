import axios from "axios";

const userAPI  = {
  login: (credentials) => axios.post('/api/auth/login', {username: credentials.username, password: credentials.password}),
  logout: () => axios.post('/api/auth/logout'),
  register: (credentials) => axios.post('/api/auth/register', {username: credentials.username, password: credentials.password}),
}


export default userAPI;