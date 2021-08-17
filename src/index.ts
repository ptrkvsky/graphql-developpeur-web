import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv-safe';
import apolloServerConfig from '@src/lib/config/apolloServerConfig';

dotenv.config();

const server = new ApolloServer(apolloServerConfig);

server
  .listen({ port: 4000 })
  .then(({ url }) => console.log(`🚀 Server is running on ${url} 🚀`))
  .catch(err => console.log('😭 Error launching server 😭', err));
