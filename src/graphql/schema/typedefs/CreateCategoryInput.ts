import {
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';

const CreateCategoryInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateCategoryInput',
  description: 'Create category input',
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The categorys name.',
    },
  },
});

export default CreateCategoryInput;
