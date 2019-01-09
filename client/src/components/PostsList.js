import React from "react";
import Card from "./PostCard";

export default ({ posts }) => (
  <>
    {posts.map(post => (
      <Card {...post} />
    ))}
  </>
);
