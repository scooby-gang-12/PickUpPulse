import axios from "axios";

const authAPI  = {
  login: (credentials) => axios.post('/api/auth/login', {username: credentials.username, password: credentials.password}),
  register: (credentials) => axios.post('/api/auth/register', {fullName: credentials.fullName, username: credentials.username, password: credentials.password, favoriteSports: credentials.favoriteSports, location: credentials.location}),
  logout: () => axios.post('/api/auth/logout'),
  attendGame: (id) => {
    // console.log("id passed in to authAPI: ", id);
    return axios.patch(`/api/games/attendGame/${id}`);
  },
  unattendGame: (id) => {
    // console.log("id passed in to authAPI unattendGame: ", id);
    return axios.patch(`/api/games/unattendGame/${id}`)
},
  getUser: () => axios.get('/api/auth/user')
}

export default authAPI;