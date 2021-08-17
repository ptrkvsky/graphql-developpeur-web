import { GraphQLFieldConfig } from 'graphql/type/definition';
import { GraphQLInt } from 'graphql';
import { Post } from '@prisma/client';
import { IApolloServerContext } from '@src/lib/interfaces/IApolloServerContext';
import GqlPost from '@src/graphql/schema/typedefs/GqlPost';
import { getPost } from '@src/data/postService';

const getPostQuery: GraphQLFieldConfig<unknown, IApolloServerContext> = {
  type: GqlPost,
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
  ): Promise<Post | null> => {
    return getPost(args.id);
  },
};

export default getPostQuery;
