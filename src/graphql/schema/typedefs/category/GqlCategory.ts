/* eslint-disable import/no-cycle */
import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from 'graphql';

const GqlCategory: GraphQLObjectType = new GraphQLObjectType({
  name: 'Category',
  description: 'A category for posts',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'Id of the category',
    },
    name: {
      type: GraphQLString,
      description: 'Name of the category',
    },
  }),
});

export default GqlCategory;
