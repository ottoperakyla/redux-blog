import faker from "faker";
import uuid from "uuid/v4";
import { Range } from "immutable";
import { servicify } from "../util";

const fakeComment = () => ({
  id: uuid(),
  comment: faker.lorem.paragraph(),
  date: faker.date.past(),
  username: faker.internet.email()
});

const createPost = idx => {
  const title = idx === 1 ? "This post is about cats" : "And this";
  const fakeComments = [fakeComment(), fakeComment()];
  return {
    id: uuid(),
    title,
    slug: faker.helpers.slugify(title + idx),
    description: faker.lorem.sentence(),
    text: faker.lorem.paragraph(),
    date: faker.date.past(),
    image: faker.image.cats(640, 300) + "?r=" + idx,
    comments: fakeComments
  };
};

const posts = Range(1, 5)
  .map(createPost)
  .toList();

export default servicify(posts);
