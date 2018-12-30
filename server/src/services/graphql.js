import { ApolloServer, gql } from "apollo-server-express";
import personService from "./person";
import postsService from "./post";
import { DateTime } from "luxon";

const typeDefs = gql`
  enum Gender {
    m
    f
  }

  enum Handedness {
    r
    l
  }

  input HirePersonInput {
    firstName: String!
    lastName: String!
    gender: Gender!
    salary: Int!
    email: String!
    relatedToCEO: Boolean!
    birthDay: String!
    handedness: Handedness!
  }

  type HirePersonPayload {
    person: Person
  }

  input FirePersonInput {
    id: String!
  }

  input DeletePostInput {
    id: String!
  }

  type FirePersonPayload {
    id: String
  }

  type DeletePostPayload {
    id: String
  }

  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    age: Float
    gender: Gender!
    salary: Int!
    email: String!
    relatedToCEO: Boolean!
    birthDay: String!
  }

  type Post {
    id: ID!
    title: String!
    description: String!
    text: String!
    date: String!
    image: String!
  }

  type Query {
    getPersons: [Person]!
    getPerson(id: String!): Person
    getPosts: [Post]!
  }

  type Mutation {
    firePerson(input: FirePersonInput!): FirePersonPayload
    hirePerson(input: HirePersonInput!): HirePersonPayload
    deletePost(input: DeletePostInput!): DeletePostPayload
  }
`;

const resolvers = {
  Query: {
    getPersons: async () => personService.all(),
    getPerson: async (_, { id }) => personService.findById(id),
    getPosts: async () => postsService.all()
  },
  Mutation: {
    firePerson: async (_, { input }) => {
      // console.log("firing person", { _, input });
      await personService.remove(input.id);

      return {
        id: input.id
      };
    },
    deletePost: async (_, { input }) => {
      // console.log("firing person", { _, input });
      await postsService.remove(input.id);

      return {
        id: input.id
      };
    },
    hirePerson: async (_, { input }) => {
      // console.log("hiring person", { _, input });
      const person = await personService.create({
        ...input,
        birthDay: DateTime.fromISO(input.birthDay).toJSDate()
      });
      return {
        person
      };
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;
