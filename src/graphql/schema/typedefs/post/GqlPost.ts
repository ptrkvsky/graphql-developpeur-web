import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import { getCategory } from '@src/data/serviceCategory';
import GqlCategory from '@src/graphql/schema/typedefs/category/GqlCategory';

const GqlPost: GraphQLObjectType = new GraphQLObjectType({
  name: 'Post',
  description: 'Posts of the blog',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLID),
      description: 'id of the post',
    },
    createdAt: {
      type: GraphQLDateTime,
      description: 'Creation date',
    },
    updatedAt: {
      type: GraphQLDateTime,
      description: 'Update date of the post',
    },
    title: {
      type: GraphQLString,
      description: 'Title of post',
    },
    published: {
      type: GraphQLBoolean,
      description: 'Status of the post, published or not',
    },
    category: {
      type: GqlCategory,
      description: 'Category of post',
      resolve(parent) {
        return getCategory(parent.categoryId);
      },
    },
    categoryId: {
      type: GraphQLInt,
      description: 'id of the category',
    },
  }),
});

export default GqlPost;
