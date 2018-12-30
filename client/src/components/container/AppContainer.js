import App from "../App";
import { connect } from "react-redux";
import { fetchPosts } from "../../ducks/post";
import { logout } from "../../ducks/user";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => {
      const { posts, loggedIn } = state;
      const popularPosts = state.posts.slice(0, 3);
      return {
        posts,
        popularPosts,
        loggedIn
      };
    },
    {
      fetchPosts,
      logout
    }
  )(App)
);
