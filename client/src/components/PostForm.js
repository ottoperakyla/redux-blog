import React from "react";
import { FormInputs } from "./shared-styles";

export default class PostForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      text: "",
      image: "",
      error: undefined
    };
    this.titleInput = React.createRef();
  }

  componentDidMount() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    this.titleInput.current.focus();
    if (id) {
      this.props.fetchPost(id);
    }
  }

  componentDidUpdate() {
    if (this.props.editingPost) {
      this.setState(this.props.editingPost);
    }
  }

  updateState = ({ target: { id, value } }) => {
    this.setState({
      ...this.state,
      [id]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("lollers", this.state);
  };

  render() {
    return (
      <form>
        <h4>Create new post</h4>

        <FormInputs>
          <label htmlFor="title">title</label>
          <input
            value={this.state.title}
            onChange={this.updateState}
            ref={this.titleInput}
            id="title"
            type="text"
          />

          <label htmlFor="description">description</label>
          <input
            value={this.state.description}
            onChange={this.updateState}
            id="description"
            type="text"
          />

          <label htmlFor="text">text</label>
          <textarea
            value={this.state.text}
            onChange={this.updateState}
            rows="10"
            id="text"
            type="text"
          />

          <label htmlFor="image">image</label>
          <input id="image" type="file" />
        </FormInputs>

        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}
