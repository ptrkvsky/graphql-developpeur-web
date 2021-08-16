import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const UpdateCategoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'UpdateCategoryInput',
  description: 'Update category input',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Id of the category.',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Name of the category.',
    },
  },
});

export default UpdateCategoryInput;
