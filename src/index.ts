import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import schema from '@src/graphql/schema/schema';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import prisma from '@src/prisma/client';

dotenv.config();

const apolloServerContext: IApolloServerContext = {
  prisma,
};

const server = new ApolloServer({
  schema,
  debug: process.env.NODE_ENV !== 'production',
  context: apolloServerContext,
});

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`Server is running on ${url}`));
