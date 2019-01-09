import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeGradient } from "./util";

const Header = styled.div`
  display: flex;
  justify-content: center;
  text-shadow: 1px 1px 1px black;
  padding: 2rem;
  font-size: 2rem;
  border-radius: 5px;
  background: ${makeGradient()};
  margin: 1rem 0;
`;

export default () => (
  <Header>
    <Link style={{ textDecoration: "none", color: "white" }} to="/">
      <h2 style={{ color: "hotpink" }}>Hardcore cat blog</h2>
    </Link>
  </Header>
);
