import { GraphQLFieldConfig, GraphQLFieldResolver, GraphQLInt } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import { deleteCategory } from '@src/data/serviceCategory';
import GqlCategory from '@src/graphql/schema/typedefs/GqlCategory';

const deleteCategoryMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'Delete a category with an id',
  type: GqlCategory,
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: async (
    _source: unknown,
    { id },
    _context: IApolloServerContext
  ): Promise<Category | null> => {
    return deleteCategory(id);
  },
};

export default deleteCategoryMutation;
