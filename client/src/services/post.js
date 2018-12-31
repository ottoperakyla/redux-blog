import axios from "axios";

function getPosts() {
  return axios.get("http://localhost:8889/post").then(res => res.data);
}

function getPost(id) {
  return axios.get(`http://localhost:8889/post/${id}`).then(res => res.data);
}

function deletePost(id) {
  return () =>
    axios.delete(`http://localhost:8889/post/${id}`).then(res => res.data);
}

function updatePost(id, data) {}

export default {
  getPosts,
  getPost,
  deletePost,
  updatePost
};
