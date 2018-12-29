import axios from "axios";

function getPosts() {
  return axios.get("http://localhost:8889/post").then(res => res.data);
}

export default {
  getPosts
};
