import postService from "../services/post";

const FETCH_POST = "FETCH_POST";
const FETCH_POST_FULFILLED = "FETCH_POST_FULFILLED";
const UPDATE_POST = "UPDATE_POST";
const UPDATE_POST_FULFILLED = "UPDATE_POST_FULFILLED";
const DELETE_COMMENT = "DELETE_COMMENT";
const DELETE_COMMENT_FULFILLED = "DELETE_COMMENT_FULFILLED";

export function fetchPost(id) {
  return {
    type: FETCH_POST,
    payload: postService.getPost(id)
  };
}

export function updatePost(id, data) {
  return {
    type: UPDATE_POST,
    payload: postService.updatePost(id, data)
  };
}

export function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    payload: postService.deleteComment(id)
  };
}

export default function(state = null, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_POST_FULFILLED:
      return payload;

    case DELETE_COMMENT_FULFILLED:
      const comments = state.comments.filter(({ id }) => id !== payload.id);
      console.log(comments);
      return {
        ...state,
        comments
      };

    default:
      return state;
  }
}
