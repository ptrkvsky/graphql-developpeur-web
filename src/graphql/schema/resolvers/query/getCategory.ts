import { GraphQLList, GraphQLInt } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import GqlCategory from '@src/graphql/schema/typedefs/GqlCategory';
import { getCategory } from '@src/data/serviceCategory';
import GetCategoryInput from '../../typedefs/GetCategoryInput';

const getCategoryQuery = {
  type: GraphQLList(GqlCategory),
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: (
    _source: unknown,
    args: any,
    context: IApolloServerContext,
    _info: unknown
  ): Promise<Category | null> => {
    return getCategory(args.id);
  },
};

export default getCategoryQuery;
