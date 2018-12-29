import React from "react";
import styled from "styled-components";
import { scrollToTop } from "./util";

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
    this.usernameInput.current.focus();
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
    // props.login(username, password);
    console.log("login", this.state);
  }

  render() {
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

export default AdminPanel;
