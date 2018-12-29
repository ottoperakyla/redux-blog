import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px 1px black;
  padding: 2rem;
  font-size: 2rem;
  color: white;
  background: #aaa;
`;

export default () => (
  <Header>
    <Link style={{ textDecoration: "none", color: "white" }} to="/">
      <h2>Blog with cat pictures</h2>
    </Link>
  </Header>
);
