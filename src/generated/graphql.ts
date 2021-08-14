import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IPrismaContext } from 'src/prisma/IPrismaContext';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

/** A category for posts */
export type Category = {
  __typename?: 'Category';
  /** Id of the category */
  id: Scalars['ID'];
  /** Name of the category */
  name?: Maybe<Scalars['String']>;
  /** Posts belonging to the category */
  posts?: Maybe<Array<Maybe<Post>>>;
};

/** Create category input */
export type CreateCategoryInput = {
  /** The categorys name. */
  name: Scalars['String'];
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Create Category */
  createCategory?: Maybe<Category>;
};


export type MutationCreateCategoryArgs = {
  input?: Maybe<CreateCategoryInput>;
};

/** Posts of the blog */
export type Post = {
  __typename?: 'Post';
  /** id of the post */
  id: Scalars['ID'];
  /** Creation date */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Update date */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Title of post */
  title?: Maybe<Scalars['String']>;
  /** Title of post */
  published?: Maybe<Scalars['Boolean']>;
  /** Category of post */
  category?: Maybe<Category>;
  /** id of the category */
  categoryId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getAllCategorys?: Maybe<Array<Maybe<Category>>>;
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Category: ResolverTypeWrapper<Category>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  CreateCategoryInput: CreateCategoryInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Mutation: ResolverTypeWrapper<{}>;
  Post: ResolverTypeWrapper<Post>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Query: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Category: Category;
  ID: Scalars['ID'];
  String: Scalars['String'];
  CreateCategoryInput: CreateCategoryInput;
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Post: Post;
  Boolean: Scalars['Boolean'];
  Int: Scalars['Int'];
  Query: {};
}>;

export type CategoryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createCategory?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType, RequireFields<MutationCreateCategoryArgs, never>>;
}>;

export type PostResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Category']>, ParentType, ContextType>;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  getAllCategorys?: Resolver<Maybe<Array<Maybe<ResolversTypes['Category']>>>, ParentType, ContextType>;
  getAllPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

