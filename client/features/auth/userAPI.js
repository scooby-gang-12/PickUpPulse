import axios from "axios";

const userAPI  = {
  login: (credentials) => axios.post('/api/auth/login', {username: credentials.username, password: credentials.password}),
  logout: () => axios.post('/api/auth/logout'),
}


export default userAPI;