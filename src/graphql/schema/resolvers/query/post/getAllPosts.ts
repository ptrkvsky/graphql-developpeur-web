import { GraphQLList } from 'graphql';
import { Post } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlPost from '@src/graphql/schema/typedefs/post/GqlPost';
import { getAllPosts } from '@src/data/servicePost';

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
