import React from "react";
import { scrollToTop } from "./util";
import Card from "./PostCard";
import Comments from "./container/CommentsContainer";

class Post extends React.PureComponent {
  componentDidMount() {
    scrollToTop();
  }

  render() {
    const imageProps = {
      width: "100%",
      height: "350px"
    };
    if (!this.props.currentPost) {
      return null;
    }
    return (
      <div>
        <Card
          {...this.props.currentPost}
          imageProps={imageProps}
          readMore={false}
        />
        <Comments currentPost={this.props.currentPost} />
      </div>
    );
  }
}

export default Post;
