import styled from "styled-components";

export const Card = styled.div`
  background-color: white;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  box-shadow: 1px 1px 1px black;
`;

export const Image = styled.img`
  ${props => `height: ${props.height};`}
  width: 100%;
  object-fit: cover;
  margin-bottom: 0.25rem;
`;
