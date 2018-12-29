import postService from "../services/post";

const FETCH_POSTS = "FETCH_POSTS";
const FETCH_POSTS_FULFILLED = "FETCH_POSTS_FULFILLED";

export function fetchPosts() {
  return {
    type: FETCH_POSTS,
    payload: postService.getPosts
  };
}

export default function(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POSTS_FULFILLED:
      return payload;

    default:
      return state;
  }
}
