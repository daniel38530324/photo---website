import axios from "axios";
const API_URL = "http://localhost:8080/api/contact";

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
