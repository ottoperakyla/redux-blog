import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToTop, limitChars, embedImage } from "./util";

const FormInputs = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 5px;
`;

const Error = styled.div`
  color: red;
`;

class AdminPanel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: undefined
    };
    this.usernameInput = React.createRef();
    this.updateState = this.updateState.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    scrollToTop();
    if (!this.props.loggedIn) {
      this.usernameInput.current.focus();
    }
  }

  updateState({ target: { id, value } }) {
    this.setState({
      ...this.state,
      [id]: value
    });
  }

  login(e) {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  }

  deletePost(id) {
    if (window.confirm(`Are you sure you wanna delete the post ${id}?`)) {
      this.props.deletePost(id);
    }
  }

  render() {
    if (this.props.loggedIn) {
      const { posts } = this.props;
      const firstPost = posts[0];
      if (!firstPost) {
        return <div />;
      }
      return (
        <>
          <h2>Edit posts</h2>
          <table>
            <tbody>
              <tr>
                {Object.keys(firstPost)
                  .slice(1)
                  .map(key => (
                    <th key={key}>{key}</th>
                  ))}
                <th colSpan="2">actions</th>
              </tr>
              {this.props.posts.map(post => {
                const values = Object.values(post).slice(1);
                const { slug, id } = post;
                return (
                  <tr key={id}>
                    {values.map((v, idx) => (
                      <td key={idx}>{limitChars(50, embedImage(v))}</td>
                    ))}
                    <td>
                      <Link to={`posts/${slug}/edit`}>
                        <button>Edit</button>
                      </Link>
                    </td>
                    <td>
                      <button onClick={() => this.deletePost(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Link to="posts/create">
            <button>Create new post</button>
          </Link>
        </>
      );
    } else {
      return (
        <form>
          <h4>Login</h4>

          <FormInputs>
            <label htmlFor="username">Username</label>
            <input
              onChange={this.updateState}
              ref={this.usernameInput}
              id="username"
              type="text"
            />

            <label htmlFor="password">Password</label>
            <input onChange={this.updateState} id="password" type="password" />
          </FormInputs>

          {this.state.error && <Error>{this.state.error}</Error>}
          <button onClick={this.login}>Login</button>
        </form>
      );
    }
  }
}

export default AdminPanel;
