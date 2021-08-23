import { GraphQLFieldConfig } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import { createCategory as serviceCreateCategory } from '@src/data/serviceCategory';
import GqlCategory from '@src/graphql/schema/typedefs/category/GqlCategory';
import CreateCategoryInput from '@src/graphql/schema/typedefs/category/CreateCategoryInput';

const createCategory: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  description: 'Create Category',
  type: GqlCategory,
  args: {
    data: {
      type: CreateCategoryInput,
    },
  },
  resolve: async (
    _source: unknown,
    { data: { name } },
    _context: IApolloServerContext
  ): Promise<Category> => {
    return serviceCreateCategory(name);
  },
};

export default createCategory;
