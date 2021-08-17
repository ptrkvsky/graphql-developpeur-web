import prismaContext from '@src/lib/prisma/prismaContext';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';

const apolloServerContext: IApolloServerContext = {
  prismaContext,
};

export default apolloServerContext;
