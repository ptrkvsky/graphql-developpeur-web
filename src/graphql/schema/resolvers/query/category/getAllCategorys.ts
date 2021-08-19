import { GraphQLList } from 'graphql';
import { Category } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlCategory from '@src/graphql/schema/typedefs/category/GqlCategory';
import { getAllCategorys } from '@src/data/serviceCategory';

const getAllCategorysQuery = {
  type: GraphQLList(GqlCategory),
  resolve: (
    _source: unknown,
    _args: unknown,
    context: IApolloServerContext,
    _info: unknown
  ): Promise<Category[]> => {
    return getAllCategorys();
  },
};

export default getAllCategorysQuery;
