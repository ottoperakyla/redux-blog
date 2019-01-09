import axios from "axios";
const baseUrl = "http://localhost:8889";

function getPosts() {
  return axios.get(`${baseUrl}/post`).then(res => res.data);
}

function getPost(id) {
  return axios.get(`${baseUrl}/post/${id}`).then(res => res.data);
}

function deletePost(id) {
  return () => axios.delete(`${baseUrl}/post/${id}`).then(res => res.data);
}

function createPost(post) {
  const data = {
    ...post,
    date: new Date(),
    image: "http://lorempixel.com/640/300/cats"
  };
  return () => axios.post(`${baseUrl}/post/`, data);
}

function updatePost(id, post) {
  const data = {
    ...post,
    date: new Date(),
    image: "http://lorempixel.com/640/300/cats"
  };
  return () => axios.post(`${baseUrl}/post/${id}`, data);
}

function fetchCommentsById(postId) {
  return () => axios.get(`${baseUrl}/comments/${postId}`).then(res => res.data);
}

function addComment(postId, comment) {
  const data = {
    ...comment,
    date: new Date()
  };
  return () => axios.post(`${baseUrl}/comments/${postId}`, data);
}

function deleteComment(commentId) {
  return () => new Promise(r => r({ id: commentId }));
}

export default {
  getPosts,
  getPost,
  deletePost,
  updatePost,
  createPost,
  fetchCommentsById,
  addComment,
  deleteComment
};
