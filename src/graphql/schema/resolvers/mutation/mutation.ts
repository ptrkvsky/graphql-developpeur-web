import { GraphQLObjectType } from 'graphql';
import createCategoryMutation from './createCategoryMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCategory: createCategoryMutation,
  },
});

export default mutation;
