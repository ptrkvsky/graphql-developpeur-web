import { GraphQLFieldConfig, GraphQLInt, GraphQLNonNull } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlCategory from '@src/graphql/schema/typedefs/category/GqlCategory';
import { getCategory } from '@src/data/serviceCategory';

const getCategoryQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  type: GqlCategory,
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (
    _source: unknown,
    args,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Category | null> => {
    return getCategory(args.id);
  },
};

export default getCategoryQuery;
