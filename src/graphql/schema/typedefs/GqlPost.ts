import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
  GraphQLInt,
} from 'graphql';
import { GraphQLDateTime } from 'graphql-iso-date';
import { getCategory } from '../../../data/serviceCategory';
// eslint-disable-next-line import/no-cycle
import GqlCategory from './GqlCategory';

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
      description: 'Update date',
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
      resolve(parent, args) {
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

// id                    Int         @id @default(autoincrement())
// createdAt             DateTime    @default(now())
// updatedAt             DateTime    @default(now())
// title                 String
// description           String
// content               String
// published             Boolean     @default(false)
// author                User        @relation(fields: [authorId], references: [id])
// authorId              Int
// categories            Category[]  @relation(references: [id])
// relatedPosts          Post[]      @relation("relatedPosts")
// relatedPostsRelation  Post[]      @relation("relatedPosts")
