import React from "react";
import { FormInputs } from "./shared-styles";
import { scrollToTop } from "./util";
import Button from "./Button";

export default class PostForm extends React.PureComponent {
  constructor(props) {
    const {
      match: {
        params: { id }
      }
    } = props;
    super(props);
    this.state = {
      post: {
        title: "",
        description: "",
        text: ""
      },
      postId: id,
      fetched: false,
      error: undefined
    };
    this.titleInput = React.createRef();
  }

  componentDidMount() {
    this.titleInput.current.focus();

    if (this.state.postId) {
      this.props.fetchPost(this.state.postId);
    }
  }

  componentDidUpdate() {
    scrollToTop();

    if (this.props.editingPost && !this.state.fetched) {
      this.setState({ post: this.props.editingPost, fetched: true });
    }
  }

  updateState = ({ target: { id, value } }) => {
    this.setState({
      ...this.state,
      post: {
        ...this.state.post,
        [id]: value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.postId) {
      this.props.updatePost(this.state.postId, this.state.post);
    } else {
      this.props.createPost(this.state.post);
    }
  };

  render() {
    const title = this.state.postId ? "Edit post" : "Create new post";
    return (
      <form>
        <h4>{title}</h4>

        <FormInputs>
          <label htmlFor="title">title</label>
          <input
            value={this.state.post.title}
            onChange={this.updateState}
            ref={this.titleInput}
            id="title"
            type="text"
          />

          <label htmlFor="description">description</label>
          <input
            value={this.state.post.description}
            onChange={this.updateState}
            id="description"
            type="text"
          />

          <label htmlFor="text">text</label>
          <textarea
            value={this.state.post.text}
            onChange={this.updateState}
            rows="10"
            id="text"
            type="text"
          />
        </FormInputs>

        <Button onClick={this.onSubmit}>Submit</Button>
      </form>
    );
  }
}
