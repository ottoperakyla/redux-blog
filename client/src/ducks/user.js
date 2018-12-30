import userService from "../services/user";

const LOGIN = "LOGIN";
const LOGIN_FULFILLED = "LOGIN_FULFILLED";
const LOGOUT = "LOGOUT";

export function login() {
  return {
    type: LOGIN,
    payload: userService.login
  };
}

export function logout() {
  userService.logout();

  return {
    type: LOGOUT
  };
}

export default function(state = !!localStorage.getItem("loggedIn"), action) {
  const { type } = action;

  switch (type) {
    case LOGIN_FULFILLED:
      return true;

    case LOGOUT:
      return false;

    default:
      return state;
  }
}
