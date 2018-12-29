import raw from "./raw/post.js";
import { asyncronifyAll, slowify } from "./util";

const posts = asyncronifyAll(raw);

export default {
  ...posts,
  remove: slowify(500, 10000)(posts.remove)
};
