import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';
import UserRoleEnum from '@src/graphql/schema/typedefs/user/UserRoleEnum';

const SignUpUserInut: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'SignUpUserInut',
  description: 'Create user input',
  fields: {
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
  },
});

export default SignUpUserInut;
