import { GraphQLObjectType } from 'graphql';
import * as mutationsCategory from '@src/graphql/schema/resolvers/mutation/category';
import * as mutationsUser from '@src/graphql/schema/resolvers/mutation/user';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutationsCategory,
    ...mutationsUser,
  },
});

export default mutation;
