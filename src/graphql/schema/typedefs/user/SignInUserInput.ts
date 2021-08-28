import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const SignInUserInut: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'SignInUserInut',
  description: 'Create user input',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Email of the user.',
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Password of the user.',
    },
  },
});

export default SignInUserInut;
