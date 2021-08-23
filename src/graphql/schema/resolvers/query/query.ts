import { GraphQLObjectType } from 'graphql';
import * as querysCategory from '@src/graphql/schema/resolvers/query/category';
import * as querysPost from '@src/graphql/schema/resolvers/query/post';
import * as querysUser from '@src/graphql/schema/resolvers/query/user';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...querysCategory,
    ...querysPost,
    ...querysUser,
  },
});

export default query;
