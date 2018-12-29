import React from "react";
import { Card, Image } from "./shared-styles";

export default () => (
  <Card>
    <h2>About Me</h2>
    <Image alt="" src="http://lorempixel.com/200/100/people/" height="100px" />
    <p>I like cats! So this blog is about cats.</p>
  </Card>
);
