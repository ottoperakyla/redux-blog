import React from "react";
import { scrollToTop } from "./util";

class Post extends React.PureComponent {
  componentDidMount() {
    scrollToTop();
  }

  render() {
    const { slug } = this.props.match.params;
    return <div>{slug}</div>;
  }
}

export default Post;
