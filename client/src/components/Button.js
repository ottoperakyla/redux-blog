import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: hotpink;
`;

export default ({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
