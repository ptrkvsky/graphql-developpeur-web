import { GraphQLFieldConfig } from 'graphql';
import { User } from '@prisma/client';
import { IAuthPayLoad } from '@src/lib/interfaces/IAuthPayLoad';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { signInUser } from '@src/data/serviceUser';
import GqlUser from '@src/graphql/schema/typedefs/user/GqlUser';
import SignInUserInput from '@src/graphql/schema/typedefs/user/SignInUserInput';

const signInUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Signin user',
  type: GqlUser,
  args: {
    data: {
      type: SignInUserInput,
    },
  },
  resolve: async (
    _source: unknown,
    { data: { name, email } },
    _context: IApolloServerContext
  ): Promise<IAuthPayLoad> => {
    const authPayload = signInUser(name, email);
    return authPayload;
  },
};

export default signInUserMutation;
