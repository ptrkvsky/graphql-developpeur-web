import { GraphQLObjectType } from 'graphql';
import createCategoryMutation from './createCategoryMutation';
import deleteCategoryMutation from './deleteCategoryMutation';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createCategory: createCategoryMutation,
    deleteCategory: deleteCategoryMutation,
  },
});

export default mutation;
