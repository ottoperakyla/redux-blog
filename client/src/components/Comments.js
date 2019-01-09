import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Card, FormInputs } from "./shared-styles";
import { formatDate } from "./util";
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

export default class Comments extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      username: ""
    };
  }

  addComment = e => {
    e.preventDefault();
    const { comment, username } = this.state;
    const newComment = { comment, username };

    this.props.addComment(this.props.currentPost.id, newComment);

    this.setState({
      comment: "",
      username: ""
    });
  };

  updateState = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <>
        <Card>
          <CommentList>
            <h3>Comments</h3>
            {this.props.currentPost.comments.map(
              ({ comment, username, date, id }) => (
                <Comment key={id}>
                  <CommentText>{comment}</CommentText>
                  <Meta>
                    <Author>{username}</Author>
                    <Timestamp>{formatDate(date)}</Timestamp>
                  </Meta>
                </Comment>
              )
            )}
          </CommentList>
        </Card>
        <Card>
          <form>
            <FormInputs style={{ gridTemplateColumns: "max-content" }}>
              <label htmlFor="comment">Comment</label>
              <textarea
                onChange={this.updateState}
                value={this.state.comment}
                required
                cols="40"
                rows="10"
                id="comment"
              />

              <label htmlFor="username">Username</label>
              <input
                onChange={this.updateState}
                value={this.state.username}
                required
                id="username"
                type="text"
              />
            </FormInputs>

            <Button onClick={this.addComment}>Add comment</Button>
          </form>
        </Card>
      </>
    );
  }
}
