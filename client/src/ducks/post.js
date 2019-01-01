import postService from "../services/post";

const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED";
const DELETE_POST = "DELETE_POST";
const DELETE_POST_FULFILLED = "DELETE_POST_FULFILLED";
const CREATE_POST = "CREATE_POST";
const CREATE_POST_FULFILLED = "CREATE_POST_FULFILLED";

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: postService.getPosts
  };
}

export function deletePost(id) {
  return {
    type: DELETE_POST,
    payload: postService.deletePost(id)
  };
}

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: postService.createPost(post)
  };
}

export default function(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_FULFILLED:
      return payload;

    case DELETE_POST_FULFILLED:
      return state.filter(({ id }) => id !== payload.id);

    case CREATE_POST_FULFILLED:
      return [payload.data].concat(state);

    default:
      return state;
  }
}
