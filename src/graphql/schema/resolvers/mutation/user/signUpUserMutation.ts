import { IAuthPayLoad } from './../../../../../lib/interfaces/IAuthPayLoad';
import { GraphQLFieldConfig } from 'graphql';
import { User } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { signUpUser } from '@src/data/serviceUser';
import GqlUser from '@src/graphql/schema/typedefs/category/GqlCategory';
import SignUpUserInput from '@src/graphql/schema/typedefs/user/SignUpUserInput';

const signUpUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Sign up user',
  type: GqlUser,
  args: {
    data: {
      type: SignUpUserInput,
    },
  },
  resolve: async (
    _source: unknown,
    { data: { name, email, password, role } },
    _context: IApolloServerContext
  ): Promise<IAuthPayLoad> => {
    const authPayload = signUpUser(name, email, password, role);
    return authPayload;
  },
};

export default signUpUserMutation;
