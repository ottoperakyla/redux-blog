import Comments from "../Comments";
import { connect } from "react-redux";
import { fetchComments, addComment } from "../../ducks/post";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => {
      const { comments } = state;
      return {
        comments
      };
    },
    {
      fetchComments,
      addComment
    }
  )(Comments)
);
