function login(username, password) {
  return new Promise(resolve => {
    setTimeout(() => {
      localStorage.setItem("loggedIn", "1");
      resolve();
    }, Math.random() * 2000);
  });
}

function logout() {
  localStorage.removeItem("loggedIn");
}

export default {
  login,
  logout
};
