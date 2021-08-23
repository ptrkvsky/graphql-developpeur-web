import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';
import UserRoleEnum from '@src/graphql/schema/typedefs/user/UserRoleEnum';

const GqlUser: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  description: 'Users of the website',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Id of the user',
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Email of the user.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the user.',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Password of the user.',
    },
    role: {
      type: new GraphQLNonNull(UserRoleEnum),
      description: 'Role of the user, ADMIN or USER',
    },
  }),
});

export default GqlUser;
