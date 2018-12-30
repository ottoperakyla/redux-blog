import AdminPanel from "../AdminPanel";
import { connect } from "react-redux";
import { login } from "../../ducks/user";
import { deletePost } from "../../ducks/post";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => {
      const { loggedIn, posts } = state;
      return {
        loggedIn,
        posts
      };
    },
    {
      login,
      deletePost
    }
  )(AdminPanel)
);
