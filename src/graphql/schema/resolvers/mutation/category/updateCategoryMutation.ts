import { GraphQLFieldConfig, GraphQLFieldResolver } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { updateCategory } from '@src/data/serviceCategory';
import GqlCategory from '@src/graphql/schema/typedefs/category/GqlCategory';
import UpdateCategoryInput from '@src/graphql/schema/typedefs/category/UpdateCategoryInput';

const createCategoryMutation: GraphQLFieldConfig<
  unknown,
  IApolloServerContext
> = {
  description: 'Create Category',
  type: GqlCategory,
  args: {
    data: {
      type: UpdateCategoryInput,
    },
  },
  resolve: async (
    _source: unknown,
    { data: { name, id } },
    _context: IApolloServerContext
  ): Promise<Category> => {
    return updateCategory(id, name);
  },
};

export default createCategoryMutation;
