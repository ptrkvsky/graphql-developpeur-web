import { GraphQLList } from 'graphql';
import { Post } from '@prisma/client';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import GqlPost from '@src/graphql/schema/typedefs/GqlPost';
import { getAllPosts } from '@src/data/postService';

const getAllPostsQuery = {
  type: GraphQLList(GqlPost),
  resolve: (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Post[]> => {
    return getAllPosts();
  },
};

export default getAllPostsQuery;
