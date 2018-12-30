import postService from "../services/post";

const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED";
const DELETE_POST = "DELETE_POST";
const DELETE_POST_FULFILLED = "DELETE_POST_FULFILLED";

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: postService.getPosts
  };
}

export function deletePost(slug) {
  return {
    type: DELETE_POST,
    payload: postService.deletePost(slug)
  };
}

export default function(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_FULFILLED:
      return payload;

    case DELETE_POST_FULFILLED:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
}
