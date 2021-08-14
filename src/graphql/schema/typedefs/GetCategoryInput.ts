import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

const GetCategoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'GetCategoryInput',
  description: 'Get category input',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'The categorys id.',
    },
  },
});

export default GetCategoryInput;
