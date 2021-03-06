import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from 'graphql';
import { IPrismaContext } from 'src/lib/interfaces/IPrismaContext';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
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
};

/** Create category input */
export type CreateCategoryInput = {
  /** Name of the category. */
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create Category */
  createCategory?: Maybe<Category>;
  /** Create Category */
  updateCategoryMutation?: Maybe<Category>;
  /** Delete a category with an id */
  deleteCategoryMutation?: Maybe<Category>;
  /** Sign up user */
  signUpUserMutation?: Maybe<Category>;
};

export type MutationCreateCategoryArgs = {
  data?: Maybe<CreateCategoryInput>;
};

export type MutationUpdateCategoryMutationArgs = {
  data?: Maybe<UpdateCategoryInput>;
};

export type MutationDeleteCategoryMutationArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type MutationSignUpUserMutationArgs = {
  data?: Maybe<SignUpUserInut>;
};

/** Posts of the blog */
export type Post = {
  __typename?: 'Post';
  /** id of the post */
  id: Scalars['ID'];
  /** Creation date */
  createdAt?: Maybe<Scalars['DateTime']>;
  /** Update date of the post */
  updatedAt?: Maybe<Scalars['DateTime']>;
  /** Title of post */
  title?: Maybe<Scalars['String']>;
  /** Status of the post, published or not */
  published?: Maybe<Scalars['Boolean']>;
  /** Category of post */
  category?: Maybe<Category>;
  /** id of the category */
  categoryId?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getCategory?: Maybe<Category>;
  getAllCategorys?: Maybe<Array<Maybe<Category>>>;
  getPost?: Maybe<Post>;
  getAllPosts?: Maybe<Array<Maybe<Post>>>;
  GetAllUsers?: Maybe<Array<Maybe<User>>>;
};

export type QueryGetCategoryArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type QueryGetPostArgs = {
  id?: Maybe<Scalars['Int']>;
};

/** Create user input */
export type SignUpUserInut = {
  /** Email of the user. */
  email: Scalars['String'];
  /** Name of the user. */
  name: Scalars['String'];
  /** Password of the user. */
  password: Scalars['String'];
  /** Role of the user, ADMIN or USER */
  role: UserRoleEnum;
};

/** Update category input */
export type UpdateCategoryInput = {
  /** Id of the category. */
  id: Scalars['Int'];
  /** Name of the category. */
  name: Scalars['String'];
};

/** Users of the website */
export type User = {
  __typename?: 'User';
  /** Id of the user */
  id: Scalars['ID'];
  /** Email of the user. */
  email: Scalars['String'];
  /** Name of the user. */
  name: Scalars['String'];
  /** Password of the user. */
  password: Scalars['String'];
  /** Role of the user, ADMIN or USER */
  role: UserRoleEnum;
};

export enum UserRoleEnum {
  User = 'USER',
  Admin = 'ADMIN',
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Post: ResolverTypeWrapper<Post>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Query: ResolverTypeWrapper<{}>;
  SignUpUserInut: SignUpUserInut;
  UpdateCategoryInput: UpdateCategoryInput;
  User: ResolverTypeWrapper<User>;
  UserRoleEnum: UserRoleEnum;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Category: Category;
  ID: Scalars['ID'];
  String: Scalars['String'];
  CreateCategoryInput: CreateCategoryInput;
  DateTime: Scalars['DateTime'];
  Mutation: {};
  Int: Scalars['Int'];
  Post: Post;
  Boolean: Scalars['Boolean'];
  Query: {};
  SignUpUserInut: SignUpUserInut;
  UpdateCategoryInput: UpdateCategoryInput;
  User: User;
}>;

export type CategoryResolvers<
  ContextType = IPrismaContext,
  ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type MutationResolvers<
  ContextType = IPrismaContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateCategoryArgs, never>
  >;
  updateCategoryMutation?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateCategoryMutationArgs, never>
  >;
  deleteCategoryMutation?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteCategoryMutationArgs, never>
  >;
  signUpUserMutation?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<MutationSignUpUserMutationArgs, never>
  >;
}>;

export type PostResolvers<
  ContextType = IPrismaContext,
  ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  createdAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  updatedAt?: Resolver<
    Maybe<ResolversTypes['DateTime']>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  published?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType
  >;
  categoryId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = IPrismaContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  getCategory?: Resolver<
    Maybe<ResolversTypes['Category']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetCategoryArgs, never>
  >;
  getAllCategorys?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Category']>>>,
    ParentType,
    ContextType
  >;
  getPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetPostArgs, never>
  >;
  getAllPosts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType
  >;
  GetAllUsers?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['User']>>>,
    ParentType,
    ContextType
  >;
}>;

export type UserResolvers<
  ContextType = IPrismaContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['UserRoleEnum'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;
