import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Card, FormInputs } from "./shared-styles";
const CommentList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Comment = styled.li`
  margin-bottom: 0.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #ccc;

  &:last-child {
    border-bottom: 0;
  }
`;
const CommentText = styled.div`
  margin-bottom: 0.25rem;
`;

const Meta = styled.div`
  display: flex;
`;
const Author = styled.div``;
const Timestamp = styled.div`
  margin-left: 0.25rem;
  &:before {
    content: "@";
    margin-right: 0.25rem;
  }
`;

export default ({ id }) => {
  return (
    <>
      <Card>
        <CommentList>
          <h3>Comments</h3>
          <Comment>
            <CommentText>Cute cat!</CommentText>
            <Meta>
              <Author>Super Seppo</Author>
              <Timestamp>09/01/2019</Timestamp>
            </Meta>
          </Comment>
          <Comment>
            <CommentText>but where are the dogs?</CommentText>
            <Meta>
              <Author>Super Seppo</Author>
              <Timestamp>12/01/2019</Timestamp>
            </Meta>
          </Comment>
        </CommentList>
      </Card>
      <Card>
        <form>
          <FormInputs style={{ gridTemplateColumns: "max-content" }}>
            <label htmlFor="comment">Comment</label>
            <textarea required cols="40" rows="10" id="comment" />

            <label htmlFor="username">Username</label>
            <input required id="username" type="text" />
          </FormInputs>

          <Button>Add comment</Button>
        </form>
      </Card>
    </>
  );
};
