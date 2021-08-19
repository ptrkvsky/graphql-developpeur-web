import { GraphQLObjectType } from 'graphql';
import * as querysCategory from '@src/graphql/schema/resolvers/query/category';
import * as querysPost from '@src/graphql/schema/resolvers/query/post';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...querysCategory,
    ...querysPost,
  },
});

export default query;
