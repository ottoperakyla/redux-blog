import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";
import { Card, Image } from "./shared-styles";
import { scrollToTop } from "./util";

const PostListing = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ({ posts }) => (
  <Card>
    <h3>Popular Cats</h3>
    <PostListing>
      {posts.map(({ slug, image }) => (
        <div style={{ marginBottom: "0.5rem" }} key={slug}>
          <Image height="150px" src={image} alt="" />
          <Link onClick={scrollToTop} to={`/posts/${slug}`}>
            <Button>Read more</Button>
          </Link>
        </div>
      ))}
    </PostListing>
  </Card>
);
