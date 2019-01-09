import React from "react";
import { scrollToTop } from "./util";
import Card from "./PostCard";
import Comments from "./Comments";

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
        <Comments id={this.props.currentPost.id} />
      </div>
    );
  }
}

export default Post;
