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

function createPost(post) {
  const data = {
    ...post,
    date: new Date(),
    image: "http://lorempixel.com/640/300/cats"
  };
  return () => axios.post("http://localhost:8889/post/", data);
}

function updatePost(id, post) {
  const data = {
    ...post,
    date: new Date(),
    image: "http://lorempixel.com/640/300/cats"
  };
  return () => axios.post(`http://localhost:8889/post/${id}`, data);
}

export default {
  getPosts,
  getPost,
  deletePost,
  updatePost,
  createPost
};
