import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';

const GqlAuthPayload: GraphQLObjectType = new GraphQLObjectType({
  name: 'AuthToken',
  description: 'Session token',
  fields: () => ({
    token: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'JWT Token',
    },
  }),
});

export default GqlAuthPayload;
