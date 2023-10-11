import axios from "axios";

const userAPI  = {
  attendGame: (id) => axios.patch(`/api/user/attendGame/${id}`),
  unattendGame: (id) => axios.patch(`/api/user/unattendGame/${id}`),
}


export default userAPI;