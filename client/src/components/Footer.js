import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  font-size: 1rem;
  margin-top: 1rem;
  background: #ddd;
`;

export default () => (
  <Footer>
    <h2>&copy; 2019 Acme Corporation</h2>
    <p>
      <Link to="/admin">Admin login</Link>
    </p>
  </Footer>
);
