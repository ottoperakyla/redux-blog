import Post from "../Post";
import { connect } from "react-redux";
import { fetchPost } from "../../ducks/editingPost";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    (state, { match: { params } }) => {
      const { posts } = state;
      const currentPost = posts.filter(({ slug }) => slug === params.slug)[0];
      return {
        currentPost
      };
    },
    {
      fetchPost
    }
  )(Post)
);
