import { GraphQLFieldConfig } from 'graphql';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { signUpUser } from '@src/data/serviceUser';
import GqlAuthToken from '@src/graphql/schema/typedefs/user/GqlAuthToken';
import SignUpUserInput from '@src/graphql/schema/typedefs/user/SignUpUserInput';
import { IAuthPayLoad } from '@src/lib/interfaces/IAuthPayLoad';

const signUpUserMutation: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Sign up user',
  type: GqlAuthToken,
  args: {
    data: {
      type: SignUpUserInput,
    },
  },
  resolve: async (
    _source: unknown,
    { data: { name, email, password } },
    _context: IApolloServerContext
  ): Promise<IAuthPayLoad> => {
    const authPayload = signUpUser(name, email, password);
    return authPayload;
  },
};

export default signUpUserMutation;
