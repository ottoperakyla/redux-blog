import App from "../App";
import { connect } from "react-redux";
import { fetchPosts } from "../../ducks/post";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => {
      const posts = state.posts;
      const popularPosts = state.posts.slice(0, 3);
      return {
        posts,
        popularPosts
      };
    },
    {
      fetchPosts
    }
  )(App)
);
