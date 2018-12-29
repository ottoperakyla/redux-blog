import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "./shared-styles";

export default ({ posts }) => (
  <>
    {posts.map(post => {
      const { id, slug, title, description, text, date, image } = post;
      return (
        <Card key={id}>
          <h2>{title}</h2>
          <h5>
            {description} <br />
            Posted at {new Date(date).toLocaleString()}
          </h5>
          <Image height="300px" alt="" src={image} />
          <p>{text}</p>
          <Link to={`posts/${slug}`}>Read more</Link>
        </Card>
      );
    })}

    <a href="#todo">Load more posts</a>
  </>
);
