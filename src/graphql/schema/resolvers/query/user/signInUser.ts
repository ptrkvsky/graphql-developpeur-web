import { GraphQLString } from 'graphql';
import { IAuthPayLoad } from '@src/lib/interfaces/IAuthPayLoad';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlAuthToken from '@src/graphql/schema/typedefs/user/GqlAuthToken';
import { signInUser } from '@src/data/serviceUser';

type ArgsSignInUser = {
  email: string;
  password: string;
};

const SignInUserQuery = {
  type: GqlAuthToken,
  args: {
    email: {
      type: GraphQLString,
    },
    password: {
      type: GraphQLString,
    },
  },
  resolve: (
    _source: unknown,
    args: ArgsSignInUser,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<IAuthPayLoad> => {
    return signInUser(args.email, args.password);
  },
};

export default SignInUserQuery;
