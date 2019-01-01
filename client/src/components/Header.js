import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px 1px black;
  padding: 2rem;
  font-size: 2rem;
  border-radius: 5px;
  background: -webkit-linear-gradient(
    left,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
`;

export default () => (
  <Header>
    <Link style={{ textDecoration: "none", color: "white" }} to="/">
      <h2 style={{ color: "hotpink" }}>Blog with cat pictures</h2>
    </Link>
  </Header>
);
