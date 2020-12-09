import axios from "axios";

const url = "http://localhost:8001/api/auth/";

class AuthService {
  // post username and password
  login(username, password) {
    return axios
      .post(url + "signin", {
        username,
        password
      })
      .then(response => { // saves jwt to local storage
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  // when logging out removes jwt from local storage
  logout() {
    localStorage.removeItem("user");
  }
  // post username email and password after registering account
  register(username, email, password) {
    return axios.post(url + "signup", {
      username,
      email,
      password
    });
  }
  // gets user information and jwt from local storage
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();