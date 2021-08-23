import { GraphQLInputObjectType, GraphQLInt, GraphQLNonNull } from 'graphql';

const GetCategoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'GetCategoryInput',
  description: 'Get category input',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Id of the category.',
    },
  },
});

export default GetCategoryInput;
