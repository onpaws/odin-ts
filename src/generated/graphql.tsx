import { gql } from 'graphql.macro';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A signed eight-byte integer. The upper big integer values are greater than the max value for a JavaScript number. Therefore all big integers will be output as strings and not numbers. */
  BigInt: any;
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: any;
  /** A point in time as described by the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone. */
  Datetime: any;
  /** A JSON Web Token defined by [RFC 7519](https://tools.ietf.org/html/rfc7519) which securely represents claims between two parties. */
  JwtToken: any;
};

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  readonly __typename?: 'Query';
  /** Exposes the root query type nested one level down. This is helpful for Relay 1 which can only query top level fields if they are in a particular form. */
  readonly query: Query;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  readonly nodeId: Scalars['ID'];
  /** Fetches an object given its globally unique `ID`. */
  readonly node?: Maybe<Node>;
  /** Reads and enables pagination through a set of `Blah`. */
  readonly blahs?: Maybe<BlahsConnection>;
  /** Reads and enables pagination through a set of `Drink`. */
  readonly drinks?: Maybe<DrinksConnection>;
  /** Reads and enables pagination through a set of `FdwBooze`. */
  readonly fdwBoozes?: Maybe<FdwBoozesConnection>;
  /** Reads and enables pagination through a set of `Food`. */
  readonly foods?: Maybe<FoodsConnection>;
  /** Reads and enables pagination through a set of `Person`. */
  readonly people?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `Post`. */
  readonly posts?: Maybe<PostsConnection>;
  readonly blah?: Maybe<Blah>;
  readonly drink?: Maybe<Drink>;
  readonly food?: Maybe<Food>;
  readonly person?: Maybe<Person>;
  readonly post?: Maybe<Post>;
  /** Gets the person who was identified by our JWT */
  readonly currentPerson?: Maybe<Person>;
  /** Reads and enables pagination through a set of `Post`. */
  readonly searchPosts: PostsConnection;
  /** Reads a single `Blah` using its globally unique `ID`. */
  readonly blahByNodeId?: Maybe<Blah>;
  /** Reads a single `Drink` using its globally unique `ID`. */
  readonly drinkByNodeId?: Maybe<Drink>;
  /** Reads a single `Food` using its globally unique `ID`. */
  readonly foodByNodeId?: Maybe<Food>;
  /** Reads a single `Person` using its globally unique `ID`. */
  readonly personByNodeId?: Maybe<Person>;
  /** Reads a single `Post` using its globally unique `ID`. */
  readonly postByNodeId?: Maybe<Post>;
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBlahsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<BlahsOrderBy>>;
  condition?: Maybe<BlahCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDrinksArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<DrinksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFdwBoozesArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FdwBoozesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryFoodsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<FoodsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPeopleArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<PeopleOrderBy>>;
  condition?: Maybe<PersonCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<PostsOrderBy>>;
  condition?: Maybe<PostCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBlahArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDrinkArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFoodArgs = {
  id: Scalars['BigInt'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostArgs = {
  id: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QuerySearchPostsArgs = {
  search?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBlahByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDrinkByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFoodByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByNodeIdArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPostByNodeIdArgs = {
  nodeId: Scalars['ID'];
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
};


/** Methods to use when ordering `Blah`. */
export enum BlahsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Blah` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type BlahCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['Int']>;
};

/** A connection to a list of `Blah` values. */
export type BlahsConnection = {
  readonly __typename?: 'BlahsConnection';
  /** A list of `Blah` objects. */
  readonly nodes: ReadonlyArray<Blah>;
  /** A list of edges which contains the `Blah` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<BlahsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Blah` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

export type Blah = Node & {
  readonly __typename?: 'Blah';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['Int'];
  readonly stuff: Scalars['JSON'];
};


/** A `Blah` edge in the connection. */
export type BlahsEdge = {
  readonly __typename?: 'BlahsEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Blah` at the end of the edge. */
  readonly node: Blah;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  readonly __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['Cursor']>;
};

/** Methods to use when ordering `Drink`. */
export enum DrinksOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Drink` values. */
export type DrinksConnection = {
  readonly __typename?: 'DrinksConnection';
  /** A list of `Drink` objects. */
  readonly nodes: ReadonlyArray<Drink>;
  /** A list of edges which contains the `Drink` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<DrinksEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Drink` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Drink data from Gsheet (materialized view, should be in GraphQL API) */
export type Drink = Node & {
  readonly __typename?: 'Drink';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['BigInt'];
  readonly name?: Maybe<Scalars['String']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly vibe?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly rating?: Maybe<Scalars['String']>;
  readonly price?: Maybe<Scalars['String']>;
  readonly intentToGoBack?: Maybe<Scalars['String']>;
};


/** A `Drink` edge in the connection. */
export type DrinksEdge = {
  readonly __typename?: 'DrinksEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Drink` at the end of the edge. */
  readonly node: Drink;
};

/** Methods to use when ordering `FdwBooze`. */
export enum FdwBoozesOrderBy {
  Natural = 'NATURAL'
}

/** A connection to a list of `FdwBooze` values. */
export type FdwBoozesConnection = {
  readonly __typename?: 'FdwBoozesConnection';
  /** A list of `FdwBooze` objects. */
  readonly nodes: ReadonlyArray<FdwBooze>;
  /** A list of edges which contains the `FdwBooze` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<FdwBoozesEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `FdwBooze` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

export type FdwBooze = {
  readonly __typename?: 'FdwBooze';
  readonly name: Scalars['String'];
  readonly address?: Maybe<Scalars['String']>;
  readonly vibe?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly rating?: Maybe<Scalars['String']>;
  readonly price?: Maybe<Scalars['String']>;
  readonly intentToGoBack?: Maybe<Scalars['String']>;
};

/** A `FdwBooze` edge in the connection. */
export type FdwBoozesEdge = {
  readonly __typename?: 'FdwBoozesEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `FdwBooze` at the end of the edge. */
  readonly node: FdwBooze;
};

/** Methods to use when ordering `Food`. */
export enum FoodsOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A connection to a list of `Food` values. */
export type FoodsConnection = {
  readonly __typename?: 'FoodsConnection';
  /** A list of `Food` objects. */
  readonly nodes: ReadonlyArray<Food>;
  /** A list of edges which contains the `Food` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<FoodsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Food` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** Food data from Gsheet (materialized view, should be in GraphQL API) */
export type Food = Node & {
  readonly __typename?: 'Food';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['BigInt'];
  readonly name?: Maybe<Scalars['String']>;
  readonly address?: Maybe<Scalars['String']>;
  readonly cuisine?: Maybe<Scalars['String']>;
  readonly notes?: Maybe<Scalars['String']>;
  readonly rating?: Maybe<Scalars['String']>;
  readonly price?: Maybe<Scalars['String']>;
  readonly intentToGoBack?: Maybe<Scalars['String']>;
};

/** A `Food` edge in the connection. */
export type FoodsEdge = {
  readonly __typename?: 'FoodsEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Food` at the end of the edge. */
  readonly node: Food;
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
};


/** A connection to a list of `Person` values. */
export type PeopleConnection = {
  readonly __typename?: 'PeopleConnection';
  /** A list of `Person` objects. */
  readonly nodes: ReadonlyArray<Person>;
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PeopleEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Person` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

/** A human user of the app */
export type Person = Node & {
  readonly __typename?: 'Person';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  /** The primary unique identifier for the person. */
  readonly id: Scalars['UUID'];
  /** The person’s first name. */
  readonly firstName: Scalars['String'];
  /** The person’s last name. */
  readonly lastName?: Maybe<Scalars['String']>;
  /** A short description about the user, written by the user. */
  readonly about?: Maybe<Scalars['String']>;
  /** The time this person was created. */
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `Post`. */
  readonly authoredPosts: PostsConnection;
  readonly fullName?: Maybe<Scalars['String']>;
};


/** A human user of the app */
export type PersonAuthoredPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['Cursor']>;
  after?: Maybe<Scalars['Cursor']>;
  orderBy?: Maybe<ReadonlyArray<PostsOrderBy>>;
  condition?: Maybe<PostCondition>;
};


/** Methods to use when ordering `Post`. */
export enum PostsOrderBy {
  Natural = 'NATURAL',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** A condition to be used against `Post` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PostCondition = {
  /** Checks for equality with the object’s `id` field. */
  readonly id?: Maybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `authorId` field. */
  readonly authorId?: Maybe<Scalars['UUID']>;
};

/** A connection to a list of `Post` values. */
export type PostsConnection = {
  readonly __typename?: 'PostsConnection';
  /** A list of `Post` objects. */
  readonly nodes: ReadonlyArray<Post>;
  /** A list of edges which contains the `Post` and cursor to aid in pagination. */
  readonly edges: ReadonlyArray<PostsEdge>;
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** The count of *all* `Post` you could get from the connection. */
  readonly totalCount: Scalars['Int'];
};

export type Post = Node & {
  readonly __typename?: 'Post';
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  readonly nodeId: Scalars['ID'];
  readonly id: Scalars['UUID'];
  readonly headline: Scalars['String'];
  readonly body?: Maybe<Scalars['String']>;
  readonly authorId: Scalars['UUID'];
  readonly createdAt?: Maybe<Scalars['Datetime']>;
  /** Reads a single `Person` that is related to this `Post`. */
  readonly author?: Maybe<Person>;
};

/** A `Post` edge in the connection. */
export type PostsEdge = {
  readonly __typename?: 'PostsEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Post` at the end of the edge. */
  readonly node: Post;
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
  readonly __typename?: 'PeopleEdge';
  /** A cursor for use in pagination. */
  readonly cursor?: Maybe<Scalars['Cursor']>;
  /** The `Person` at the end of the edge. */
  readonly node: Person;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  readonly __typename?: 'Mutation';
  /** Creates a single `Blah`. */
  readonly createBlah?: Maybe<CreateBlahPayload>;
  /** Creates a single `Post`. */
  readonly createPost?: Maybe<CreatePostPayload>;
  /** Updates a single `Blah` using its globally unique id and a patch. */
  readonly updateBlahByNodeId?: Maybe<UpdateBlahPayload>;
  /** Updates a single `Blah` using a unique key and a patch. */
  readonly updateBlah?: Maybe<UpdateBlahPayload>;
  /** Updates a single `Post` using its globally unique id and a patch. */
  readonly updatePostByNodeId?: Maybe<UpdatePostPayload>;
  /** Updates a single `Post` using a unique key and a patch. */
  readonly updatePost?: Maybe<UpdatePostPayload>;
  /** Deletes a single `Blah` using its globally unique id. */
  readonly deleteBlahByNodeId?: Maybe<DeleteBlahPayload>;
  /** Deletes a single `Blah` using a unique key. */
  readonly deleteBlah?: Maybe<DeleteBlahPayload>;
  /** Deletes a single `Post` using its globally unique id. */
  readonly deletePostByNodeId?: Maybe<DeletePostPayload>;
  /** Deletes a single `Post` using a unique key. */
  readonly deletePost?: Maybe<DeletePostPayload>;
  /** Creates a JWT token that will securely identify a person and give them certain permissions. This token expires in 2 days */
  readonly authenticate?: Maybe<AuthenticatePayload>;
  readonly authenticatecookie?: Maybe<AuthenticatecookiePayload>;
  /** Registers a single user and creates an account. */
  readonly registerPerson?: Maybe<RegisterPersonPayload>;
  readonly authenticate2?: Maybe<Scalars['String']>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBlahArgs = {
  input: CreateBlahInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePostArgs = {
  input: CreatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBlahByNodeIdArgs = {
  input: UpdateBlahByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBlahArgs = {
  input: UpdateBlahInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostByNodeIdArgs = {
  input: UpdatePostByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePostArgs = {
  input: UpdatePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBlahByNodeIdArgs = {
  input: DeleteBlahByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBlahArgs = {
  input: DeleteBlahInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostByNodeIdArgs = {
  input: DeletePostByNodeIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePostArgs = {
  input: DeletePostInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticateArgs = {
  input: AuthenticateInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticatecookieArgs = {
  input: AuthenticatecookieInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationRegisterPersonArgs = {
  input: RegisterPersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationAuthenticate2Args = {
  input: AuthenticateInput;
};

/** All input for the create `Blah` mutation. */
export type CreateBlahInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Blah` to be created by this mutation. */
  readonly blah: BlahInput;
};

/** An input for mutations affecting `Blah` */
export type BlahInput = {
  readonly id?: Maybe<Scalars['Int']>;
  readonly stuff: Scalars['JSON'];
};

/** The output of our create `Blah` mutation. */
export type CreateBlahPayload = {
  readonly __typename?: 'CreateBlahPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Blah` that was created by this mutation. */
  readonly blah?: Maybe<Blah>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Blah`. May be used by Relay 1. */
  readonly blahEdge?: Maybe<BlahsEdge>;
};


/** The output of our create `Blah` mutation. */
export type CreateBlahPayloadBlahEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<BlahsOrderBy>>;
};

/** All input for the create `Post` mutation. */
export type CreatePostInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` to be created by this mutation. */
  readonly post: PostInput;
};

/** An input for mutations affecting `Post` */
export type PostInput = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly headline: Scalars['String'];
  readonly body?: Maybe<Scalars['String']>;
  readonly authorId: Scalars['UUID'];
  readonly createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our create `Post` mutation. */
export type CreatePostPayload = {
  readonly __typename?: 'CreatePostPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was created by this mutation. */
  readonly post?: Maybe<Post>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Post`. */
  readonly author?: Maybe<Person>;
  /** An edge for our `Post`. May be used by Relay 1. */
  readonly postEdge?: Maybe<PostsEdge>;
};


/** The output of our create `Post` mutation. */
export type CreatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<PostsOrderBy>>;
};

/** All input for the `updateBlahByNodeId` mutation. */
export type UpdateBlahByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Blah` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Blah` being updated. */
  readonly patch: BlahPatch;
};

/** Represents an update to a `Blah`. Fields that are set will be updated. */
export type BlahPatch = {
  readonly id?: Maybe<Scalars['Int']>;
  readonly stuff?: Maybe<Scalars['JSON']>;
};

/** The output of our update `Blah` mutation. */
export type UpdateBlahPayload = {
  readonly __typename?: 'UpdateBlahPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Blah` that was updated by this mutation. */
  readonly blah?: Maybe<Blah>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Blah`. May be used by Relay 1. */
  readonly blahEdge?: Maybe<BlahsEdge>;
};


/** The output of our update `Blah` mutation. */
export type UpdateBlahPayloadBlahEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<BlahsOrderBy>>;
};

/** All input for the `updateBlah` mutation. */
export type UpdateBlahInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Blah` being updated. */
  readonly patch: BlahPatch;
  readonly id: Scalars['Int'];
};

/** All input for the `updatePostByNodeId` mutation. */
export type UpdatePostByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be updated. */
  readonly nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Post` being updated. */
  readonly patch: PostPatch;
};

/** Represents an update to a `Post`. Fields that are set will be updated. */
export type PostPatch = {
  readonly id?: Maybe<Scalars['UUID']>;
  readonly headline?: Maybe<Scalars['String']>;
  readonly body?: Maybe<Scalars['String']>;
  readonly authorId?: Maybe<Scalars['UUID']>;
  readonly createdAt?: Maybe<Scalars['Datetime']>;
};

/** The output of our update `Post` mutation. */
export type UpdatePostPayload = {
  readonly __typename?: 'UpdatePostPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was updated by this mutation. */
  readonly post?: Maybe<Post>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Post`. */
  readonly author?: Maybe<Person>;
  /** An edge for our `Post`. May be used by Relay 1. */
  readonly postEdge?: Maybe<PostsEdge>;
};


/** The output of our update `Post` mutation. */
export type UpdatePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<PostsOrderBy>>;
};

/** All input for the `updatePost` mutation. */
export type UpdatePostInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Post` being updated. */
  readonly patch: PostPatch;
  readonly id: Scalars['UUID'];
};

/** All input for the `deleteBlahByNodeId` mutation. */
export type DeleteBlahByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Blah` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** The output of our delete `Blah` mutation. */
export type DeleteBlahPayload = {
  readonly __typename?: 'DeleteBlahPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Blah` that was deleted by this mutation. */
  readonly blah?: Maybe<Blah>;
  readonly deletedBlahNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Blah`. May be used by Relay 1. */
  readonly blahEdge?: Maybe<BlahsEdge>;
};


/** The output of our delete `Blah` mutation. */
export type DeleteBlahPayloadBlahEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<BlahsOrderBy>>;
};

/** All input for the `deleteBlah` mutation. */
export type DeleteBlahInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
};

/** All input for the `deletePostByNodeId` mutation. */
export type DeletePostByNodeIdInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Post` to be deleted. */
  readonly nodeId: Scalars['ID'];
};

/** The output of our delete `Post` mutation. */
export type DeletePostPayload = {
  readonly __typename?: 'DeletePostPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  /** The `Post` that was deleted by this mutation. */
  readonly post?: Maybe<Post>;
  readonly deletedPostNodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** Reads a single `Person` that is related to this `Post`. */
  readonly author?: Maybe<Person>;
  /** An edge for our `Post`. May be used by Relay 1. */
  readonly postEdge?: Maybe<PostsEdge>;
};


/** The output of our delete `Post` mutation. */
export type DeletePostPayloadPostEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<PostsOrderBy>>;
};

/** All input for the `deletePost` mutation. */
export type DeletePostInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly id: Scalars['UUID'];
};

/** All input for the `authenticate` mutation. */
export type AuthenticateInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

/** The output of our `authenticate` mutation. */
export type AuthenticatePayload = {
  readonly __typename?: 'AuthenticatePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly jwtToken?: Maybe<Scalars['JwtToken']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
};


/** All input for the `authenticatecookie` mutation. */
export type AuthenticatecookieInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

/** The output of our `authenticatecookie` mutation. */
export type AuthenticatecookiePayload = {
  readonly __typename?: 'AuthenticatecookiePayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly jwtTokens?: Maybe<ReadonlyArray<Maybe<Scalars['JwtToken']>>>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
};

/** All input for the `registerPerson` mutation. */
export type RegisterPersonInput = {
  /** An arbitrary string value with no semantic meaning. Will be included in the payload verbatim. May be used to track mutations by the client. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly firstName: Scalars['String'];
  readonly lastName: Scalars['String'];
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayload = {
  readonly __typename?: 'RegisterPersonPayload';
  /** The exact same `clientMutationId` that was provided in the mutation input, unchanged and unused. May be used by a client to track mutations. */
  readonly clientMutationId?: Maybe<Scalars['String']>;
  readonly person?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  readonly query?: Maybe<Query>;
  /** An edge for our `Person`. May be used by Relay 1. */
  readonly personEdge?: Maybe<PeopleEdge>;
};


/** The output of our `registerPerson` mutation. */
export type RegisterPersonPayloadPersonEdgeArgs = {
  orderBy?: Maybe<ReadonlyArray<PeopleOrderBy>>;
};

export type AuthenticateMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type AuthenticateMutation = { readonly __typename?: 'Mutation', readonly authenticate2?: Maybe<string> };

export type BlahsQueryVariables = Exact<{ [key: string]: never; }>;


export type BlahsQuery = { readonly __typename?: 'Query', readonly blahs?: Maybe<{ readonly __typename?: 'BlahsConnection', readonly edges: ReadonlyArray<{ readonly __typename?: 'BlahsEdge', readonly node: { readonly __typename?: 'Blah', readonly id: number, readonly nodeId: string, readonly stuff: any } }> }> };

export type CurrentPersonQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentPersonQuery = { readonly __typename?: 'Query', readonly currentPerson?: Maybe<{ readonly __typename?: 'Person', readonly id: any }> };

export type FoodsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['Cursor']>;
}>;


export type FoodsQuery = { readonly __typename?: 'Query', readonly foods?: Maybe<{ readonly __typename?: 'FoodsConnection', readonly totalCount: number, readonly edges: ReadonlyArray<{ readonly __typename?: 'FoodsEdge', readonly node: { readonly __typename?: 'Food', readonly id: any, readonly cuisine?: Maybe<string>, readonly address?: Maybe<string>, readonly notes?: Maybe<string>, readonly rating?: Maybe<string>, readonly price?: Maybe<string> } }>, readonly pageInfo: { readonly __typename?: 'PageInfo', readonly hasPreviousPage: boolean, readonly hasNextPage: boolean, readonly startCursor?: Maybe<any>, readonly endCursor?: Maybe<any> } }> };

export const NamePartsFragmentDoc = gql`
    fragment NameParts on Person {
  firstName
  lastName
}
    `;
export const AuthenticateDocument = gql`
    mutation Authenticate($email: String!, $password: String!) {
  authenticate2(input: {email: $email, password: $password})
}
    `;
export type AuthenticateMutationFn = ApolloReactCommon.MutationFunction<AuthenticateMutation, AuthenticateMutationVariables>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateMutation, AuthenticateMutationVariables>) {
        return ApolloReactHooks.useMutation<AuthenticateMutation, AuthenticateMutationVariables>(AuthenticateDocument, baseOptions);
      }
export type AuthenticateMutationHookResult = ReturnType<typeof useAuthenticateMutation>;
export type AuthenticateMutationResult = ApolloReactCommon.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = ApolloReactCommon.BaseMutationOptions<AuthenticateMutation, AuthenticateMutationVariables>;
export const BlahsDocument = gql`
    query Blahs {
  blahs {
    edges {
      node {
        id
        nodeId
        stuff
      }
    }
  }
}
    `;

/**
 * __useBlahsQuery__
 *
 * To run a query within a React component, call `useBlahsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlahsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlahsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlahsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<BlahsQuery, BlahsQueryVariables>) {
        return ApolloReactHooks.useQuery<BlahsQuery, BlahsQueryVariables>(BlahsDocument, baseOptions);
      }
export function useBlahsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BlahsQuery, BlahsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<BlahsQuery, BlahsQueryVariables>(BlahsDocument, baseOptions);
        }
export type BlahsQueryHookResult = ReturnType<typeof useBlahsQuery>;
export type BlahsLazyQueryHookResult = ReturnType<typeof useBlahsLazyQuery>;
export type BlahsQueryResult = ApolloReactCommon.QueryResult<BlahsQuery, BlahsQueryVariables>;
export const CurrentPersonDocument = gql`
    query CurrentPerson {
  currentPerson {
    id
  }
}
    `;

/**
 * __useCurrentPersonQuery__
 *
 * To run a query within a React component, call `useCurrentPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentPersonQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentPersonQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentPersonQuery, CurrentPersonQueryVariables>(CurrentPersonDocument, baseOptions);
      }
export function useCurrentPersonLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentPersonQuery, CurrentPersonQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentPersonQuery, CurrentPersonQueryVariables>(CurrentPersonDocument, baseOptions);
        }
export type CurrentPersonQueryHookResult = ReturnType<typeof useCurrentPersonQuery>;
export type CurrentPersonLazyQueryHookResult = ReturnType<typeof useCurrentPersonLazyQuery>;
export type CurrentPersonQueryResult = ApolloReactCommon.QueryResult<CurrentPersonQuery, CurrentPersonQueryVariables>;
export const FoodsDocument = gql`
    query Foods($first: Int, $cursor: Cursor) {
  foods(first: $first, after: $cursor) {
    totalCount
    edges {
      node {
        id
        cuisine
        address
        notes
        rating
        price
      }
    }
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
  }
}
    `;

/**
 * __useFoodsQuery__
 *
 * To run a query within a React component, call `useFoodsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFoodsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFoodsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useFoodsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
        return ApolloReactHooks.useQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, baseOptions);
      }
export function useFoodsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FoodsQuery, FoodsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FoodsQuery, FoodsQueryVariables>(FoodsDocument, baseOptions);
        }
export type FoodsQueryHookResult = ReturnType<typeof useFoodsQuery>;
export type FoodsLazyQueryHookResult = ReturnType<typeof useFoodsLazyQuery>;
export type FoodsQueryResult = ApolloReactCommon.QueryResult<FoodsQuery, FoodsQueryVariables>;