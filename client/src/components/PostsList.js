import React from "react";
import Card from "./Card";

export default ({ posts }) => (
  <>
    {posts.map(post => (
      <Card {...post} />
    ))}
  </>
);
