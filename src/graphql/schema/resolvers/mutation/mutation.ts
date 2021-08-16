import { GraphQLObjectType } from 'graphql';
import * as mutationCategory from '@src/graphql/schema/resolvers/mutation/category';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutationCategory,
  },
});

export default mutation;
