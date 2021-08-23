import { GraphQLList } from 'graphql';
import { User } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlUser from '@src/graphql/schema/typedefs/user/GqlUser';
import { getAllUsers } from '@src/data/serviceUser';

const getAllUsersQuery = {
  type: GraphQLList(GqlUser),
  resolve: (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<User[]> => {
    return getAllUsers();
  },
};

export default getAllUsersQuery;
