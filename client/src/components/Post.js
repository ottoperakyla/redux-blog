import React from "react";
import { scrollToTop } from "./util";
import { Link } from "react-router-dom";
import Card from "./Card";

class Post extends React.PureComponent {
  componentDidMount() {
    scrollToTop();
  }

  render() {
    const imageProps = {
      width: "100%",
      height: "350px"
    };
    return (
      <div>
        <Link to="/">Go back</Link>
        <Card
          {...this.props.currentPost}
          imageProps={imageProps}
          readMore={false}
        />
      </div>
    );
  }
}

export default Post;
