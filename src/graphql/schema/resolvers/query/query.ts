import { GraphQLObjectType } from 'graphql';
import getCategory from '@src/graphql/schema/resolvers/query/getCategory';
import getAllCategorys from '@src/graphql/schema/resolvers/query/getAllCategorys';
// Posts
import getPost from '@src/graphql/schema/resolvers/query/getPost';
import getAllPosts from '@src/graphql/schema/resolvers/query/getAllPosts';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    getCategory,
    getAllCategorys,
    getPost,
    getAllPosts,
  },
});

export default query;
