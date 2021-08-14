import { GraphQLList, GraphQLInt } from 'graphql';
import { Post } from '@prisma/client';
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext';
import GqlPost from '@src/graphql/schema/typedefs/GqlPost';
import { getPost } from '@src/data/postService';

type Args = {
  id: number;
};

const getPostQuery = {
  type: GraphQLList(GqlPost),
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
  ): Promise<Post | null> => {
    return getPost(args.id);
  },
};

export default getPostQuery;
