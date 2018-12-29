import axios from "axios";

function login(username, password) {
  return axios
    .post("http://localhost:8889/login", { username, password })
    .then(res => res.data);
}

export default {
  login
};
