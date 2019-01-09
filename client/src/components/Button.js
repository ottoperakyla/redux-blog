import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  box-shadow: 1px 1px 1px black;
  margin: 0.5rem 0;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
