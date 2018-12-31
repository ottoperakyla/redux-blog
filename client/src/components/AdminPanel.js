import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { scrollToTop, limitChars } from "./util";
import { Image, FormInputs } from "./shared-styles";

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
  }

  componentDidMount() {
    scrollToTop();
    if (!this.props.loggedIn) {
      this.usernameInput.current.focus();
    }
  }

  updateState = ({ target: { id, value } }) => {
    this.setState({
      ...this.state,
      [id]: value
    });
  };

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  };

  deletePost(id) {
    if (window.confirm(`Are you sure you wanna delete the post ${id}?`)) {
      this.props.deletePost(id);
    }
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <>
          <h2>Edit posts</h2>
          <table>
            <tbody>
              <tr>
                <th>title</th>
                <th>slug</th>
                <th>description</th>
                <th>text</th>
                <th>date</th>
                <th colSpan="2">actions</th>
              </tr>
              {this.props.posts.map(post => {
                const {
                  slug,
                  id,
                  title,
                  description,
                  text,
                  date,
                  image
                } = post;
                return (
                  <tr key={id}>
                    <td>{title}</td>
                    <td>{slug}</td>
                    <td>{description}</td>
                    <td>{limitChars(text)}</td>
                    <td>{date}</td>
                    <td>
                      <Image src={image} />
                    </td>
                    <td>
                      <Link to={`posts/${id}/edit`}>
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
