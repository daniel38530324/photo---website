import axios from "axios";
const API_URL = "https://photo---website.herokuapp.com/api/contact";

class AuthService {
  contact(name, email, phone, need) {
    return axios.post(API_URL + "/method", {
      name,
      email,
      phone,
      need,
    });
  }
}

export default new AuthService();
