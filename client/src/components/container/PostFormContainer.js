import PostForm from "../PostForm";
import { connect } from "react-redux";
import { updatePost, fetchPost } from "../../ducks/editingPost";
import { withRouter } from "react-router";

export default withRouter(
  connect(
    state => {
      const { editingPost } = state;
      return {
        editingPost
      };
    },
    {
      fetchPost,
      updatePost
    }
  )(PostForm)
);
