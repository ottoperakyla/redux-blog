import React from "react";
import { Link } from "react-router-dom";
import { Image, Card } from "./shared-styles";
import { limitChars } from "./util";

export default ({
  id,
  title,
  description,
  date,
  image,
  text,
  slug,
  readMore = true,
  imageProps = { height: "150px", width: "50%" }
}) => (
  <Card key={id}>
    <h2>{title}</h2>
    <h5>
      {description} <br />
      Posted at {new Date(date).toLocaleString()}
    </h5>
    <Image {...imageProps} alt="" src={image} />
    <p>{readMore ? limitChars(text) : text}</p>
    {readMore && <Link to={`posts/${slug}`}>Read more</Link>}
  </Card>
);
