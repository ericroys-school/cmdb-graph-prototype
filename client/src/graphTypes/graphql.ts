/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A BigInt value up to 64 bits in size, which can be a number or a string if used inline, or a string only if used as a variable. Always returned as a string. */
  BigInt: { input: any; output: any; }
};

export type Application = CiRoot & {
  __typename?: 'Application';
  assetTag?: Maybe<Scalars['String']['output']>;
  buildNumber?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  owner: Array<Person>;
  ownerAggregate?: Maybe<ApplicationPersonOwnerAggregationSelection>;
  ownerConnection: ApplicationOwnerConnection;
  patchNumber?: Maybe<Scalars['String']['output']>;
  runsOnServer: Array<Computer>;
  runsOnServerAggregate?: Maybe<ApplicationComputerRunsOnServerAggregationSelection>;
  runsOnServerConnection: ApplicationRunsOnServerConnection;
  type?: Maybe<Scalars['String']['output']>;
  uses: Array<Product>;
  usesAggregate?: Maybe<ApplicationProductUsesAggregationSelection>;
  usesConnection: ApplicationUsesConnection;
};


export type ApplicationOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type ApplicationOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PersonWhere>;
};


export type ApplicationOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApplicationOwnerConnectionSort>>;
  where?: InputMaybe<ApplicationOwnerConnectionWhere>;
};


export type ApplicationRunsOnServerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type ApplicationRunsOnServerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type ApplicationRunsOnServerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApplicationRunsOnServerConnectionSort>>;
  where?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
};


export type ApplicationUsesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProductOptions>;
  where?: InputMaybe<ProductWhere>;
};


export type ApplicationUsesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductWhere>;
};


export type ApplicationUsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ApplicationUsesConnectionSort>>;
  where?: InputMaybe<ApplicationUsesConnectionWhere>;
};

export type ApplicationAggregateSelection = {
  __typename?: 'ApplicationAggregateSelection';
  assetTag: StringAggregateSelection;
  buildNumber: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
  patchNumber: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type ApplicationComputerRunsOnServerAggregationSelection = {
  __typename?: 'ApplicationComputerRunsOnServerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ApplicationComputerRunsOnServerNodeAggregateSelection>;
};

export type ApplicationComputerRunsOnServerNodeAggregateSelection = {
  __typename?: 'ApplicationComputerRunsOnServerNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type ApplicationConnectInput = {
  owner?: InputMaybe<Array<ApplicationOwnerConnectFieldInput>>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerConnectFieldInput>>;
  uses?: InputMaybe<Array<ApplicationUsesConnectFieldInput>>;
};

export type ApplicationConnectOrCreateInput = {
  owner?: InputMaybe<Array<ApplicationOwnerConnectOrCreateFieldInput>>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerConnectOrCreateFieldInput>>;
  uses?: InputMaybe<Array<ApplicationUsesConnectOrCreateFieldInput>>;
};

export type ApplicationConnectOrCreateWhere = {
  node: ApplicationUniqueWhere;
};

export type ApplicationConnectWhere = {
  node: ApplicationWhere;
};

export type ApplicationCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<ApplicationOwnerFieldInput>;
  patchNumber?: InputMaybe<Scalars['String']['input']>;
  runsOnServer?: InputMaybe<ApplicationRunsOnServerFieldInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  uses?: InputMaybe<ApplicationUsesFieldInput>;
};

export type ApplicationDeleteInput = {
  owner?: InputMaybe<Array<ApplicationOwnerDeleteFieldInput>>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerDeleteFieldInput>>;
  uses?: InputMaybe<Array<ApplicationUsesDeleteFieldInput>>;
};

export type ApplicationDisconnectInput = {
  owner?: InputMaybe<Array<ApplicationOwnerDisconnectFieldInput>>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerDisconnectFieldInput>>;
  uses?: InputMaybe<Array<ApplicationUsesDisconnectFieldInput>>;
};

export type ApplicationEdge = {
  __typename?: 'ApplicationEdge';
  cursor: Scalars['String']['output'];
  node: Application;
};

export type ApplicationOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  patchNumber?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type ApplicationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ApplicationSort objects to sort Applications by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ApplicationSort>>;
};

export type ApplicationOwnerAggregateInput = {
  AND?: InputMaybe<Array<ApplicationOwnerAggregateInput>>;
  NOT?: InputMaybe<ApplicationOwnerAggregateInput>;
  OR?: InputMaybe<Array<ApplicationOwnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ApplicationOwnerNodeAggregationWhereInput>;
};

export type ApplicationOwnerConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type ApplicationOwnerConnectOrCreateFieldInput = {
  onCreate: ApplicationOwnerConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type ApplicationOwnerConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type ApplicationOwnerConnection = {
  __typename?: 'ApplicationOwnerConnection';
  edges: Array<ApplicationOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ApplicationOwnerConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type ApplicationOwnerConnectionWhere = {
  AND?: InputMaybe<Array<ApplicationOwnerConnectionWhere>>;
  NOT?: InputMaybe<ApplicationOwnerConnectionWhere>;
  OR?: InputMaybe<Array<ApplicationOwnerConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type ApplicationOwnerCreateFieldInput = {
  node: PersonCreateInput;
};

export type ApplicationOwnerDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<ApplicationOwnerConnectionWhere>;
};

export type ApplicationOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<ApplicationOwnerConnectionWhere>;
};

export type ApplicationOwnerFieldInput = {
  connect?: InputMaybe<Array<ApplicationOwnerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationOwnerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationOwnerCreateFieldInput>>;
};

export type ApplicationOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApplicationOwnerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ApplicationOwnerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ApplicationOwnerNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  midddleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ApplicationOwnerRelationship = {
  __typename?: 'ApplicationOwnerRelationship';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type ApplicationOwnerUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type ApplicationOwnerUpdateFieldInput = {
  connect?: InputMaybe<Array<ApplicationOwnerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationOwnerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationOwnerCreateFieldInput>>;
  delete?: InputMaybe<Array<ApplicationOwnerDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ApplicationOwnerDisconnectFieldInput>>;
  update?: InputMaybe<ApplicationOwnerUpdateConnectionInput>;
  where?: InputMaybe<ApplicationOwnerConnectionWhere>;
};

export type ApplicationPersonOwnerAggregationSelection = {
  __typename?: 'ApplicationPersonOwnerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ApplicationPersonOwnerNodeAggregateSelection>;
};

export type ApplicationPersonOwnerNodeAggregateSelection = {
  __typename?: 'ApplicationPersonOwnerNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  firstName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  lastName: StringAggregateSelection;
  midddleName: StringAggregateSelection;
};

export type ApplicationProductUsesAggregationSelection = {
  __typename?: 'ApplicationProductUsesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ApplicationProductUsesNodeAggregateSelection>;
};

export type ApplicationProductUsesNodeAggregateSelection = {
  __typename?: 'ApplicationProductUsesNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  installLocation: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  licenseType: StringAggregateSelection;
  name: StringAggregateSelection;
  productType: StringAggregateSelection;
  version: StringAggregateSelection;
};

export type ApplicationRelationInput = {
  owner?: InputMaybe<Array<ApplicationOwnerCreateFieldInput>>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerCreateFieldInput>>;
  uses?: InputMaybe<Array<ApplicationUsesCreateFieldInput>>;
};

export type ApplicationRunsOnServerAggregateInput = {
  AND?: InputMaybe<Array<ApplicationRunsOnServerAggregateInput>>;
  NOT?: InputMaybe<ApplicationRunsOnServerAggregateInput>;
  OR?: InputMaybe<Array<ApplicationRunsOnServerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ApplicationRunsOnServerNodeAggregationWhereInput>;
};

export type ApplicationRunsOnServerConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type ApplicationRunsOnServerConnectOrCreateFieldInput = {
  onCreate: ApplicationRunsOnServerConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type ApplicationRunsOnServerConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type ApplicationRunsOnServerConnection = {
  __typename?: 'ApplicationRunsOnServerConnection';
  edges: Array<ApplicationRunsOnServerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ApplicationRunsOnServerConnectionSort = {
  node?: InputMaybe<ComputerSort>;
};

export type ApplicationRunsOnServerConnectionWhere = {
  AND?: InputMaybe<Array<ApplicationRunsOnServerConnectionWhere>>;
  NOT?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
  OR?: InputMaybe<Array<ApplicationRunsOnServerConnectionWhere>>;
  node?: InputMaybe<ComputerWhere>;
};

export type ApplicationRunsOnServerCreateFieldInput = {
  node: ComputerCreateInput;
};

export type ApplicationRunsOnServerDeleteFieldInput = {
  delete?: InputMaybe<ComputerDeleteInput>;
  where?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
};

export type ApplicationRunsOnServerDisconnectFieldInput = {
  disconnect?: InputMaybe<ComputerDisconnectInput>;
  where?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
};

export type ApplicationRunsOnServerFieldInput = {
  connect?: InputMaybe<Array<ApplicationRunsOnServerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationRunsOnServerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationRunsOnServerCreateFieldInput>>;
};

export type ApplicationRunsOnServerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApplicationRunsOnServerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ApplicationRunsOnServerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ApplicationRunsOnServerNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ApplicationRunsOnServerRelationship = {
  __typename?: 'ApplicationRunsOnServerRelationship';
  cursor: Scalars['String']['output'];
  node: Computer;
};

export type ApplicationRunsOnServerUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type ApplicationRunsOnServerUpdateFieldInput = {
  connect?: InputMaybe<Array<ApplicationRunsOnServerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationRunsOnServerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationRunsOnServerCreateFieldInput>>;
  delete?: InputMaybe<Array<ApplicationRunsOnServerDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ApplicationRunsOnServerDisconnectFieldInput>>;
  update?: InputMaybe<ApplicationRunsOnServerUpdateConnectionInput>;
  where?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
};

/** Fields to sort Applications by. The order in which sorts are applied is not guaranteed when specifying many fields in one ApplicationSort object. */
export type ApplicationSort = {
  assetTag?: InputMaybe<SortDirection>;
  buildNumber?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  patchNumber?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type ApplicationUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type ApplicationUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Array<ApplicationOwnerUpdateFieldInput>>;
  patchNumber?: InputMaybe<Scalars['String']['input']>;
  runsOnServer?: InputMaybe<Array<ApplicationRunsOnServerUpdateFieldInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
  uses?: InputMaybe<Array<ApplicationUsesUpdateFieldInput>>;
};

export type ApplicationUsesAggregateInput = {
  AND?: InputMaybe<Array<ApplicationUsesAggregateInput>>;
  NOT?: InputMaybe<ApplicationUsesAggregateInput>;
  OR?: InputMaybe<Array<ApplicationUsesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ApplicationUsesNodeAggregationWhereInput>;
};

export type ApplicationUsesConnectFieldInput = {
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProductConnectWhere>;
};

export type ApplicationUsesConnectOrCreateFieldInput = {
  onCreate: ApplicationUsesConnectOrCreateFieldInputOnCreate;
  where: ProductConnectOrCreateWhere;
};

export type ApplicationUsesConnectOrCreateFieldInputOnCreate = {
  node: ProductOnCreateInput;
};

export type ApplicationUsesConnection = {
  __typename?: 'ApplicationUsesConnection';
  edges: Array<ApplicationUsesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ApplicationUsesConnectionSort = {
  node?: InputMaybe<ProductSort>;
};

export type ApplicationUsesConnectionWhere = {
  AND?: InputMaybe<Array<ApplicationUsesConnectionWhere>>;
  NOT?: InputMaybe<ApplicationUsesConnectionWhere>;
  OR?: InputMaybe<Array<ApplicationUsesConnectionWhere>>;
  node?: InputMaybe<ProductWhere>;
};

export type ApplicationUsesCreateFieldInput = {
  node: ProductCreateInput;
};

export type ApplicationUsesDeleteFieldInput = {
  delete?: InputMaybe<ProductDeleteInput>;
  where?: InputMaybe<ApplicationUsesConnectionWhere>;
};

export type ApplicationUsesDisconnectFieldInput = {
  disconnect?: InputMaybe<ProductDisconnectInput>;
  where?: InputMaybe<ApplicationUsesConnectionWhere>;
};

export type ApplicationUsesFieldInput = {
  connect?: InputMaybe<Array<ApplicationUsesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationUsesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationUsesCreateFieldInput>>;
};

export type ApplicationUsesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ApplicationUsesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ApplicationUsesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ApplicationUsesNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  installLocation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  licenseType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  productType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  productType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  version_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  version_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ApplicationUsesRelationship = {
  __typename?: 'ApplicationUsesRelationship';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ApplicationUsesUpdateConnectionInput = {
  node?: InputMaybe<ProductUpdateInput>;
};

export type ApplicationUsesUpdateFieldInput = {
  connect?: InputMaybe<Array<ApplicationUsesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ApplicationUsesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ApplicationUsesCreateFieldInput>>;
  delete?: InputMaybe<Array<ApplicationUsesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ApplicationUsesDisconnectFieldInput>>;
  update?: InputMaybe<ApplicationUsesUpdateConnectionInput>;
  where?: InputMaybe<ApplicationUsesConnectionWhere>;
};

export type ApplicationWhere = {
  AND?: InputMaybe<Array<ApplicationWhere>>;
  NOT?: InputMaybe<ApplicationWhere>;
  OR?: InputMaybe<Array<ApplicationWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  buildNumber?: InputMaybe<Scalars['String']['input']>;
  buildNumber_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  buildNumber_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  buildNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  buildNumber_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  ownerAggregate?: InputMaybe<ApplicationOwnerAggregateInput>;
  /** Return Applications where all of the related ApplicationOwnerConnections match this filter */
  ownerConnection_ALL?: InputMaybe<ApplicationOwnerConnectionWhere>;
  /** Return Applications where none of the related ApplicationOwnerConnections match this filter */
  ownerConnection_NONE?: InputMaybe<ApplicationOwnerConnectionWhere>;
  /** Return Applications where one of the related ApplicationOwnerConnections match this filter */
  ownerConnection_SINGLE?: InputMaybe<ApplicationOwnerConnectionWhere>;
  /** Return Applications where some of the related ApplicationOwnerConnections match this filter */
  ownerConnection_SOME?: InputMaybe<ApplicationOwnerConnectionWhere>;
  /** Return Applications where all of the related People match this filter */
  owner_ALL?: InputMaybe<PersonWhere>;
  /** Return Applications where none of the related People match this filter */
  owner_NONE?: InputMaybe<PersonWhere>;
  /** Return Applications where one of the related People match this filter */
  owner_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Applications where some of the related People match this filter */
  owner_SOME?: InputMaybe<PersonWhere>;
  patchNumber?: InputMaybe<Scalars['String']['input']>;
  patchNumber_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  patchNumber_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  patchNumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  patchNumber_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  runsOnServerAggregate?: InputMaybe<ApplicationRunsOnServerAggregateInput>;
  /** Return Applications where all of the related ApplicationRunsOnServerConnections match this filter */
  runsOnServerConnection_ALL?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
  /** Return Applications where none of the related ApplicationRunsOnServerConnections match this filter */
  runsOnServerConnection_NONE?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
  /** Return Applications where one of the related ApplicationRunsOnServerConnections match this filter */
  runsOnServerConnection_SINGLE?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
  /** Return Applications where some of the related ApplicationRunsOnServerConnections match this filter */
  runsOnServerConnection_SOME?: InputMaybe<ApplicationRunsOnServerConnectionWhere>;
  /** Return Applications where all of the related Computers match this filter */
  runsOnServer_ALL?: InputMaybe<ComputerWhere>;
  /** Return Applications where none of the related Computers match this filter */
  runsOnServer_NONE?: InputMaybe<ComputerWhere>;
  /** Return Applications where one of the related Computers match this filter */
  runsOnServer_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Applications where some of the related Computers match this filter */
  runsOnServer_SOME?: InputMaybe<ComputerWhere>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  usesAggregate?: InputMaybe<ApplicationUsesAggregateInput>;
  /** Return Applications where all of the related ApplicationUsesConnections match this filter */
  usesConnection_ALL?: InputMaybe<ApplicationUsesConnectionWhere>;
  /** Return Applications where none of the related ApplicationUsesConnections match this filter */
  usesConnection_NONE?: InputMaybe<ApplicationUsesConnectionWhere>;
  /** Return Applications where one of the related ApplicationUsesConnections match this filter */
  usesConnection_SINGLE?: InputMaybe<ApplicationUsesConnectionWhere>;
  /** Return Applications where some of the related ApplicationUsesConnections match this filter */
  usesConnection_SOME?: InputMaybe<ApplicationUsesConnectionWhere>;
  /** Return Applications where all of the related Products match this filter */
  uses_ALL?: InputMaybe<ProductWhere>;
  /** Return Applications where none of the related Products match this filter */
  uses_NONE?: InputMaybe<ProductWhere>;
  /** Return Applications where one of the related Products match this filter */
  uses_SINGLE?: InputMaybe<ProductWhere>;
  /** Return Applications where some of the related Products match this filter */
  uses_SOME?: InputMaybe<ProductWhere>;
};

export type ApplicationsConnection = {
  __typename?: 'ApplicationsConnection';
  edges: Array<ApplicationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type BigIntAggregateSelection = {
  __typename?: 'BigIntAggregateSelection';
  average?: Maybe<Scalars['BigInt']['output']>;
  max?: Maybe<Scalars['BigInt']['output']>;
  min?: Maybe<Scalars['BigInt']['output']>;
  sum?: Maybe<Scalars['BigInt']['output']>;
};

export type Cpu = CiRoot & Component & {
  __typename?: 'CPU';
  architecture?: Maybe<Scalars['String']['output']>;
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  numCores?: Maybe<Scalars['Int']['output']>;
  partOf: Array<Computer>;
  partOfAggregate?: Maybe<CpuComputerPartOfAggregationSelection>;
  partOfConnection: ComponentPartOfConnection;
  processorFamily?: Maybe<Scalars['String']['output']>;
  speed?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


export type CpuPartOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type CpuPartOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type CpuPartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type CpuAggregateSelection = {
  __typename?: 'CPUAggregateSelection';
  architecture: StringAggregateSelection;
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  numCores: IntAggregateSelection;
  processorFamily: StringAggregateSelection;
  speed: IntAggregateSelection;
  type: StringAggregateSelection;
};

export type CpuComputerPartOfAggregationSelection = {
  __typename?: 'CPUComputerPartOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CpuComputerPartOfNodeAggregateSelection>;
};

export type CpuComputerPartOfNodeAggregateSelection = {
  __typename?: 'CPUComputerPartOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type CpuConnectInput = {
  partOf?: InputMaybe<Array<CpuPartOfConnectFieldInput>>;
};

export type CpuConnectOrCreateInput = {
  partOf?: InputMaybe<Array<CpuPartOfConnectOrCreateFieldInput>>;
};

export type CpuCreateInput = {
  architecture?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  numCores?: InputMaybe<Scalars['Int']['input']>;
  partOf?: InputMaybe<CpuPartOfFieldInput>;
  processorFamily?: InputMaybe<Scalars['String']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CpuDeleteInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
};

export type CpuDisconnectInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
};

export type CpuEdge = {
  __typename?: 'CPUEdge';
  cursor: Scalars['String']['output'];
  node: Cpu;
};

export type CpuOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CPUSort objects to sort Cpus by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CpuSort>>;
};

export type CpuPartOfAggregateInput = {
  AND?: InputMaybe<Array<CpuPartOfAggregateInput>>;
  NOT?: InputMaybe<CpuPartOfAggregateInput>;
  OR?: InputMaybe<Array<CpuPartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CpuPartOfNodeAggregationWhereInput>;
};

export type CpuPartOfConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type CpuPartOfConnectOrCreateFieldInput = {
  onCreate: CpuPartOfConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type CpuPartOfConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type CpuPartOfCreateFieldInput = {
  node: ComputerCreateInput;
};

export type CpuPartOfFieldInput = {
  connect?: InputMaybe<Array<CpuPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CpuPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CpuPartOfCreateFieldInput>>;
};

export type CpuPartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CpuPartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CpuPartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CpuPartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CpuPartOfUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type CpuPartOfUpdateFieldInput = {
  connect?: InputMaybe<Array<CpuPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CpuPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CpuPartOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
  update?: InputMaybe<CpuPartOfUpdateConnectionInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type CpuRelationInput = {
  partOf?: InputMaybe<Array<CpuPartOfCreateFieldInput>>;
};

/** Fields to sort Cpus by. The order in which sorts are applied is not guaranteed when specifying many fields in one CPUSort object. */
export type CpuSort = {
  architecture?: InputMaybe<SortDirection>;
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  numCores?: InputMaybe<SortDirection>;
  processorFamily?: InputMaybe<SortDirection>;
  speed?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type CpuUpdateInput = {
  architecture?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  numCores?: InputMaybe<Scalars['Int']['input']>;
  numCores_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  numCores_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  partOf?: InputMaybe<Array<CpuPartOfUpdateFieldInput>>;
  processorFamily?: InputMaybe<Scalars['String']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
  speed_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  speed_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CpuWhere = {
  AND?: InputMaybe<Array<CpuWhere>>;
  NOT?: InputMaybe<CpuWhere>;
  OR?: InputMaybe<Array<CpuWhere>>;
  architecture?: InputMaybe<Scalars['String']['input']>;
  architecture_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  architecture_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  architecture_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  architecture_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  numCores?: InputMaybe<Scalars['Int']['input']>;
  numCores_GT?: InputMaybe<Scalars['Int']['input']>;
  numCores_GTE?: InputMaybe<Scalars['Int']['input']>;
  numCores_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  numCores_LT?: InputMaybe<Scalars['Int']['input']>;
  numCores_LTE?: InputMaybe<Scalars['Int']['input']>;
  partOfAggregate?: InputMaybe<CpuPartOfAggregateInput>;
  /** Return CPUS where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return CPUS where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return CPUS where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return CPUS where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return CPUS where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return CPUS where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return CPUS where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return CPUS where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  processorFamily?: InputMaybe<Scalars['String']['input']>;
  processorFamily_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  processorFamily_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  processorFamily_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  processorFamily_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  speed?: InputMaybe<Scalars['Int']['input']>;
  speed_GT?: InputMaybe<Scalars['Int']['input']>;
  speed_GTE?: InputMaybe<Scalars['Int']['input']>;
  speed_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  speed_LT?: InputMaybe<Scalars['Int']['input']>;
  speed_LTE?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type CiRoot = {
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
};

export type CiRootAggregateSelection = {
  __typename?: 'CiRootAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
};

export type CiRootConnectWhere = {
  node: CiRootWhere;
};

export type CiRootCreateInput = {
  Application?: InputMaybe<ApplicationCreateInput>;
  CPU?: InputMaybe<CpuCreateInput>;
  Company?: InputMaybe<CompanyCreateInput>;
  Computer?: InputMaybe<ComputerCreateInput>;
  DatabaseInstance?: InputMaybe<DatabaseInstanceCreateInput>;
  Department?: InputMaybe<DepartmentCreateInput>;
  IP?: InputMaybe<IpCreateInput>;
  Location?: InputMaybe<LocationCreateInput>;
  Memory?: InputMaybe<MemoryCreateInput>;
  OperatingSystem?: InputMaybe<OperatingSystemCreateInput>;
  Organization?: InputMaybe<OrganizationCreateInput>;
  Person?: InputMaybe<PersonCreateInput>;
  Product?: InputMaybe<ProductCreateInput>;
  Storage?: InputMaybe<StorageCreateInput>;
};

export type CiRootEdge = {
  __typename?: 'CiRootEdge';
  cursor: Scalars['String']['output'];
  node: CiRoot;
};

export enum CiRootImplementation {
  Application = 'Application',
  Cpu = 'CPU',
  Company = 'Company',
  Computer = 'Computer',
  DatabaseInstance = 'DatabaseInstance',
  Department = 'Department',
  Ip = 'IP',
  Location = 'Location',
  Memory = 'Memory',
  OperatingSystem = 'OperatingSystem',
  Organization = 'Organization',
  Person = 'Person',
  Product = 'Product',
  Storage = 'Storage'
}

export type CiRootOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CiRootSort objects to sort CiRoots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<CiRootSort>>>;
};

/** Fields to sort CiRoots by. The order in which sorts are applied is not guaranteed when specifying many fields in one CiRootSort object. */
export type CiRootSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
};

export type CiRootUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CiRootWhere = {
  AND?: InputMaybe<Array<CiRootWhere>>;
  NOT?: InputMaybe<CiRootWhere>;
  OR?: InputMaybe<Array<CiRootWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  typename_IN?: InputMaybe<Array<CiRootImplementation>>;
};

export type CiRootsConnection = {
  __typename?: 'CiRootsConnection';
  edges: Array<CiRootEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompaniesConnection = {
  __typename?: 'CompaniesConnection';
  edges: Array<CompanyEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Company = CiRoot & {
  __typename?: 'Company';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  organization: Array<Organization>;
  organizationAggregate?: Maybe<CompanyOrganizationOrganizationAggregationSelection>;
  organizationConnection: CompanyOrganizationConnection;
  type?: Maybe<Scalars['String']['output']>;
};


export type CompanyOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type CompanyOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type CompanyOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<CompanyOrganizationConnectionSort>>;
  where?: InputMaybe<CompanyOrganizationConnectionWhere>;
};

export type CompanyAggregateSelection = {
  __typename?: 'CompanyAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type CompanyConnectInput = {
  organization?: InputMaybe<Array<CompanyOrganizationConnectFieldInput>>;
};

export type CompanyConnectOrCreateInput = {
  organization?: InputMaybe<Array<CompanyOrganizationConnectOrCreateFieldInput>>;
};

export type CompanyConnectOrCreateWhere = {
  node: CompanyUniqueWhere;
};

export type CompanyConnectWhere = {
  node: CompanyWhere;
};

export type CompanyCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organization?: InputMaybe<CompanyOrganizationFieldInput>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyDeleteInput = {
  organization?: InputMaybe<Array<CompanyOrganizationDeleteFieldInput>>;
};

export type CompanyDisconnectInput = {
  organization?: InputMaybe<Array<CompanyOrganizationDisconnectFieldInput>>;
};

export type CompanyEdge = {
  __typename?: 'CompanyEdge';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type CompanyOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more CompanySort objects to sort Companies by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CompanySort>>;
};

export type CompanyOrganizationAggregateInput = {
  AND?: InputMaybe<Array<CompanyOrganizationAggregateInput>>;
  NOT?: InputMaybe<CompanyOrganizationAggregateInput>;
  OR?: InputMaybe<Array<CompanyOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<CompanyOrganizationNodeAggregationWhereInput>;
};

export type CompanyOrganizationConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type CompanyOrganizationConnectOrCreateFieldInput = {
  onCreate: CompanyOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type CompanyOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type CompanyOrganizationConnection = {
  __typename?: 'CompanyOrganizationConnection';
  edges: Array<CompanyOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CompanyOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type CompanyOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<CompanyOrganizationConnectionWhere>>;
  NOT?: InputMaybe<CompanyOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<CompanyOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type CompanyOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type CompanyOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<CompanyOrganizationConnectionWhere>;
};

export type CompanyOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<CompanyOrganizationConnectionWhere>;
};

export type CompanyOrganizationFieldInput = {
  connect?: InputMaybe<Array<CompanyOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyOrganizationCreateFieldInput>>;
};

export type CompanyOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<CompanyOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<CompanyOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<CompanyOrganizationNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type CompanyOrganizationOrganizationAggregationSelection = {
  __typename?: 'CompanyOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<CompanyOrganizationOrganizationNodeAggregateSelection>;
};

export type CompanyOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'CompanyOrganizationOrganizationNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type CompanyOrganizationRelationship = {
  __typename?: 'CompanyOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type CompanyOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type CompanyOrganizationUpdateFieldInput = {
  connect?: InputMaybe<Array<CompanyOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<CompanyOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<CompanyOrganizationCreateFieldInput>>;
  delete?: InputMaybe<Array<CompanyOrganizationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<CompanyOrganizationDisconnectFieldInput>>;
  update?: InputMaybe<CompanyOrganizationUpdateConnectionInput>;
  where?: InputMaybe<CompanyOrganizationConnectionWhere>;
};

export type CompanyRelationInput = {
  organization?: InputMaybe<Array<CompanyOrganizationCreateFieldInput>>;
};

/** Fields to sort Companies by. The order in which sorts are applied is not guaranteed when specifying many fields in one CompanySort object. */
export type CompanySort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  type?: InputMaybe<SortDirection>;
};

export type CompanyUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Array<CompanyOrganizationUpdateFieldInput>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CompanyWhere = {
  AND?: InputMaybe<Array<CompanyWhere>>;
  NOT?: InputMaybe<CompanyWhere>;
  OR?: InputMaybe<Array<CompanyWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organizationAggregate?: InputMaybe<CompanyOrganizationAggregateInput>;
  /** Return Companies where all of the related CompanyOrganizationConnections match this filter */
  organizationConnection_ALL?: InputMaybe<CompanyOrganizationConnectionWhere>;
  /** Return Companies where none of the related CompanyOrganizationConnections match this filter */
  organizationConnection_NONE?: InputMaybe<CompanyOrganizationConnectionWhere>;
  /** Return Companies where one of the related CompanyOrganizationConnections match this filter */
  organizationConnection_SINGLE?: InputMaybe<CompanyOrganizationConnectionWhere>;
  /** Return Companies where some of the related CompanyOrganizationConnections match this filter */
  organizationConnection_SOME?: InputMaybe<CompanyOrganizationConnectionWhere>;
  /** Return Companies where all of the related Organizations match this filter */
  organization_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Companies where none of the related Organizations match this filter */
  organization_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Companies where one of the related Organizations match this filter */
  organization_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Companies where some of the related Organizations match this filter */
  organization_SOME?: InputMaybe<OrganizationWhere>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Component = {
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  partOf: Array<Computer>;
  partOfConnection: ComponentPartOfConnection;
};


export type ComponentPartOfArgs = {
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type ComponentPartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type ComponentAggregateSelection = {
  __typename?: 'ComponentAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
};

export type ComponentEdge = {
  __typename?: 'ComponentEdge';
  cursor: Scalars['String']['output'];
  node: Component;
};

export enum ComponentImplementation {
  Cpu = 'CPU',
  Memory = 'Memory',
  OperatingSystem = 'OperatingSystem',
  Product = 'Product',
  Storage = 'Storage'
}

export type ComponentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ComponentSort objects to sort Components by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ComponentSort>>>;
};

export type ComponentPartOfAggregateInput = {
  AND?: InputMaybe<Array<ComponentPartOfAggregateInput>>;
  NOT?: InputMaybe<ComponentPartOfAggregateInput>;
  OR?: InputMaybe<Array<ComponentPartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ComponentPartOfNodeAggregationWhereInput>;
};

export type ComponentPartOfConnection = {
  __typename?: 'ComponentPartOfConnection';
  edges: Array<ComponentPartOfRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComponentPartOfConnectionSort = {
  node?: InputMaybe<ComputerSort>;
};

export type ComponentPartOfConnectionWhere = {
  AND?: InputMaybe<Array<ComponentPartOfConnectionWhere>>;
  NOT?: InputMaybe<ComponentPartOfConnectionWhere>;
  OR?: InputMaybe<Array<ComponentPartOfConnectionWhere>>;
  node?: InputMaybe<ComputerWhere>;
};

export type ComponentPartOfDeleteFieldInput = {
  delete?: InputMaybe<ComputerDeleteInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type ComponentPartOfDisconnectFieldInput = {
  disconnect?: InputMaybe<ComputerDisconnectInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type ComponentPartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComponentPartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ComponentPartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ComponentPartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ComponentPartOfRelationship = {
  __typename?: 'ComponentPartOfRelationship';
  cursor: Scalars['String']['output'];
  node: Computer;
};

/** Fields to sort Components by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComponentSort object. */
export type ComponentSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
};

export type ComponentWhere = {
  AND?: InputMaybe<Array<ComponentWhere>>;
  NOT?: InputMaybe<ComponentWhere>;
  OR?: InputMaybe<Array<ComponentWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  partOfAggregate?: InputMaybe<ComponentPartOfAggregateInput>;
  /** Return Components where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Components where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Components where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Components where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Components where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return Components where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return Components where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Components where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  typename_IN?: InputMaybe<Array<ComponentImplementation>>;
};

export type ComponentsConnection = {
  __typename?: 'ComponentsConnection';
  edges: Array<ComponentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Computer = CiRoot & Device & {
  __typename?: 'Computer';
  assetTag?: Maybe<Scalars['String']['output']>;
  connectsOn: Array<Ip>;
  connectsOnAggregate?: Maybe<ComputerIpConnectsOnAggregationSelection>;
  connectsOnConnection: DeviceConnectsOnConnection;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  isVirtual?: Maybe<Scalars['Boolean']['output']>;
  memory?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
  runsApplication: Array<Application>;
  runsApplicationAggregate?: Maybe<ComputerApplicationRunsApplicationAggregationSelection>;
  runsApplicationConnection: ComputerRunsApplicationConnection;
};


export type ComputerConnectsOnArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<IpOptions>;
  where?: InputMaybe<IpWhere>;
};


export type ComputerConnectsOnAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<IpWhere>;
};


export type ComputerConnectsOnConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DeviceConnectsOnConnectionSort>>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};


export type ComputerRunsApplicationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ApplicationOptions>;
  where?: InputMaybe<ApplicationWhere>;
};


export type ComputerRunsApplicationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ApplicationWhere>;
};


export type ComputerRunsApplicationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComputerRunsApplicationConnectionSort>>;
  where?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
};

export type ComputerAggregateSelection = {
  __typename?: 'ComputerAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type ComputerApplicationRunsApplicationAggregationSelection = {
  __typename?: 'ComputerApplicationRunsApplicationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ComputerApplicationRunsApplicationNodeAggregateSelection>;
};

export type ComputerApplicationRunsApplicationNodeAggregateSelection = {
  __typename?: 'ComputerApplicationRunsApplicationNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  buildNumber: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
  patchNumber: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type ComputerConnectInput = {
  connectsOn?: InputMaybe<Array<ComputerConnectsOnConnectFieldInput>>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationConnectFieldInput>>;
};

export type ComputerConnectOrCreateInput = {
  connectsOn?: InputMaybe<Array<ComputerConnectsOnConnectOrCreateFieldInput>>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationConnectOrCreateFieldInput>>;
};

export type ComputerConnectOrCreateWhere = {
  node: ComputerUniqueWhere;
};

export type ComputerConnectWhere = {
  node: ComputerWhere;
};

export type ComputerConnectsOnAggregateInput = {
  AND?: InputMaybe<Array<ComputerConnectsOnAggregateInput>>;
  NOT?: InputMaybe<ComputerConnectsOnAggregateInput>;
  OR?: InputMaybe<Array<ComputerConnectsOnAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ComputerConnectsOnNodeAggregationWhereInput>;
};

export type ComputerConnectsOnConnectFieldInput = {
  connect?: InputMaybe<Array<IpConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<IpConnectWhere>;
};

export type ComputerConnectsOnConnectOrCreateFieldInput = {
  onCreate: ComputerConnectsOnConnectOrCreateFieldInputOnCreate;
  where: IpConnectOrCreateWhere;
};

export type ComputerConnectsOnConnectOrCreateFieldInputOnCreate = {
  node: IpOnCreateInput;
};

export type ComputerConnectsOnCreateFieldInput = {
  node: IpCreateInput;
};

export type ComputerConnectsOnFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectsOnConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ComputerConnectsOnConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ComputerConnectsOnCreateFieldInput>>;
};

export type ComputerConnectsOnNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComputerConnectsOnNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ComputerConnectsOnNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ComputerConnectsOnNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  port_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ComputerConnectsOnUpdateConnectionInput = {
  node?: InputMaybe<IpUpdateInput>;
};

export type ComputerConnectsOnUpdateFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectsOnConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ComputerConnectsOnConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ComputerConnectsOnCreateFieldInput>>;
  delete?: InputMaybe<Array<DeviceConnectsOnDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DeviceConnectsOnDisconnectFieldInput>>;
  update?: InputMaybe<ComputerConnectsOnUpdateConnectionInput>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};

export type ComputerCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  connectsOn?: InputMaybe<ComputerConnectsOnFieldInput>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
  runsApplication?: InputMaybe<ComputerRunsApplicationFieldInput>;
};

export type ComputerDeleteInput = {
  connectsOn?: InputMaybe<Array<DeviceConnectsOnDeleteFieldInput>>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationDeleteFieldInput>>;
};

export type ComputerDisconnectInput = {
  connectsOn?: InputMaybe<Array<DeviceConnectsOnDisconnectFieldInput>>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationDisconnectFieldInput>>;
};

export type ComputerEdge = {
  __typename?: 'ComputerEdge';
  cursor: Scalars['String']['output'];
  node: Computer;
};

export type ComputerIpConnectsOnAggregationSelection = {
  __typename?: 'ComputerIPConnectsOnAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ComputerIpConnectsOnNodeAggregateSelection>;
};

export type ComputerIpConnectsOnNodeAggregateSelection = {
  __typename?: 'ComputerIPConnectsOnNodeAggregateSelection';
  address: StringAggregateSelection;
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  port: IntAggregateSelection;
};

export type ComputerOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  name: Scalars['String']['input'];
};

export type ComputerOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ComputerSort objects to sort Computers by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ComputerSort>>;
};

export type ComputerRelationInput = {
  connectsOn?: InputMaybe<Array<ComputerConnectsOnCreateFieldInput>>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationCreateFieldInput>>;
};

export type ComputerRunsApplicationAggregateInput = {
  AND?: InputMaybe<Array<ComputerRunsApplicationAggregateInput>>;
  NOT?: InputMaybe<ComputerRunsApplicationAggregateInput>;
  OR?: InputMaybe<Array<ComputerRunsApplicationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ComputerRunsApplicationNodeAggregationWhereInput>;
};

export type ComputerRunsApplicationConnectFieldInput = {
  connect?: InputMaybe<Array<ApplicationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ApplicationConnectWhere>;
};

export type ComputerRunsApplicationConnectOrCreateFieldInput = {
  onCreate: ComputerRunsApplicationConnectOrCreateFieldInputOnCreate;
  where: ApplicationConnectOrCreateWhere;
};

export type ComputerRunsApplicationConnectOrCreateFieldInputOnCreate = {
  node: ApplicationOnCreateInput;
};

export type ComputerRunsApplicationConnection = {
  __typename?: 'ComputerRunsApplicationConnection';
  edges: Array<ComputerRunsApplicationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ComputerRunsApplicationConnectionSort = {
  node?: InputMaybe<ApplicationSort>;
};

export type ComputerRunsApplicationConnectionWhere = {
  AND?: InputMaybe<Array<ComputerRunsApplicationConnectionWhere>>;
  NOT?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
  OR?: InputMaybe<Array<ComputerRunsApplicationConnectionWhere>>;
  node?: InputMaybe<ApplicationWhere>;
};

export type ComputerRunsApplicationCreateFieldInput = {
  node: ApplicationCreateInput;
};

export type ComputerRunsApplicationDeleteFieldInput = {
  delete?: InputMaybe<ApplicationDeleteInput>;
  where?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
};

export type ComputerRunsApplicationDisconnectFieldInput = {
  disconnect?: InputMaybe<ApplicationDisconnectInput>;
  where?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
};

export type ComputerRunsApplicationFieldInput = {
  connect?: InputMaybe<Array<ComputerRunsApplicationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ComputerRunsApplicationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ComputerRunsApplicationCreateFieldInput>>;
};

export type ComputerRunsApplicationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ComputerRunsApplicationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ComputerRunsApplicationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ComputerRunsApplicationNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ComputerRunsApplicationRelationship = {
  __typename?: 'ComputerRunsApplicationRelationship';
  cursor: Scalars['String']['output'];
  node: Application;
};

export type ComputerRunsApplicationUpdateConnectionInput = {
  node?: InputMaybe<ApplicationUpdateInput>;
};

export type ComputerRunsApplicationUpdateFieldInput = {
  connect?: InputMaybe<Array<ComputerRunsApplicationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ComputerRunsApplicationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ComputerRunsApplicationCreateFieldInput>>;
  delete?: InputMaybe<Array<ComputerRunsApplicationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComputerRunsApplicationDisconnectFieldInput>>;
  update?: InputMaybe<ComputerRunsApplicationUpdateConnectionInput>;
  where?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
};

/** Fields to sort Computers by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComputerSort object. */
export type ComputerSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  hostName?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  isVirtual?: InputMaybe<SortDirection>;
  memory?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type ComputerUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type ComputerUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  connectsOn?: InputMaybe<Array<ComputerConnectsOnUpdateFieldInput>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  memory_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  runsApplication?: InputMaybe<Array<ComputerRunsApplicationUpdateFieldInput>>;
};

export type ComputerWhere = {
  AND?: InputMaybe<Array<ComputerWhere>>;
  NOT?: InputMaybe<ComputerWhere>;
  OR?: InputMaybe<Array<ComputerWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  connectsOnAggregate?: InputMaybe<ComputerConnectsOnAggregateInput>;
  /** Return Computers where all of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_ALL?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Computers where none of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_NONE?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Computers where one of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_SINGLE?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Computers where some of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_SOME?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Computers where all of the related IPS match this filter */
  connectsOn_ALL?: InputMaybe<IpWhere>;
  /** Return Computers where none of the related IPS match this filter */
  connectsOn_NONE?: InputMaybe<IpWhere>;
  /** Return Computers where one of the related IPS match this filter */
  connectsOn_SINGLE?: InputMaybe<IpWhere>;
  /** Return Computers where some of the related IPS match this filter */
  connectsOn_SOME?: InputMaybe<IpWhere>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  hostName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  hostName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  hostName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hostName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  isVirtual?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  memory_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  memory_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  runsApplicationAggregate?: InputMaybe<ComputerRunsApplicationAggregateInput>;
  /** Return Computers where all of the related ComputerRunsApplicationConnections match this filter */
  runsApplicationConnection_ALL?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
  /** Return Computers where none of the related ComputerRunsApplicationConnections match this filter */
  runsApplicationConnection_NONE?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
  /** Return Computers where one of the related ComputerRunsApplicationConnections match this filter */
  runsApplicationConnection_SINGLE?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
  /** Return Computers where some of the related ComputerRunsApplicationConnections match this filter */
  runsApplicationConnection_SOME?: InputMaybe<ComputerRunsApplicationConnectionWhere>;
  /** Return Computers where all of the related Applications match this filter */
  runsApplication_ALL?: InputMaybe<ApplicationWhere>;
  /** Return Computers where none of the related Applications match this filter */
  runsApplication_NONE?: InputMaybe<ApplicationWhere>;
  /** Return Computers where one of the related Applications match this filter */
  runsApplication_SINGLE?: InputMaybe<ApplicationWhere>;
  /** Return Computers where some of the related Applications match this filter */
  runsApplication_SOME?: InputMaybe<ApplicationWhere>;
};

export type ComputersConnection = {
  __typename?: 'ComputersConnection';
  edges: Array<ComputerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CpusConnection = {
  __typename?: 'CpusConnection';
  edges: Array<CpuEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type CreateApplicationsMutationResponse = {
  __typename?: 'CreateApplicationsMutationResponse';
  applications: Array<Application>;
  info: CreateInfo;
};

export type CreateCompaniesMutationResponse = {
  __typename?: 'CreateCompaniesMutationResponse';
  companies: Array<Company>;
  info: CreateInfo;
};

export type CreateComputersMutationResponse = {
  __typename?: 'CreateComputersMutationResponse';
  computers: Array<Computer>;
  info: CreateInfo;
};

export type CreateCpusMutationResponse = {
  __typename?: 'CreateCpusMutationResponse';
  cpus: Array<Cpu>;
  info: CreateInfo;
};

export type CreateDatabaseInstancesMutationResponse = {
  __typename?: 'CreateDatabaseInstancesMutationResponse';
  databaseInstances: Array<DatabaseInstance>;
  info: CreateInfo;
};

export type CreateDepartmentsMutationResponse = {
  __typename?: 'CreateDepartmentsMutationResponse';
  departments: Array<Department>;
  info: CreateInfo;
};

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: 'CreateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
};

export type CreateIpsMutationResponse = {
  __typename?: 'CreateIpsMutationResponse';
  info: CreateInfo;
  ips: Array<Ip>;
};

export type CreateLocationsMutationResponse = {
  __typename?: 'CreateLocationsMutationResponse';
  info: CreateInfo;
  locations: Array<Location>;
};

export type CreateMemoriesMutationResponse = {
  __typename?: 'CreateMemoriesMutationResponse';
  info: CreateInfo;
  memories: Array<Memory>;
};

export type CreateOperatingSystemsMutationResponse = {
  __typename?: 'CreateOperatingSystemsMutationResponse';
  info: CreateInfo;
  operatingSystems: Array<OperatingSystem>;
};

export type CreateOrganizationsMutationResponse = {
  __typename?: 'CreateOrganizationsMutationResponse';
  info: CreateInfo;
  organizations: Array<Organization>;
};

export type CreatePeopleMutationResponse = {
  __typename?: 'CreatePeopleMutationResponse';
  info: CreateInfo;
  people: Array<Person>;
};

export type CreateProductsMutationResponse = {
  __typename?: 'CreateProductsMutationResponse';
  info: CreateInfo;
  products: Array<Product>;
};

export type CreateStoragesMutationResponse = {
  __typename?: 'CreateStoragesMutationResponse';
  info: CreateInfo;
  storages: Array<Storage>;
};

export type DatabaseInstance = CiRoot & {
  __typename?: 'DatabaseInstance';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  instanceOf: Array<Product>;
  instanceOfAggregate?: Maybe<DatabaseInstanceProductInstanceOfAggregationSelection>;
  instanceOfConnection: DatabaseInstanceInstanceOfConnection;
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};


export type DatabaseInstanceInstanceOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ProductOptions>;
  where?: InputMaybe<ProductWhere>;
};


export type DatabaseInstanceInstanceOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ProductWhere>;
};


export type DatabaseInstanceInstanceOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectionSort>>;
  where?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
};

export type DatabaseInstanceAggregateSelection = {
  __typename?: 'DatabaseInstanceAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type DatabaseInstanceConnectInput = {
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectFieldInput>>;
};

export type DatabaseInstanceConnectOrCreateInput = {
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectOrCreateFieldInput>>;
};

export type DatabaseInstanceConnectOrCreateWhere = {
  node: DatabaseInstanceUniqueWhere;
};

export type DatabaseInstanceConnectWhere = {
  node: DatabaseInstanceWhere;
};

export type DatabaseInstanceCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  instanceOf?: InputMaybe<DatabaseInstanceInstanceOfFieldInput>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type DatabaseInstanceDeleteInput = {
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfDeleteFieldInput>>;
};

export type DatabaseInstanceDisconnectInput = {
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfDisconnectFieldInput>>;
};

export type DatabaseInstanceEdge = {
  __typename?: 'DatabaseInstanceEdge';
  cursor: Scalars['String']['output'];
  node: DatabaseInstance;
};

export type DatabaseInstanceInstanceOfAggregateInput = {
  AND?: InputMaybe<Array<DatabaseInstanceInstanceOfAggregateInput>>;
  NOT?: InputMaybe<DatabaseInstanceInstanceOfAggregateInput>;
  OR?: InputMaybe<Array<DatabaseInstanceInstanceOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DatabaseInstanceInstanceOfNodeAggregationWhereInput>;
};

export type DatabaseInstanceInstanceOfConnectFieldInput = {
  connect?: InputMaybe<Array<ProductConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ProductConnectWhere>;
};

export type DatabaseInstanceInstanceOfConnectOrCreateFieldInput = {
  onCreate: DatabaseInstanceInstanceOfConnectOrCreateFieldInputOnCreate;
  where: ProductConnectOrCreateWhere;
};

export type DatabaseInstanceInstanceOfConnectOrCreateFieldInputOnCreate = {
  node: ProductOnCreateInput;
};

export type DatabaseInstanceInstanceOfConnection = {
  __typename?: 'DatabaseInstanceInstanceOfConnection';
  edges: Array<DatabaseInstanceInstanceOfRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DatabaseInstanceInstanceOfConnectionSort = {
  node?: InputMaybe<ProductSort>;
};

export type DatabaseInstanceInstanceOfConnectionWhere = {
  AND?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectionWhere>>;
  NOT?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
  OR?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectionWhere>>;
  node?: InputMaybe<ProductWhere>;
};

export type DatabaseInstanceInstanceOfCreateFieldInput = {
  node: ProductCreateInput;
};

export type DatabaseInstanceInstanceOfDeleteFieldInput = {
  delete?: InputMaybe<ProductDeleteInput>;
  where?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
};

export type DatabaseInstanceInstanceOfDisconnectFieldInput = {
  disconnect?: InputMaybe<ProductDisconnectInput>;
  where?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
};

export type DatabaseInstanceInstanceOfFieldInput = {
  connect?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatabaseInstanceInstanceOfCreateFieldInput>>;
};

export type DatabaseInstanceInstanceOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DatabaseInstanceInstanceOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DatabaseInstanceInstanceOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DatabaseInstanceInstanceOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  installLocation_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  installLocation_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  installLocation_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  licenseType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  licenseType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  licenseType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  productType_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  productType_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  productType_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  productType_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  productType_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  version_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  version_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  version_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  version_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  version_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DatabaseInstanceInstanceOfRelationship = {
  __typename?: 'DatabaseInstanceInstanceOfRelationship';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type DatabaseInstanceInstanceOfUpdateConnectionInput = {
  node?: InputMaybe<ProductUpdateInput>;
};

export type DatabaseInstanceInstanceOfUpdateFieldInput = {
  connect?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DatabaseInstanceInstanceOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DatabaseInstanceInstanceOfCreateFieldInput>>;
  delete?: InputMaybe<Array<DatabaseInstanceInstanceOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DatabaseInstanceInstanceOfDisconnectFieldInput>>;
  update?: InputMaybe<DatabaseInstanceInstanceOfUpdateConnectionInput>;
  where?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
};

export type DatabaseInstanceOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type DatabaseInstanceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DatabaseInstanceSort objects to sort DatabaseInstances by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DatabaseInstanceSort>>;
};

export type DatabaseInstanceProductInstanceOfAggregationSelection = {
  __typename?: 'DatabaseInstanceProductInstanceOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DatabaseInstanceProductInstanceOfNodeAggregateSelection>;
};

export type DatabaseInstanceProductInstanceOfNodeAggregateSelection = {
  __typename?: 'DatabaseInstanceProductInstanceOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  installLocation: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  licenseType: StringAggregateSelection;
  name: StringAggregateSelection;
  productType: StringAggregateSelection;
  version: StringAggregateSelection;
};

export type DatabaseInstanceRelationInput = {
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfCreateFieldInput>>;
};

/** Fields to sort DatabaseInstances by. The order in which sorts are applied is not guaranteed when specifying many fields in one DatabaseInstanceSort object. */
export type DatabaseInstanceSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DatabaseInstanceUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type DatabaseInstanceUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  instanceOf?: InputMaybe<Array<DatabaseInstanceInstanceOfUpdateFieldInput>>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DatabaseInstanceWhere = {
  AND?: InputMaybe<Array<DatabaseInstanceWhere>>;
  NOT?: InputMaybe<DatabaseInstanceWhere>;
  OR?: InputMaybe<Array<DatabaseInstanceWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceOfAggregate?: InputMaybe<DatabaseInstanceInstanceOfAggregateInput>;
  /** Return DatabaseInstances where all of the related DatabaseInstanceInstanceOfConnections match this filter */
  instanceOfConnection_ALL?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
  /** Return DatabaseInstances where none of the related DatabaseInstanceInstanceOfConnections match this filter */
  instanceOfConnection_NONE?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
  /** Return DatabaseInstances where one of the related DatabaseInstanceInstanceOfConnections match this filter */
  instanceOfConnection_SINGLE?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
  /** Return DatabaseInstances where some of the related DatabaseInstanceInstanceOfConnections match this filter */
  instanceOfConnection_SOME?: InputMaybe<DatabaseInstanceInstanceOfConnectionWhere>;
  /** Return DatabaseInstances where all of the related Products match this filter */
  instanceOf_ALL?: InputMaybe<ProductWhere>;
  /** Return DatabaseInstances where none of the related Products match this filter */
  instanceOf_NONE?: InputMaybe<ProductWhere>;
  /** Return DatabaseInstances where one of the related Products match this filter */
  instanceOf_SINGLE?: InputMaybe<ProductWhere>;
  /** Return DatabaseInstances where some of the related Products match this filter */
  instanceOf_SOME?: InputMaybe<ProductWhere>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type DatabaseInstancesConnection = {
  __typename?: 'DatabaseInstancesConnection';
  edges: Array<DatabaseInstanceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesDeleted: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type Department = CiRoot & {
  __typename?: 'Department';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  organization: Array<Organization>;
  organizationAggregate?: Maybe<DepartmentOrganizationOrganizationAggregationSelection>;
  organizationConnection: DepartmentOrganizationConnection;
  works: Array<Person>;
  worksAggregate?: Maybe<DepartmentPersonWorksAggregationSelection>;
  worksConnection: DepartmentWorksConnection;
};


export type DepartmentOrganizationArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type DepartmentOrganizationAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OrganizationWhere>;
};


export type DepartmentOrganizationConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DepartmentOrganizationConnectionSort>>;
  where?: InputMaybe<DepartmentOrganizationConnectionWhere>;
};


export type DepartmentWorksArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentWorksAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PersonWhere>;
};


export type DepartmentWorksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DepartmentWorksConnectionSort>>;
  where?: InputMaybe<DepartmentWorksConnectionWhere>;
};

export type DepartmentAggregateSelection = {
  __typename?: 'DepartmentAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type DepartmentConnectInput = {
  organization?: InputMaybe<Array<DepartmentOrganizationConnectFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksConnectFieldInput>>;
};

export type DepartmentConnectOrCreateInput = {
  organization?: InputMaybe<Array<DepartmentOrganizationConnectOrCreateFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksConnectOrCreateFieldInput>>;
};

export type DepartmentConnectOrCreateWhere = {
  node: DepartmentUniqueWhere;
};

export type DepartmentConnectWhere = {
  node: DepartmentWhere;
};

export type DepartmentCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  organization?: InputMaybe<DepartmentOrganizationFieldInput>;
  works?: InputMaybe<DepartmentWorksFieldInput>;
};

export type DepartmentDeleteInput = {
  organization?: InputMaybe<Array<DepartmentOrganizationDeleteFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksDeleteFieldInput>>;
};

export type DepartmentDisconnectInput = {
  organization?: InputMaybe<Array<DepartmentOrganizationDisconnectFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksDisconnectFieldInput>>;
};

export type DepartmentEdge = {
  __typename?: 'DepartmentEdge';
  cursor: Scalars['String']['output'];
  node: Department;
};

export type DepartmentOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type DepartmentOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DepartmentSort objects to sort Departments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<DepartmentSort>>;
};

export type DepartmentOrganizationAggregateInput = {
  AND?: InputMaybe<Array<DepartmentOrganizationAggregateInput>>;
  NOT?: InputMaybe<DepartmentOrganizationAggregateInput>;
  OR?: InputMaybe<Array<DepartmentOrganizationAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DepartmentOrganizationNodeAggregationWhereInput>;
};

export type DepartmentOrganizationConnectFieldInput = {
  connect?: InputMaybe<Array<OrganizationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<OrganizationConnectWhere>;
};

export type DepartmentOrganizationConnectOrCreateFieldInput = {
  onCreate: DepartmentOrganizationConnectOrCreateFieldInputOnCreate;
  where: OrganizationConnectOrCreateWhere;
};

export type DepartmentOrganizationConnectOrCreateFieldInputOnCreate = {
  node: OrganizationOnCreateInput;
};

export type DepartmentOrganizationConnection = {
  __typename?: 'DepartmentOrganizationConnection';
  edges: Array<DepartmentOrganizationRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DepartmentOrganizationConnectionSort = {
  node?: InputMaybe<OrganizationSort>;
};

export type DepartmentOrganizationConnectionWhere = {
  AND?: InputMaybe<Array<DepartmentOrganizationConnectionWhere>>;
  NOT?: InputMaybe<DepartmentOrganizationConnectionWhere>;
  OR?: InputMaybe<Array<DepartmentOrganizationConnectionWhere>>;
  node?: InputMaybe<OrganizationWhere>;
};

export type DepartmentOrganizationCreateFieldInput = {
  node: OrganizationCreateInput;
};

export type DepartmentOrganizationDeleteFieldInput = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<DepartmentOrganizationConnectionWhere>;
};

export type DepartmentOrganizationDisconnectFieldInput = {
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  where?: InputMaybe<DepartmentOrganizationConnectionWhere>;
};

export type DepartmentOrganizationFieldInput = {
  connect?: InputMaybe<Array<DepartmentOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentOrganizationCreateFieldInput>>;
};

export type DepartmentOrganizationNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DepartmentOrganizationNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DepartmentOrganizationNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DepartmentOrganizationNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DepartmentOrganizationOrganizationAggregationSelection = {
  __typename?: 'DepartmentOrganizationOrganizationAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DepartmentOrganizationOrganizationNodeAggregateSelection>;
};

export type DepartmentOrganizationOrganizationNodeAggregateSelection = {
  __typename?: 'DepartmentOrganizationOrganizationNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type DepartmentOrganizationRelationship = {
  __typename?: 'DepartmentOrganizationRelationship';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type DepartmentOrganizationUpdateConnectionInput = {
  node?: InputMaybe<OrganizationUpdateInput>;
};

export type DepartmentOrganizationUpdateFieldInput = {
  connect?: InputMaybe<Array<DepartmentOrganizationConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentOrganizationConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentOrganizationCreateFieldInput>>;
  delete?: InputMaybe<Array<DepartmentOrganizationDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DepartmentOrganizationDisconnectFieldInput>>;
  update?: InputMaybe<DepartmentOrganizationUpdateConnectionInput>;
  where?: InputMaybe<DepartmentOrganizationConnectionWhere>;
};

export type DepartmentPersonWorksAggregationSelection = {
  __typename?: 'DepartmentPersonWorksAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<DepartmentPersonWorksNodeAggregateSelection>;
};

export type DepartmentPersonWorksNodeAggregateSelection = {
  __typename?: 'DepartmentPersonWorksNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  firstName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  lastName: StringAggregateSelection;
  midddleName: StringAggregateSelection;
};

export type DepartmentRelationInput = {
  organization?: InputMaybe<Array<DepartmentOrganizationCreateFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksCreateFieldInput>>;
};

/** Fields to sort Departments by. The order in which sorts are applied is not guaranteed when specifying many fields in one DepartmentSort object. */
export type DepartmentSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DepartmentUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type DepartmentUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  organization?: InputMaybe<Array<DepartmentOrganizationUpdateFieldInput>>;
  works?: InputMaybe<Array<DepartmentWorksUpdateFieldInput>>;
};

export type DepartmentWhere = {
  AND?: InputMaybe<Array<DepartmentWhere>>;
  NOT?: InputMaybe<DepartmentWhere>;
  OR?: InputMaybe<Array<DepartmentWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  organizationAggregate?: InputMaybe<DepartmentOrganizationAggregateInput>;
  /** Return Departments where all of the related DepartmentOrganizationConnections match this filter */
  organizationConnection_ALL?: InputMaybe<DepartmentOrganizationConnectionWhere>;
  /** Return Departments where none of the related DepartmentOrganizationConnections match this filter */
  organizationConnection_NONE?: InputMaybe<DepartmentOrganizationConnectionWhere>;
  /** Return Departments where one of the related DepartmentOrganizationConnections match this filter */
  organizationConnection_SINGLE?: InputMaybe<DepartmentOrganizationConnectionWhere>;
  /** Return Departments where some of the related DepartmentOrganizationConnections match this filter */
  organizationConnection_SOME?: InputMaybe<DepartmentOrganizationConnectionWhere>;
  /** Return Departments where all of the related Organizations match this filter */
  organization_ALL?: InputMaybe<OrganizationWhere>;
  /** Return Departments where none of the related Organizations match this filter */
  organization_NONE?: InputMaybe<OrganizationWhere>;
  /** Return Departments where one of the related Organizations match this filter */
  organization_SINGLE?: InputMaybe<OrganizationWhere>;
  /** Return Departments where some of the related Organizations match this filter */
  organization_SOME?: InputMaybe<OrganizationWhere>;
  worksAggregate?: InputMaybe<DepartmentWorksAggregateInput>;
  /** Return Departments where all of the related DepartmentWorksConnections match this filter */
  worksConnection_ALL?: InputMaybe<DepartmentWorksConnectionWhere>;
  /** Return Departments where none of the related DepartmentWorksConnections match this filter */
  worksConnection_NONE?: InputMaybe<DepartmentWorksConnectionWhere>;
  /** Return Departments where one of the related DepartmentWorksConnections match this filter */
  worksConnection_SINGLE?: InputMaybe<DepartmentWorksConnectionWhere>;
  /** Return Departments where some of the related DepartmentWorksConnections match this filter */
  worksConnection_SOME?: InputMaybe<DepartmentWorksConnectionWhere>;
  /** Return Departments where all of the related People match this filter */
  works_ALL?: InputMaybe<PersonWhere>;
  /** Return Departments where none of the related People match this filter */
  works_NONE?: InputMaybe<PersonWhere>;
  /** Return Departments where one of the related People match this filter */
  works_SINGLE?: InputMaybe<PersonWhere>;
  /** Return Departments where some of the related People match this filter */
  works_SOME?: InputMaybe<PersonWhere>;
};

export type DepartmentWorksAggregateInput = {
  AND?: InputMaybe<Array<DepartmentWorksAggregateInput>>;
  NOT?: InputMaybe<DepartmentWorksAggregateInput>;
  OR?: InputMaybe<Array<DepartmentWorksAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DepartmentWorksNodeAggregationWhereInput>;
};

export type DepartmentWorksConnectFieldInput = {
  connect?: InputMaybe<Array<PersonConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<PersonConnectWhere>;
};

export type DepartmentWorksConnectOrCreateFieldInput = {
  onCreate: DepartmentWorksConnectOrCreateFieldInputOnCreate;
  where: PersonConnectOrCreateWhere;
};

export type DepartmentWorksConnectOrCreateFieldInputOnCreate = {
  node: PersonOnCreateInput;
};

export type DepartmentWorksConnection = {
  __typename?: 'DepartmentWorksConnection';
  edges: Array<DepartmentWorksRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DepartmentWorksConnectionSort = {
  node?: InputMaybe<PersonSort>;
};

export type DepartmentWorksConnectionWhere = {
  AND?: InputMaybe<Array<DepartmentWorksConnectionWhere>>;
  NOT?: InputMaybe<DepartmentWorksConnectionWhere>;
  OR?: InputMaybe<Array<DepartmentWorksConnectionWhere>>;
  node?: InputMaybe<PersonWhere>;
};

export type DepartmentWorksCreateFieldInput = {
  node: PersonCreateInput;
};

export type DepartmentWorksDeleteFieldInput = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<DepartmentWorksConnectionWhere>;
};

export type DepartmentWorksDisconnectFieldInput = {
  disconnect?: InputMaybe<PersonDisconnectInput>;
  where?: InputMaybe<DepartmentWorksConnectionWhere>;
};

export type DepartmentWorksFieldInput = {
  connect?: InputMaybe<Array<DepartmentWorksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentWorksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentWorksCreateFieldInput>>;
};

export type DepartmentWorksNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DepartmentWorksNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DepartmentWorksNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DepartmentWorksNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  firstName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  firstName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  firstName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  lastName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  lastName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  lastName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  midddleName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  midddleName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  midddleName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DepartmentWorksRelationship = {
  __typename?: 'DepartmentWorksRelationship';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type DepartmentWorksUpdateConnectionInput = {
  node?: InputMaybe<PersonUpdateInput>;
};

export type DepartmentWorksUpdateFieldInput = {
  connect?: InputMaybe<Array<DepartmentWorksConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DepartmentWorksConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DepartmentWorksCreateFieldInput>>;
  delete?: InputMaybe<Array<DepartmentWorksDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DepartmentWorksDisconnectFieldInput>>;
  update?: InputMaybe<DepartmentWorksUpdateConnectionInput>;
  where?: InputMaybe<DepartmentWorksConnectionWhere>;
};

export type DepartmentsConnection = {
  __typename?: 'DepartmentsConnection';
  edges: Array<DepartmentEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Device = {
  assetTag?: Maybe<Scalars['String']['output']>;
  connectsOn: Array<Ip>;
  connectsOnConnection: DeviceConnectsOnConnection;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hostName?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  memory?: Maybe<Scalars['BigInt']['output']>;
  name: Scalars['String']['output'];
};


export type DeviceConnectsOnArgs = {
  options?: InputMaybe<IpOptions>;
  where?: InputMaybe<IpWhere>;
};


export type DeviceConnectsOnConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<DeviceConnectsOnConnectionSort>>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};

export type DeviceAggregateSelection = {
  __typename?: 'DeviceAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type DeviceConnectInput = {
  connectsOn?: InputMaybe<Array<DeviceConnectsOnConnectFieldInput>>;
};

export type DeviceConnectWhere = {
  node: DeviceWhere;
};

export type DeviceConnectsOnAggregateInput = {
  AND?: InputMaybe<Array<DeviceConnectsOnAggregateInput>>;
  NOT?: InputMaybe<DeviceConnectsOnAggregateInput>;
  OR?: InputMaybe<Array<DeviceConnectsOnAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<DeviceConnectsOnNodeAggregationWhereInput>;
};

export type DeviceConnectsOnConnectFieldInput = {
  connect?: InputMaybe<Array<IpConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<IpConnectWhere>;
};

export type DeviceConnectsOnConnectOrCreateFieldInput = {
  onCreate: DeviceConnectsOnConnectOrCreateFieldInputOnCreate;
  where: IpConnectOrCreateWhere;
};

export type DeviceConnectsOnConnectOrCreateFieldInputOnCreate = {
  node: IpOnCreateInput;
};

export type DeviceConnectsOnConnection = {
  __typename?: 'DeviceConnectsOnConnection';
  edges: Array<DeviceConnectsOnRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type DeviceConnectsOnConnectionSort = {
  node?: InputMaybe<IpSort>;
};

export type DeviceConnectsOnConnectionWhere = {
  AND?: InputMaybe<Array<DeviceConnectsOnConnectionWhere>>;
  NOT?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  OR?: InputMaybe<Array<DeviceConnectsOnConnectionWhere>>;
  node?: InputMaybe<IpWhere>;
};

export type DeviceConnectsOnCreateFieldInput = {
  node: IpCreateInput;
};

export type DeviceConnectsOnDeleteFieldInput = {
  delete?: InputMaybe<IpDeleteInput>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};

export type DeviceConnectsOnDisconnectFieldInput = {
  disconnect?: InputMaybe<IpDisconnectInput>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};

export type DeviceConnectsOnNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DeviceConnectsOnNodeAggregationWhereInput>>;
  NOT?: InputMaybe<DeviceConnectsOnNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<DeviceConnectsOnNodeAggregationWhereInput>>;
  address_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  address_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  address_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  address_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  port_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  port_MAX_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_GT?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_LT?: InputMaybe<Scalars['Int']['input']>;
  port_MAX_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_GT?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_LT?: InputMaybe<Scalars['Int']['input']>;
  port_MIN_LTE?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_GT?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_LT?: InputMaybe<Scalars['Int']['input']>;
  port_SUM_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type DeviceConnectsOnRelationship = {
  __typename?: 'DeviceConnectsOnRelationship';
  cursor: Scalars['String']['output'];
  node: Ip;
};

export type DeviceConnectsOnUpdateConnectionInput = {
  node?: InputMaybe<IpUpdateInput>;
};

export type DeviceConnectsOnUpdateFieldInput = {
  connect?: InputMaybe<Array<DeviceConnectsOnConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<DeviceConnectsOnConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<DeviceConnectsOnCreateFieldInput>>;
  delete?: InputMaybe<Array<DeviceConnectsOnDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DeviceConnectsOnDisconnectFieldInput>>;
  update?: InputMaybe<DeviceConnectsOnUpdateConnectionInput>;
  where?: InputMaybe<DeviceConnectsOnConnectionWhere>;
};

export type DeviceCreateInput = {
  Computer?: InputMaybe<ComputerCreateInput>;
};

export type DeviceDeleteInput = {
  connectsOn?: InputMaybe<Array<DeviceConnectsOnDeleteFieldInput>>;
};

export type DeviceDisconnectInput = {
  connectsOn?: InputMaybe<Array<DeviceConnectsOnDisconnectFieldInput>>;
};

export type DeviceEdge = {
  __typename?: 'DeviceEdge';
  cursor: Scalars['String']['output'];
  node: Device;
};

export enum DeviceImplementation {
  Computer = 'Computer'
}

export type DeviceOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more DeviceSort objects to sort Devices by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<DeviceSort>>>;
};

/** Fields to sort Devices by. The order in which sorts are applied is not guaranteed when specifying many fields in one DeviceSort object. */
export type DeviceSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  hostName?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  memory?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type DeviceUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  connectsOn?: InputMaybe<Array<DeviceConnectsOnUpdateFieldInput>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  memory_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type DeviceWhere = {
  AND?: InputMaybe<Array<DeviceWhere>>;
  NOT?: InputMaybe<DeviceWhere>;
  OR?: InputMaybe<Array<DeviceWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  connectsOnAggregate?: InputMaybe<DeviceConnectsOnAggregateInput>;
  /** Return Devices where all of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_ALL?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Devices where none of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_NONE?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Devices where one of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_SINGLE?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Devices where some of the related DeviceConnectsOnConnections match this filter */
  connectsOnConnection_SOME?: InputMaybe<DeviceConnectsOnConnectionWhere>;
  /** Return Devices where all of the related IPS match this filter */
  connectsOn_ALL?: InputMaybe<IpWhere>;
  /** Return Devices where none of the related IPS match this filter */
  connectsOn_NONE?: InputMaybe<IpWhere>;
  /** Return Devices where one of the related IPS match this filter */
  connectsOn_SINGLE?: InputMaybe<IpWhere>;
  /** Return Devices where some of the related IPS match this filter */
  connectsOn_SOME?: InputMaybe<IpWhere>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  hostName?: InputMaybe<Scalars['String']['input']>;
  hostName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  hostName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  hostName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  hostName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  memory?: InputMaybe<Scalars['BigInt']['input']>;
  memory_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_IN?: InputMaybe<Array<InputMaybe<Scalars['BigInt']['input']>>>;
  memory_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  typename_IN?: InputMaybe<Array<DeviceImplementation>>;
};

export type DevicesConnection = {
  __typename?: 'DevicesConnection';
  edges: Array<DeviceEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type FloatAggregateSelection = {
  __typename?: 'FloatAggregateSelection';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  sum?: Maybe<Scalars['Float']['output']>;
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']['output']>;
  shortest?: Maybe<Scalars['ID']['output']>;
};

export type Ip = CiRoot & {
  __typename?: 'IP';
  address: Scalars['String']['output'];
  assetTag?: Maybe<Scalars['String']['output']>;
  connects: Array<Device>;
  connectsAggregate?: Maybe<IpDeviceConnectsAggregationSelection>;
  connectsConnection: IpConnectsConnection;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
};


export type IpConnectsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DeviceOptions>;
  where?: InputMaybe<DeviceWhere>;
};


export type IpConnectsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DeviceWhere>;
};


export type IpConnectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<IpConnectsConnectionSort>>;
  where?: InputMaybe<IpConnectsConnectionWhere>;
};

export type IpAggregateSelection = {
  __typename?: 'IPAggregateSelection';
  address: StringAggregateSelection;
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  port: IntAggregateSelection;
};

export type IpConnectInput = {
  connects?: InputMaybe<Array<IpConnectsConnectFieldInput>>;
};

export type IpConnectOrCreateWhere = {
  node: IpUniqueWhere;
};

export type IpConnectWhere = {
  node: IpWhere;
};

export type IpConnectsAggregateInput = {
  AND?: InputMaybe<Array<IpConnectsAggregateInput>>;
  NOT?: InputMaybe<IpConnectsAggregateInput>;
  OR?: InputMaybe<Array<IpConnectsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<IpConnectsNodeAggregationWhereInput>;
};

export type IpConnectsConnectFieldInput = {
  connect?: InputMaybe<DeviceConnectInput>;
  where?: InputMaybe<DeviceConnectWhere>;
};

export type IpConnectsConnection = {
  __typename?: 'IPConnectsConnection';
  edges: Array<IpConnectsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type IpConnectsConnectionSort = {
  node?: InputMaybe<DeviceSort>;
};

export type IpConnectsConnectionWhere = {
  AND?: InputMaybe<Array<IpConnectsConnectionWhere>>;
  NOT?: InputMaybe<IpConnectsConnectionWhere>;
  OR?: InputMaybe<Array<IpConnectsConnectionWhere>>;
  node?: InputMaybe<DeviceWhere>;
};

export type IpConnectsCreateFieldInput = {
  node: DeviceCreateInput;
};

export type IpConnectsDeleteFieldInput = {
  delete?: InputMaybe<DeviceDeleteInput>;
  where?: InputMaybe<IpConnectsConnectionWhere>;
};

export type IpConnectsDisconnectFieldInput = {
  disconnect?: InputMaybe<DeviceDisconnectInput>;
  where?: InputMaybe<IpConnectsConnectionWhere>;
};

export type IpConnectsFieldInput = {
  connect?: InputMaybe<Array<IpConnectsConnectFieldInput>>;
  create?: InputMaybe<Array<IpConnectsCreateFieldInput>>;
};

export type IpConnectsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<IpConnectsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<IpConnectsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<IpConnectsNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type IpConnectsRelationship = {
  __typename?: 'IPConnectsRelationship';
  cursor: Scalars['String']['output'];
  node: Device;
};

export type IpConnectsUpdateConnectionInput = {
  node?: InputMaybe<DeviceUpdateInput>;
};

export type IpConnectsUpdateFieldInput = {
  connect?: InputMaybe<Array<IpConnectsConnectFieldInput>>;
  create?: InputMaybe<Array<IpConnectsCreateFieldInput>>;
  delete?: InputMaybe<Array<IpConnectsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<IpConnectsDisconnectFieldInput>>;
  update?: InputMaybe<IpConnectsUpdateConnectionInput>;
  where?: InputMaybe<IpConnectsConnectionWhere>;
};

export type IpCreateInput = {
  address: Scalars['String']['input'];
  assetTag?: InputMaybe<Scalars['String']['input']>;
  connects?: InputMaybe<IpConnectsFieldInput>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
};

export type IpDeleteInput = {
  connects?: InputMaybe<Array<IpConnectsDeleteFieldInput>>;
};

export type IpDeviceConnectsAggregationSelection = {
  __typename?: 'IPDeviceConnectsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<IpDeviceConnectsNodeAggregateSelection>;
};

export type IpDeviceConnectsNodeAggregateSelection = {
  __typename?: 'IPDeviceConnectsNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type IpDisconnectInput = {
  connects?: InputMaybe<Array<IpConnectsDisconnectFieldInput>>;
};

export type IpEdge = {
  __typename?: 'IPEdge';
  cursor: Scalars['String']['output'];
  node: Ip;
};

export type IpOnCreateInput = {
  address: Scalars['String']['input'];
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
};

export type IpOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more IPSort objects to sort Ips by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<IpSort>>;
};

export type IpRelationInput = {
  connects?: InputMaybe<Array<IpConnectsCreateFieldInput>>;
};

/** Fields to sort Ips by. The order in which sorts are applied is not guaranteed when specifying many fields in one IPSort object. */
export type IpSort = {
  address?: InputMaybe<SortDirection>;
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  port?: InputMaybe<SortDirection>;
};

export type IpUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type IpUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  connects?: InputMaybe<Array<IpConnectsUpdateFieldInput>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  port_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  port_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type IpWhere = {
  AND?: InputMaybe<Array<IpWhere>>;
  NOT?: InputMaybe<IpWhere>;
  OR?: InputMaybe<Array<IpWhere>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  address_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  address_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  address_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  connectsAggregate?: InputMaybe<IpConnectsAggregateInput>;
  /** Return IPS where all of the related IPConnectsConnections match this filter */
  connectsConnection_ALL?: InputMaybe<IpConnectsConnectionWhere>;
  /** Return IPS where none of the related IPConnectsConnections match this filter */
  connectsConnection_NONE?: InputMaybe<IpConnectsConnectionWhere>;
  /** Return IPS where one of the related IPConnectsConnections match this filter */
  connectsConnection_SINGLE?: InputMaybe<IpConnectsConnectionWhere>;
  /** Return IPS where some of the related IPConnectsConnections match this filter */
  connectsConnection_SOME?: InputMaybe<IpConnectsConnectionWhere>;
  /** Return IPS where all of the related Devices match this filter */
  connects_ALL?: InputMaybe<DeviceWhere>;
  /** Return IPS where none of the related Devices match this filter */
  connects_NONE?: InputMaybe<DeviceWhere>;
  /** Return IPS where one of the related Devices match this filter */
  connects_SINGLE?: InputMaybe<DeviceWhere>;
  /** Return IPS where some of the related Devices match this filter */
  connects_SOME?: InputMaybe<DeviceWhere>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  port_GT?: InputMaybe<Scalars['Int']['input']>;
  port_GTE?: InputMaybe<Scalars['Int']['input']>;
  port_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  port_LT?: InputMaybe<Scalars['Int']['input']>;
  port_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
  average?: Maybe<Scalars['Float']['output']>;
  max?: Maybe<Scalars['Int']['output']>;
  min?: Maybe<Scalars['Int']['output']>;
  sum?: Maybe<Scalars['Int']['output']>;
};

export type IpsConnection = {
  __typename?: 'IpsConnection';
  edges: Array<IpEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Location = CiRoot & {
  __typename?: 'Location';
  address: Scalars['String']['output'];
  assetTag?: Maybe<Scalars['String']['output']>;
  city: Scalars['String']['output'];
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  locates: Array<CiRoot>;
  locatesAggregate?: Maybe<LocationCiRootLocatesAggregationSelection>;
  locatesConnection: LocationLocatesConnection;
  state: Scalars['String']['output'];
  zipcode: Scalars['Int']['output'];
};


export type LocationLocatesArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CiRootOptions>;
  where?: InputMaybe<CiRootWhere>;
};


export type LocationLocatesAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CiRootWhere>;
};


export type LocationLocatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<LocationLocatesConnectionSort>>;
  where?: InputMaybe<LocationLocatesConnectionWhere>;
};

export type LocationAggregateSelection = {
  __typename?: 'LocationAggregateSelection';
  address: StringAggregateSelection;
  assetTag: StringAggregateSelection;
  city: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  label: StringAggregateSelection;
  state: StringAggregateSelection;
  zipcode: IntAggregateSelection;
};

export type LocationCiRootLocatesAggregationSelection = {
  __typename?: 'LocationCiRootLocatesAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<LocationCiRootLocatesNodeAggregateSelection>;
};

export type LocationCiRootLocatesNodeAggregateSelection = {
  __typename?: 'LocationCiRootLocatesNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
};

export type LocationConnectInput = {
  locates?: InputMaybe<Array<LocationLocatesConnectFieldInput>>;
};

export type LocationCreateInput = {
  address: Scalars['String']['input'];
  assetTag?: InputMaybe<Scalars['String']['input']>;
  city: Scalars['String']['input'];
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  locates?: InputMaybe<LocationLocatesFieldInput>;
  state: Scalars['String']['input'];
  zipcode: Scalars['Int']['input'];
};

export type LocationDeleteInput = {
  locates?: InputMaybe<Array<LocationLocatesDeleteFieldInput>>;
};

export type LocationDisconnectInput = {
  locates?: InputMaybe<Array<LocationLocatesDisconnectFieldInput>>;
};

export type LocationEdge = {
  __typename?: 'LocationEdge';
  cursor: Scalars['String']['output'];
  node: Location;
};

export type LocationLocatesAggregateInput = {
  AND?: InputMaybe<Array<LocationLocatesAggregateInput>>;
  NOT?: InputMaybe<LocationLocatesAggregateInput>;
  OR?: InputMaybe<Array<LocationLocatesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<LocationLocatesNodeAggregationWhereInput>;
};

export type LocationLocatesConnectFieldInput = {
  where?: InputMaybe<CiRootConnectWhere>;
};

export type LocationLocatesConnection = {
  __typename?: 'LocationLocatesConnection';
  edges: Array<LocationLocatesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LocationLocatesConnectionSort = {
  node?: InputMaybe<CiRootSort>;
};

export type LocationLocatesConnectionWhere = {
  AND?: InputMaybe<Array<LocationLocatesConnectionWhere>>;
  NOT?: InputMaybe<LocationLocatesConnectionWhere>;
  OR?: InputMaybe<Array<LocationLocatesConnectionWhere>>;
  node?: InputMaybe<CiRootWhere>;
};

export type LocationLocatesCreateFieldInput = {
  node: CiRootCreateInput;
};

export type LocationLocatesDeleteFieldInput = {
  where?: InputMaybe<LocationLocatesConnectionWhere>;
};

export type LocationLocatesDisconnectFieldInput = {
  where?: InputMaybe<LocationLocatesConnectionWhere>;
};

export type LocationLocatesFieldInput = {
  connect?: InputMaybe<Array<LocationLocatesConnectFieldInput>>;
  create?: InputMaybe<Array<LocationLocatesCreateFieldInput>>;
};

export type LocationLocatesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<LocationLocatesNodeAggregationWhereInput>>;
  NOT?: InputMaybe<LocationLocatesNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<LocationLocatesNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationLocatesRelationship = {
  __typename?: 'LocationLocatesRelationship';
  cursor: Scalars['String']['output'];
  node: CiRoot;
};

export type LocationLocatesUpdateConnectionInput = {
  node?: InputMaybe<CiRootUpdateInput>;
};

export type LocationLocatesUpdateFieldInput = {
  connect?: InputMaybe<Array<LocationLocatesConnectFieldInput>>;
  create?: InputMaybe<Array<LocationLocatesCreateFieldInput>>;
  delete?: InputMaybe<Array<LocationLocatesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<LocationLocatesDisconnectFieldInput>>;
  update?: InputMaybe<LocationLocatesUpdateConnectionInput>;
  where?: InputMaybe<LocationLocatesConnectionWhere>;
};

export type LocationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more LocationSort objects to sort Locations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LocationSort>>;
};

export type LocationRelationInput = {
  locates?: InputMaybe<Array<LocationLocatesCreateFieldInput>>;
};

/** Fields to sort Locations by. The order in which sorts are applied is not guaranteed when specifying many fields in one LocationSort object. */
export type LocationSort = {
  address?: InputMaybe<SortDirection>;
  assetTag?: InputMaybe<SortDirection>;
  city?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  label?: InputMaybe<SortDirection>;
  state?: InputMaybe<SortDirection>;
  zipcode?: InputMaybe<SortDirection>;
};

export type LocationUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  locates?: InputMaybe<Array<LocationLocatesUpdateFieldInput>>;
  state?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
  zipcode_DECREMENT?: InputMaybe<Scalars['Int']['input']>;
  zipcode_INCREMENT?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationWhere = {
  AND?: InputMaybe<Array<LocationWhere>>;
  NOT?: InputMaybe<LocationWhere>;
  OR?: InputMaybe<Array<LocationWhere>>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  address_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  address_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  address_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  city_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  city_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  city_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  city_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  label_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  label_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  label_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  label_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  locatesAggregate?: InputMaybe<LocationLocatesAggregateInput>;
  /** Return Locations where all of the related LocationLocatesConnections match this filter */
  locatesConnection_ALL?: InputMaybe<LocationLocatesConnectionWhere>;
  /** Return Locations where none of the related LocationLocatesConnections match this filter */
  locatesConnection_NONE?: InputMaybe<LocationLocatesConnectionWhere>;
  /** Return Locations where one of the related LocationLocatesConnections match this filter */
  locatesConnection_SINGLE?: InputMaybe<LocationLocatesConnectionWhere>;
  /** Return Locations where some of the related LocationLocatesConnections match this filter */
  locatesConnection_SOME?: InputMaybe<LocationLocatesConnectionWhere>;
  /** Return Locations where all of the related CiRoots match this filter */
  locates_ALL?: InputMaybe<CiRootWhere>;
  /** Return Locations where none of the related CiRoots match this filter */
  locates_NONE?: InputMaybe<CiRootWhere>;
  /** Return Locations where one of the related CiRoots match this filter */
  locates_SINGLE?: InputMaybe<CiRootWhere>;
  /** Return Locations where some of the related CiRoots match this filter */
  locates_SOME?: InputMaybe<CiRootWhere>;
  state?: InputMaybe<Scalars['String']['input']>;
  state_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  state_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  state_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  state_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  zipcode?: InputMaybe<Scalars['Int']['input']>;
  zipcode_GT?: InputMaybe<Scalars['Int']['input']>;
  zipcode_GTE?: InputMaybe<Scalars['Int']['input']>;
  zipcode_IN?: InputMaybe<Array<Scalars['Int']['input']>>;
  zipcode_LT?: InputMaybe<Scalars['Int']['input']>;
  zipcode_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type LocationsConnection = {
  __typename?: 'LocationsConnection';
  edges: Array<LocationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export enum MediaType {
  Dvd = 'DVD',
  Hdd = 'HDD',
  Tape = 'TAPE',
  Usb = 'USB'
}

export type MemoriesConnection = {
  __typename?: 'MemoriesConnection';
  edges: Array<MemoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Memory = CiRoot & Component & {
  __typename?: 'Memory';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  partOf: Array<Computer>;
  partOfAggregate?: Maybe<MemoryComputerPartOfAggregationSelection>;
  partOfConnection: ComponentPartOfConnection;
  size: Scalars['BigInt']['output'];
};


export type MemoryPartOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type MemoryPartOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type MemoryPartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type MemoryAggregateSelection = {
  __typename?: 'MemoryAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  size: BigIntAggregateSelection;
};

export type MemoryComputerPartOfAggregationSelection = {
  __typename?: 'MemoryComputerPartOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<MemoryComputerPartOfNodeAggregateSelection>;
};

export type MemoryComputerPartOfNodeAggregateSelection = {
  __typename?: 'MemoryComputerPartOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type MemoryConnectInput = {
  partOf?: InputMaybe<Array<MemoryPartOfConnectFieldInput>>;
};

export type MemoryConnectOrCreateInput = {
  partOf?: InputMaybe<Array<MemoryPartOfConnectOrCreateFieldInput>>;
};

export type MemoryCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  partOf?: InputMaybe<MemoryPartOfFieldInput>;
  size: Scalars['BigInt']['input'];
};

export type MemoryDeleteInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
};

export type MemoryDisconnectInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
};

export type MemoryEdge = {
  __typename?: 'MemoryEdge';
  cursor: Scalars['String']['output'];
  node: Memory;
};

export type MemoryOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more MemorySort objects to sort Memories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MemorySort>>;
};

export type MemoryPartOfAggregateInput = {
  AND?: InputMaybe<Array<MemoryPartOfAggregateInput>>;
  NOT?: InputMaybe<MemoryPartOfAggregateInput>;
  OR?: InputMaybe<Array<MemoryPartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<MemoryPartOfNodeAggregationWhereInput>;
};

export type MemoryPartOfConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type MemoryPartOfConnectOrCreateFieldInput = {
  onCreate: MemoryPartOfConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type MemoryPartOfConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type MemoryPartOfCreateFieldInput = {
  node: ComputerCreateInput;
};

export type MemoryPartOfFieldInput = {
  connect?: InputMaybe<Array<MemoryPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemoryPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemoryPartOfCreateFieldInput>>;
};

export type MemoryPartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<MemoryPartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<MemoryPartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<MemoryPartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type MemoryPartOfUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type MemoryPartOfUpdateFieldInput = {
  connect?: InputMaybe<Array<MemoryPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<MemoryPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<MemoryPartOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
  update?: InputMaybe<MemoryPartOfUpdateConnectionInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type MemoryRelationInput = {
  partOf?: InputMaybe<Array<MemoryPartOfCreateFieldInput>>;
};

/** Fields to sort Memories by. The order in which sorts are applied is not guaranteed when specifying many fields in one MemorySort object. */
export type MemorySort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  size?: InputMaybe<SortDirection>;
};

export type MemoryUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  partOf?: InputMaybe<Array<MemoryPartOfUpdateFieldInput>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  size_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
};

export type MemoryWhere = {
  AND?: InputMaybe<Array<MemoryWhere>>;
  NOT?: InputMaybe<MemoryWhere>;
  OR?: InputMaybe<Array<MemoryWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  partOfAggregate?: InputMaybe<MemoryPartOfAggregateInput>;
  /** Return Memories where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Memories where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Memories where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Memories where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Memories where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return Memories where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return Memories where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Memories where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_GT?: InputMaybe<Scalars['BigInt']['input']>;
  size_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  size_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_LT?: InputMaybe<Scalars['BigInt']['input']>;
  size_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApplications: CreateApplicationsMutationResponse;
  createCompanies: CreateCompaniesMutationResponse;
  createComputers: CreateComputersMutationResponse;
  createCpus: CreateCpusMutationResponse;
  createDatabaseInstances: CreateDatabaseInstancesMutationResponse;
  createDepartments: CreateDepartmentsMutationResponse;
  createIps: CreateIpsMutationResponse;
  createLocations: CreateLocationsMutationResponse;
  createMemories: CreateMemoriesMutationResponse;
  createOperatingSystems: CreateOperatingSystemsMutationResponse;
  createOrganizations: CreateOrganizationsMutationResponse;
  createPeople: CreatePeopleMutationResponse;
  createProducts: CreateProductsMutationResponse;
  createStorages: CreateStoragesMutationResponse;
  deleteApplications: DeleteInfo;
  deleteCompanies: DeleteInfo;
  deleteComputers: DeleteInfo;
  deleteCpus: DeleteInfo;
  deleteDatabaseInstances: DeleteInfo;
  deleteDepartments: DeleteInfo;
  deleteIps: DeleteInfo;
  deleteLocations: DeleteInfo;
  deleteMemories: DeleteInfo;
  deleteOperatingSystems: DeleteInfo;
  deleteOrganizations: DeleteInfo;
  deletePeople: DeleteInfo;
  deleteProducts: DeleteInfo;
  deleteStorages: DeleteInfo;
  updateApplications: UpdateApplicationsMutationResponse;
  updateCompanies: UpdateCompaniesMutationResponse;
  updateComputers: UpdateComputersMutationResponse;
  updateCpus: UpdateCpusMutationResponse;
  updateDatabaseInstances: UpdateDatabaseInstancesMutationResponse;
  updateDepartments: UpdateDepartmentsMutationResponse;
  updateIps: UpdateIpsMutationResponse;
  updateLocations: UpdateLocationsMutationResponse;
  updateMemories: UpdateMemoriesMutationResponse;
  updateOperatingSystems: UpdateOperatingSystemsMutationResponse;
  updateOrganizations: UpdateOrganizationsMutationResponse;
  updatePeople: UpdatePeopleMutationResponse;
  updateProducts: UpdateProductsMutationResponse;
  updateStorages: UpdateStoragesMutationResponse;
};


export type MutationCreateApplicationsArgs = {
  input: Array<ApplicationCreateInput>;
};


export type MutationCreateCompaniesArgs = {
  input: Array<CompanyCreateInput>;
};


export type MutationCreateComputersArgs = {
  input: Array<ComputerCreateInput>;
};


export type MutationCreateCpusArgs = {
  input: Array<CpuCreateInput>;
};


export type MutationCreateDatabaseInstancesArgs = {
  input: Array<DatabaseInstanceCreateInput>;
};


export type MutationCreateDepartmentsArgs = {
  input: Array<DepartmentCreateInput>;
};


export type MutationCreateIpsArgs = {
  input: Array<IpCreateInput>;
};


export type MutationCreateLocationsArgs = {
  input: Array<LocationCreateInput>;
};


export type MutationCreateMemoriesArgs = {
  input: Array<MemoryCreateInput>;
};


export type MutationCreateOperatingSystemsArgs = {
  input: Array<OperatingSystemCreateInput>;
};


export type MutationCreateOrganizationsArgs = {
  input: Array<OrganizationCreateInput>;
};


export type MutationCreatePeopleArgs = {
  input: Array<PersonCreateInput>;
};


export type MutationCreateProductsArgs = {
  input: Array<ProductCreateInput>;
};


export type MutationCreateStoragesArgs = {
  input: Array<StorageCreateInput>;
};


export type MutationDeleteApplicationsArgs = {
  delete?: InputMaybe<ApplicationDeleteInput>;
  where?: InputMaybe<ApplicationWhere>;
};


export type MutationDeleteCompaniesArgs = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationDeleteComputersArgs = {
  delete?: InputMaybe<ComputerDeleteInput>;
  where?: InputMaybe<ComputerWhere>;
};


export type MutationDeleteCpusArgs = {
  delete?: InputMaybe<CpuDeleteInput>;
  where?: InputMaybe<CpuWhere>;
};


export type MutationDeleteDatabaseInstancesArgs = {
  delete?: InputMaybe<DatabaseInstanceDeleteInput>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type MutationDeleteDepartmentsArgs = {
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<DepartmentWhere>;
};


export type MutationDeleteIpsArgs = {
  delete?: InputMaybe<IpDeleteInput>;
  where?: InputMaybe<IpWhere>;
};


export type MutationDeleteLocationsArgs = {
  delete?: InputMaybe<LocationDeleteInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationDeleteMemoriesArgs = {
  delete?: InputMaybe<MemoryDeleteInput>;
  where?: InputMaybe<MemoryWhere>;
};


export type MutationDeleteOperatingSystemsArgs = {
  delete?: InputMaybe<OperatingSystemDeleteInput>;
  where?: InputMaybe<OperatingSystemWhere>;
};


export type MutationDeleteOrganizationsArgs = {
  delete?: InputMaybe<OrganizationDeleteInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationDeletePeopleArgs = {
  delete?: InputMaybe<PersonDeleteInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationDeleteProductsArgs = {
  delete?: InputMaybe<ProductDeleteInput>;
  where?: InputMaybe<ProductWhere>;
};


export type MutationDeleteStoragesArgs = {
  delete?: InputMaybe<StorageDeleteInput>;
  where?: InputMaybe<StorageWhere>;
};


export type MutationUpdateApplicationsArgs = {
  connect?: InputMaybe<ApplicationConnectInput>;
  connectOrCreate?: InputMaybe<ApplicationConnectOrCreateInput>;
  create?: InputMaybe<ApplicationRelationInput>;
  delete?: InputMaybe<ApplicationDeleteInput>;
  disconnect?: InputMaybe<ApplicationDisconnectInput>;
  update?: InputMaybe<ApplicationUpdateInput>;
  where?: InputMaybe<ApplicationWhere>;
};


export type MutationUpdateCompaniesArgs = {
  connect?: InputMaybe<CompanyConnectInput>;
  connectOrCreate?: InputMaybe<CompanyConnectOrCreateInput>;
  create?: InputMaybe<CompanyRelationInput>;
  delete?: InputMaybe<CompanyDeleteInput>;
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  update?: InputMaybe<CompanyUpdateInput>;
  where?: InputMaybe<CompanyWhere>;
};


export type MutationUpdateComputersArgs = {
  connect?: InputMaybe<ComputerConnectInput>;
  connectOrCreate?: InputMaybe<ComputerConnectOrCreateInput>;
  create?: InputMaybe<ComputerRelationInput>;
  delete?: InputMaybe<ComputerDeleteInput>;
  disconnect?: InputMaybe<ComputerDisconnectInput>;
  update?: InputMaybe<ComputerUpdateInput>;
  where?: InputMaybe<ComputerWhere>;
};


export type MutationUpdateCpusArgs = {
  connect?: InputMaybe<CpuConnectInput>;
  connectOrCreate?: InputMaybe<CpuConnectOrCreateInput>;
  create?: InputMaybe<CpuRelationInput>;
  delete?: InputMaybe<CpuDeleteInput>;
  disconnect?: InputMaybe<CpuDisconnectInput>;
  update?: InputMaybe<CpuUpdateInput>;
  where?: InputMaybe<CpuWhere>;
};


export type MutationUpdateDatabaseInstancesArgs = {
  connect?: InputMaybe<DatabaseInstanceConnectInput>;
  connectOrCreate?: InputMaybe<DatabaseInstanceConnectOrCreateInput>;
  create?: InputMaybe<DatabaseInstanceRelationInput>;
  delete?: InputMaybe<DatabaseInstanceDeleteInput>;
  disconnect?: InputMaybe<DatabaseInstanceDisconnectInput>;
  update?: InputMaybe<DatabaseInstanceUpdateInput>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type MutationUpdateDepartmentsArgs = {
  connect?: InputMaybe<DepartmentConnectInput>;
  connectOrCreate?: InputMaybe<DepartmentConnectOrCreateInput>;
  create?: InputMaybe<DepartmentRelationInput>;
  delete?: InputMaybe<DepartmentDeleteInput>;
  disconnect?: InputMaybe<DepartmentDisconnectInput>;
  update?: InputMaybe<DepartmentUpdateInput>;
  where?: InputMaybe<DepartmentWhere>;
};


export type MutationUpdateIpsArgs = {
  connect?: InputMaybe<IpConnectInput>;
  create?: InputMaybe<IpRelationInput>;
  delete?: InputMaybe<IpDeleteInput>;
  disconnect?: InputMaybe<IpDisconnectInput>;
  update?: InputMaybe<IpUpdateInput>;
  where?: InputMaybe<IpWhere>;
};


export type MutationUpdateLocationsArgs = {
  connect?: InputMaybe<LocationConnectInput>;
  create?: InputMaybe<LocationRelationInput>;
  delete?: InputMaybe<LocationDeleteInput>;
  disconnect?: InputMaybe<LocationDisconnectInput>;
  update?: InputMaybe<LocationUpdateInput>;
  where?: InputMaybe<LocationWhere>;
};


export type MutationUpdateMemoriesArgs = {
  connect?: InputMaybe<MemoryConnectInput>;
  connectOrCreate?: InputMaybe<MemoryConnectOrCreateInput>;
  create?: InputMaybe<MemoryRelationInput>;
  delete?: InputMaybe<MemoryDeleteInput>;
  disconnect?: InputMaybe<MemoryDisconnectInput>;
  update?: InputMaybe<MemoryUpdateInput>;
  where?: InputMaybe<MemoryWhere>;
};


export type MutationUpdateOperatingSystemsArgs = {
  connect?: InputMaybe<OperatingSystemConnectInput>;
  connectOrCreate?: InputMaybe<OperatingSystemConnectOrCreateInput>;
  create?: InputMaybe<OperatingSystemRelationInput>;
  delete?: InputMaybe<OperatingSystemDeleteInput>;
  disconnect?: InputMaybe<OperatingSystemDisconnectInput>;
  update?: InputMaybe<OperatingSystemUpdateInput>;
  where?: InputMaybe<OperatingSystemWhere>;
};


export type MutationUpdateOrganizationsArgs = {
  connect?: InputMaybe<OrganizationConnectInput>;
  connectOrCreate?: InputMaybe<OrganizationConnectOrCreateInput>;
  create?: InputMaybe<OrganizationRelationInput>;
  delete?: InputMaybe<OrganizationDeleteInput>;
  disconnect?: InputMaybe<OrganizationDisconnectInput>;
  update?: InputMaybe<OrganizationUpdateInput>;
  where?: InputMaybe<OrganizationWhere>;
};


export type MutationUpdatePeopleArgs = {
  connect?: InputMaybe<PersonConnectInput>;
  connectOrCreate?: InputMaybe<PersonConnectOrCreateInput>;
  create?: InputMaybe<PersonRelationInput>;
  delete?: InputMaybe<PersonDeleteInput>;
  disconnect?: InputMaybe<PersonDisconnectInput>;
  update?: InputMaybe<PersonUpdateInput>;
  where?: InputMaybe<PersonWhere>;
};


export type MutationUpdateProductsArgs = {
  connect?: InputMaybe<ProductConnectInput>;
  connectOrCreate?: InputMaybe<ProductConnectOrCreateInput>;
  create?: InputMaybe<ProductRelationInput>;
  delete?: InputMaybe<ProductDeleteInput>;
  disconnect?: InputMaybe<ProductDisconnectInput>;
  update?: InputMaybe<ProductUpdateInput>;
  where?: InputMaybe<ProductWhere>;
};


export type MutationUpdateStoragesArgs = {
  connect?: InputMaybe<StorageConnectInput>;
  connectOrCreate?: InputMaybe<StorageConnectOrCreateInput>;
  create?: InputMaybe<StorageRelationInput>;
  delete?: InputMaybe<StorageDeleteInput>;
  disconnect?: InputMaybe<StorageDisconnectInput>;
  update?: InputMaybe<StorageUpdateInput>;
  where?: InputMaybe<StorageWhere>;
};

export type OperatingSystem = CiRoot & Component & Software & {
  __typename?: 'OperatingSystem';
  Type?: Maybe<Scalars['String']['output']>;
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  installLocation?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  licenseType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  partOf: Array<Computer>;
  partOfAggregate?: Maybe<OperatingSystemComputerPartOfAggregationSelection>;
  partOfConnection: ComponentPartOfConnection;
};


export type OperatingSystemPartOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type OperatingSystemPartOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type OperatingSystemPartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type OperatingSystemAggregateSelection = {
  __typename?: 'OperatingSystemAggregateSelection';
  Type: StringAggregateSelection;
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  installLocation: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  licenseType: StringAggregateSelection;
  name: StringAggregateSelection;
};

export type OperatingSystemComputerPartOfAggregationSelection = {
  __typename?: 'OperatingSystemComputerPartOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OperatingSystemComputerPartOfNodeAggregateSelection>;
};

export type OperatingSystemComputerPartOfNodeAggregateSelection = {
  __typename?: 'OperatingSystemComputerPartOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type OperatingSystemConnectInput = {
  partOf?: InputMaybe<Array<OperatingSystemPartOfConnectFieldInput>>;
};

export type OperatingSystemConnectOrCreateInput = {
  partOf?: InputMaybe<Array<OperatingSystemPartOfConnectOrCreateFieldInput>>;
};

export type OperatingSystemCreateInput = {
  Type?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  partOf?: InputMaybe<OperatingSystemPartOfFieldInput>;
};

export type OperatingSystemDeleteInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
};

export type OperatingSystemDisconnectInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
};

export type OperatingSystemEdge = {
  __typename?: 'OperatingSystemEdge';
  cursor: Scalars['String']['output'];
  node: OperatingSystem;
};

export type OperatingSystemOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OperatingSystemSort objects to sort OperatingSystems by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OperatingSystemSort>>;
};

export type OperatingSystemPartOfAggregateInput = {
  AND?: InputMaybe<Array<OperatingSystemPartOfAggregateInput>>;
  NOT?: InputMaybe<OperatingSystemPartOfAggregateInput>;
  OR?: InputMaybe<Array<OperatingSystemPartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OperatingSystemPartOfNodeAggregationWhereInput>;
};

export type OperatingSystemPartOfConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type OperatingSystemPartOfConnectOrCreateFieldInput = {
  onCreate: OperatingSystemPartOfConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type OperatingSystemPartOfConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type OperatingSystemPartOfCreateFieldInput = {
  node: ComputerCreateInput;
};

export type OperatingSystemPartOfFieldInput = {
  connect?: InputMaybe<Array<OperatingSystemPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OperatingSystemPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OperatingSystemPartOfCreateFieldInput>>;
};

export type OperatingSystemPartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OperatingSystemPartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OperatingSystemPartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OperatingSystemPartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OperatingSystemPartOfUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type OperatingSystemPartOfUpdateFieldInput = {
  connect?: InputMaybe<Array<OperatingSystemPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OperatingSystemPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OperatingSystemPartOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
  update?: InputMaybe<OperatingSystemPartOfUpdateConnectionInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type OperatingSystemRelationInput = {
  partOf?: InputMaybe<Array<OperatingSystemPartOfCreateFieldInput>>;
};

/** Fields to sort OperatingSystems by. The order in which sorts are applied is not guaranteed when specifying many fields in one OperatingSystemSort object. */
export type OperatingSystemSort = {
  Type?: InputMaybe<SortDirection>;
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  installLocation?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  licenseType?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type OperatingSystemUpdateInput = {
  Type?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partOf?: InputMaybe<Array<OperatingSystemPartOfUpdateFieldInput>>;
};

export type OperatingSystemWhere = {
  AND?: InputMaybe<Array<OperatingSystemWhere>>;
  NOT?: InputMaybe<OperatingSystemWhere>;
  OR?: InputMaybe<Array<OperatingSystemWhere>>;
  Type?: InputMaybe<Scalars['String']['input']>;
  Type_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  Type_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  Type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  Type_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  installLocation_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  installLocation_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  installLocation_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  licenseType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  licenseType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  licenseType_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  licenseType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  partOfAggregate?: InputMaybe<OperatingSystemPartOfAggregateInput>;
  /** Return OperatingSystems where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return OperatingSystems where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return OperatingSystems where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return OperatingSystems where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return OperatingSystems where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return OperatingSystems where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return OperatingSystems where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return OperatingSystems where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
};

export type OperatingSystemsConnection = {
  __typename?: 'OperatingSystemsConnection';
  edges: Array<OperatingSystemEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Organization = CiRoot & {
  __typename?: 'Organization';
  assetTag?: Maybe<Scalars['String']['output']>;
  company: Array<Company>;
  companyAggregate?: Maybe<OrganizationCompanyCompanyAggregationSelection>;
  companyConnection: OrganizationCompanyConnection;
  cost?: Maybe<Scalars['Float']['output']>;
  departments: Array<Department>;
  departmentsAggregate?: Maybe<OrganizationDepartmentDepartmentsAggregationSelection>;
  departmentsConnection: OrganizationDepartmentsConnection;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
};


export type OrganizationCompanyArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type OrganizationCompanyAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<CompanyWhere>;
};


export type OrganizationCompanyConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationCompanyConnectionSort>>;
  where?: InputMaybe<OrganizationCompanyConnectionWhere>;
};


export type OrganizationDepartmentsArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DepartmentOptions>;
  where?: InputMaybe<DepartmentWhere>;
};


export type OrganizationDepartmentsAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DepartmentWhere>;
};


export type OrganizationDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<OrganizationDepartmentsConnectionSort>>;
  where?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
};

export type OrganizationAggregateSelection = {
  __typename?: 'OrganizationAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type OrganizationCompanyAggregateInput = {
  AND?: InputMaybe<Array<OrganizationCompanyAggregateInput>>;
  NOT?: InputMaybe<OrganizationCompanyAggregateInput>;
  OR?: InputMaybe<Array<OrganizationCompanyAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrganizationCompanyNodeAggregationWhereInput>;
};

export type OrganizationCompanyCompanyAggregationSelection = {
  __typename?: 'OrganizationCompanyCompanyAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrganizationCompanyCompanyNodeAggregateSelection>;
};

export type OrganizationCompanyCompanyNodeAggregateSelection = {
  __typename?: 'OrganizationCompanyCompanyNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type OrganizationCompanyConnectFieldInput = {
  connect?: InputMaybe<Array<CompanyConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<CompanyConnectWhere>;
};

export type OrganizationCompanyConnectOrCreateFieldInput = {
  onCreate: OrganizationCompanyConnectOrCreateFieldInputOnCreate;
  where: CompanyConnectOrCreateWhere;
};

export type OrganizationCompanyConnectOrCreateFieldInputOnCreate = {
  node: CompanyOnCreateInput;
};

export type OrganizationCompanyConnection = {
  __typename?: 'OrganizationCompanyConnection';
  edges: Array<OrganizationCompanyRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationCompanyConnectionSort = {
  node?: InputMaybe<CompanySort>;
};

export type OrganizationCompanyConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationCompanyConnectionWhere>>;
  NOT?: InputMaybe<OrganizationCompanyConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationCompanyConnectionWhere>>;
  node?: InputMaybe<CompanyWhere>;
};

export type OrganizationCompanyCreateFieldInput = {
  node: CompanyCreateInput;
};

export type OrganizationCompanyDeleteFieldInput = {
  delete?: InputMaybe<CompanyDeleteInput>;
  where?: InputMaybe<OrganizationCompanyConnectionWhere>;
};

export type OrganizationCompanyDisconnectFieldInput = {
  disconnect?: InputMaybe<CompanyDisconnectInput>;
  where?: InputMaybe<OrganizationCompanyConnectionWhere>;
};

export type OrganizationCompanyFieldInput = {
  connect?: InputMaybe<Array<OrganizationCompanyConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationCompanyConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationCompanyCreateFieldInput>>;
};

export type OrganizationCompanyNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationCompanyNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationCompanyNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationCompanyNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationCompanyRelationship = {
  __typename?: 'OrganizationCompanyRelationship';
  cursor: Scalars['String']['output'];
  node: Company;
};

export type OrganizationCompanyUpdateConnectionInput = {
  node?: InputMaybe<CompanyUpdateInput>;
};

export type OrganizationCompanyUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationCompanyConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationCompanyConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationCompanyCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationCompanyDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationCompanyDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationCompanyUpdateConnectionInput>;
  where?: InputMaybe<OrganizationCompanyConnectionWhere>;
};

export type OrganizationConnectInput = {
  company?: InputMaybe<Array<OrganizationCompanyConnectFieldInput>>;
  departments?: InputMaybe<Array<OrganizationDepartmentsConnectFieldInput>>;
};

export type OrganizationConnectOrCreateInput = {
  company?: InputMaybe<Array<OrganizationCompanyConnectOrCreateFieldInput>>;
  departments?: InputMaybe<Array<OrganizationDepartmentsConnectOrCreateFieldInput>>;
};

export type OrganizationConnectOrCreateWhere = {
  node: OrganizationUniqueWhere;
};

export type OrganizationConnectWhere = {
  node: OrganizationWhere;
};

export type OrganizationCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<OrganizationCompanyFieldInput>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  departments?: InputMaybe<OrganizationDepartmentsFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type OrganizationDeleteInput = {
  company?: InputMaybe<Array<OrganizationCompanyDeleteFieldInput>>;
  departments?: InputMaybe<Array<OrganizationDepartmentsDeleteFieldInput>>;
};

export type OrganizationDepartmentDepartmentsAggregationSelection = {
  __typename?: 'OrganizationDepartmentDepartmentsAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<OrganizationDepartmentDepartmentsNodeAggregateSelection>;
};

export type OrganizationDepartmentDepartmentsNodeAggregateSelection = {
  __typename?: 'OrganizationDepartmentDepartmentsNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type OrganizationDepartmentsAggregateInput = {
  AND?: InputMaybe<Array<OrganizationDepartmentsAggregateInput>>;
  NOT?: InputMaybe<OrganizationDepartmentsAggregateInput>;
  OR?: InputMaybe<Array<OrganizationDepartmentsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<OrganizationDepartmentsNodeAggregationWhereInput>;
};

export type OrganizationDepartmentsConnectFieldInput = {
  connect?: InputMaybe<Array<DepartmentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DepartmentConnectWhere>;
};

export type OrganizationDepartmentsConnectOrCreateFieldInput = {
  onCreate: OrganizationDepartmentsConnectOrCreateFieldInputOnCreate;
  where: DepartmentConnectOrCreateWhere;
};

export type OrganizationDepartmentsConnectOrCreateFieldInputOnCreate = {
  node: DepartmentOnCreateInput;
};

export type OrganizationDepartmentsConnection = {
  __typename?: 'OrganizationDepartmentsConnection';
  edges: Array<OrganizationDepartmentsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type OrganizationDepartmentsConnectionSort = {
  node?: InputMaybe<DepartmentSort>;
};

export type OrganizationDepartmentsConnectionWhere = {
  AND?: InputMaybe<Array<OrganizationDepartmentsConnectionWhere>>;
  NOT?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
  OR?: InputMaybe<Array<OrganizationDepartmentsConnectionWhere>>;
  node?: InputMaybe<DepartmentWhere>;
};

export type OrganizationDepartmentsCreateFieldInput = {
  node: DepartmentCreateInput;
};

export type OrganizationDepartmentsDeleteFieldInput = {
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
};

export type OrganizationDepartmentsDisconnectFieldInput = {
  disconnect?: InputMaybe<DepartmentDisconnectInput>;
  where?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
};

export type OrganizationDepartmentsFieldInput = {
  connect?: InputMaybe<Array<OrganizationDepartmentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationDepartmentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationDepartmentsCreateFieldInput>>;
};

export type OrganizationDepartmentsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<OrganizationDepartmentsNodeAggregationWhereInput>>;
  NOT?: InputMaybe<OrganizationDepartmentsNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<OrganizationDepartmentsNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type OrganizationDepartmentsRelationship = {
  __typename?: 'OrganizationDepartmentsRelationship';
  cursor: Scalars['String']['output'];
  node: Department;
};

export type OrganizationDepartmentsUpdateConnectionInput = {
  node?: InputMaybe<DepartmentUpdateInput>;
};

export type OrganizationDepartmentsUpdateFieldInput = {
  connect?: InputMaybe<Array<OrganizationDepartmentsConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<OrganizationDepartmentsConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<OrganizationDepartmentsCreateFieldInput>>;
  delete?: InputMaybe<Array<OrganizationDepartmentsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<OrganizationDepartmentsDisconnectFieldInput>>;
  update?: InputMaybe<OrganizationDepartmentsUpdateConnectionInput>;
  where?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
};

export type OrganizationDisconnectInput = {
  company?: InputMaybe<Array<OrganizationCompanyDisconnectFieldInput>>;
  departments?: InputMaybe<Array<OrganizationDepartmentsDisconnectFieldInput>>;
};

export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  cursor: Scalars['String']['output'];
  node: Organization;
};

export type OrganizationOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
};

export type OrganizationOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more OrganizationSort objects to sort Organizations by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OrganizationSort>>;
};

export type OrganizationRelationInput = {
  company?: InputMaybe<Array<OrganizationCompanyCreateFieldInput>>;
  departments?: InputMaybe<Array<OrganizationDepartmentsCreateFieldInput>>;
};

/** Fields to sort Organizations by. The order in which sorts are applied is not guaranteed when specifying many fields in one OrganizationSort object. */
export type OrganizationSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type OrganizationUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type OrganizationUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Array<OrganizationCompanyUpdateFieldInput>>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  departments?: InputMaybe<Array<OrganizationDepartmentsUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationWhere = {
  AND?: InputMaybe<Array<OrganizationWhere>>;
  NOT?: InputMaybe<OrganizationWhere>;
  OR?: InputMaybe<Array<OrganizationWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  companyAggregate?: InputMaybe<OrganizationCompanyAggregateInput>;
  /** Return Organizations where all of the related OrganizationCompanyConnections match this filter */
  companyConnection_ALL?: InputMaybe<OrganizationCompanyConnectionWhere>;
  /** Return Organizations where none of the related OrganizationCompanyConnections match this filter */
  companyConnection_NONE?: InputMaybe<OrganizationCompanyConnectionWhere>;
  /** Return Organizations where one of the related OrganizationCompanyConnections match this filter */
  companyConnection_SINGLE?: InputMaybe<OrganizationCompanyConnectionWhere>;
  /** Return Organizations where some of the related OrganizationCompanyConnections match this filter */
  companyConnection_SOME?: InputMaybe<OrganizationCompanyConnectionWhere>;
  /** Return Organizations where all of the related Companies match this filter */
  company_ALL?: InputMaybe<CompanyWhere>;
  /** Return Organizations where none of the related Companies match this filter */
  company_NONE?: InputMaybe<CompanyWhere>;
  /** Return Organizations where one of the related Companies match this filter */
  company_SINGLE?: InputMaybe<CompanyWhere>;
  /** Return Organizations where some of the related Companies match this filter */
  company_SOME?: InputMaybe<CompanyWhere>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  departmentsAggregate?: InputMaybe<OrganizationDepartmentsAggregateInput>;
  /** Return Organizations where all of the related OrganizationDepartmentsConnections match this filter */
  departmentsConnection_ALL?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
  /** Return Organizations where none of the related OrganizationDepartmentsConnections match this filter */
  departmentsConnection_NONE?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
  /** Return Organizations where one of the related OrganizationDepartmentsConnections match this filter */
  departmentsConnection_SINGLE?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
  /** Return Organizations where some of the related OrganizationDepartmentsConnections match this filter */
  departmentsConnection_SOME?: InputMaybe<OrganizationDepartmentsConnectionWhere>;
  /** Return Organizations where all of the related Departments match this filter */
  departments_ALL?: InputMaybe<DepartmentWhere>;
  /** Return Organizations where none of the related Departments match this filter */
  departments_NONE?: InputMaybe<DepartmentWhere>;
  /** Return Organizations where one of the related Departments match this filter */
  departments_SINGLE?: InputMaybe<DepartmentWhere>;
  /** Return Organizations where some of the related Departments match this filter */
  departments_SOME?: InputMaybe<DepartmentWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Person = CiRoot & {
  __typename?: 'Person';
  applicationOwner: Array<Application>;
  applicationOwnerAggregate?: Maybe<PersonApplicationApplicationOwnerAggregationSelection>;
  applicationOwnerConnection: PersonApplicationOwnerConnection;
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  department: Array<Department>;
  departmentAggregate?: Maybe<PersonDepartmentDepartmentAggregationSelection>;
  departmentConnection: PersonDepartmentConnection;
  description?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  midddleName?: Maybe<Scalars['String']['output']>;
};


export type PersonApplicationOwnerArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ApplicationOptions>;
  where?: InputMaybe<ApplicationWhere>;
};


export type PersonApplicationOwnerAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ApplicationWhere>;
};


export type PersonApplicationOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PersonApplicationOwnerConnectionSort>>;
  where?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
};


export type PersonDepartmentArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DepartmentOptions>;
  where?: InputMaybe<DepartmentWhere>;
};


export type PersonDepartmentAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DepartmentWhere>;
};


export type PersonDepartmentConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<PersonDepartmentConnectionSort>>;
  where?: InputMaybe<PersonDepartmentConnectionWhere>;
};

export type PersonAggregateSelection = {
  __typename?: 'PersonAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  firstName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  lastName: StringAggregateSelection;
  midddleName: StringAggregateSelection;
};

export type PersonApplicationApplicationOwnerAggregationSelection = {
  __typename?: 'PersonApplicationApplicationOwnerAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PersonApplicationApplicationOwnerNodeAggregateSelection>;
};

export type PersonApplicationApplicationOwnerNodeAggregateSelection = {
  __typename?: 'PersonApplicationApplicationOwnerNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  buildNumber: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
  patchNumber: StringAggregateSelection;
  type: StringAggregateSelection;
};

export type PersonApplicationOwnerAggregateInput = {
  AND?: InputMaybe<Array<PersonApplicationOwnerAggregateInput>>;
  NOT?: InputMaybe<PersonApplicationOwnerAggregateInput>;
  OR?: InputMaybe<Array<PersonApplicationOwnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PersonApplicationOwnerNodeAggregationWhereInput>;
};

export type PersonApplicationOwnerConnectFieldInput = {
  connect?: InputMaybe<Array<ApplicationConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ApplicationConnectWhere>;
};

export type PersonApplicationOwnerConnectOrCreateFieldInput = {
  onCreate: PersonApplicationOwnerConnectOrCreateFieldInputOnCreate;
  where: ApplicationConnectOrCreateWhere;
};

export type PersonApplicationOwnerConnectOrCreateFieldInputOnCreate = {
  node: ApplicationOnCreateInput;
};

export type PersonApplicationOwnerConnection = {
  __typename?: 'PersonApplicationOwnerConnection';
  edges: Array<PersonApplicationOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PersonApplicationOwnerConnectionSort = {
  node?: InputMaybe<ApplicationSort>;
};

export type PersonApplicationOwnerConnectionWhere = {
  AND?: InputMaybe<Array<PersonApplicationOwnerConnectionWhere>>;
  NOT?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
  OR?: InputMaybe<Array<PersonApplicationOwnerConnectionWhere>>;
  node?: InputMaybe<ApplicationWhere>;
};

export type PersonApplicationOwnerCreateFieldInput = {
  node: ApplicationCreateInput;
};

export type PersonApplicationOwnerDeleteFieldInput = {
  delete?: InputMaybe<ApplicationDeleteInput>;
  where?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
};

export type PersonApplicationOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<ApplicationDisconnectInput>;
  where?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
};

export type PersonApplicationOwnerFieldInput = {
  connect?: InputMaybe<Array<PersonApplicationOwnerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonApplicationOwnerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonApplicationOwnerCreateFieldInput>>;
};

export type PersonApplicationOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonApplicationOwnerNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonApplicationOwnerNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonApplicationOwnerNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  buildNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  buildNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  patchNumber_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  patchNumber_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  type_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  type_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  type_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonApplicationOwnerRelationship = {
  __typename?: 'PersonApplicationOwnerRelationship';
  cursor: Scalars['String']['output'];
  node: Application;
};

export type PersonApplicationOwnerUpdateConnectionInput = {
  node?: InputMaybe<ApplicationUpdateInput>;
};

export type PersonApplicationOwnerUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonApplicationOwnerConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonApplicationOwnerConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonApplicationOwnerCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonApplicationOwnerDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonApplicationOwnerDisconnectFieldInput>>;
  update?: InputMaybe<PersonApplicationOwnerUpdateConnectionInput>;
  where?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
};

export type PersonConnectInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerConnectFieldInput>>;
  department?: InputMaybe<Array<PersonDepartmentConnectFieldInput>>;
};

export type PersonConnectOrCreateInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerConnectOrCreateFieldInput>>;
  department?: InputMaybe<Array<PersonDepartmentConnectOrCreateFieldInput>>;
};

export type PersonConnectOrCreateWhere = {
  node: PersonUniqueWhere;
};

export type PersonConnectWhere = {
  node: PersonWhere;
};

export type PersonCreateInput = {
  applicationOwner?: InputMaybe<PersonApplicationOwnerFieldInput>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<PersonDepartmentFieldInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  midddleName?: InputMaybe<Scalars['String']['input']>;
};

export type PersonDeleteInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerDeleteFieldInput>>;
  department?: InputMaybe<Array<PersonDepartmentDeleteFieldInput>>;
};

export type PersonDepartmentAggregateInput = {
  AND?: InputMaybe<Array<PersonDepartmentAggregateInput>>;
  NOT?: InputMaybe<PersonDepartmentAggregateInput>;
  OR?: InputMaybe<Array<PersonDepartmentAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<PersonDepartmentNodeAggregationWhereInput>;
};

export type PersonDepartmentConnectFieldInput = {
  connect?: InputMaybe<Array<DepartmentConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DepartmentConnectWhere>;
};

export type PersonDepartmentConnectOrCreateFieldInput = {
  onCreate: PersonDepartmentConnectOrCreateFieldInputOnCreate;
  where: DepartmentConnectOrCreateWhere;
};

export type PersonDepartmentConnectOrCreateFieldInputOnCreate = {
  node: DepartmentOnCreateInput;
};

export type PersonDepartmentConnection = {
  __typename?: 'PersonDepartmentConnection';
  edges: Array<PersonDepartmentRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PersonDepartmentConnectionSort = {
  node?: InputMaybe<DepartmentSort>;
};

export type PersonDepartmentConnectionWhere = {
  AND?: InputMaybe<Array<PersonDepartmentConnectionWhere>>;
  NOT?: InputMaybe<PersonDepartmentConnectionWhere>;
  OR?: InputMaybe<Array<PersonDepartmentConnectionWhere>>;
  node?: InputMaybe<DepartmentWhere>;
};

export type PersonDepartmentCreateFieldInput = {
  node: DepartmentCreateInput;
};

export type PersonDepartmentDeleteFieldInput = {
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<PersonDepartmentConnectionWhere>;
};

export type PersonDepartmentDepartmentAggregationSelection = {
  __typename?: 'PersonDepartmentDepartmentAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<PersonDepartmentDepartmentNodeAggregateSelection>;
};

export type PersonDepartmentDepartmentNodeAggregateSelection = {
  __typename?: 'PersonDepartmentDepartmentNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type PersonDepartmentDisconnectFieldInput = {
  disconnect?: InputMaybe<DepartmentDisconnectInput>;
  where?: InputMaybe<PersonDepartmentConnectionWhere>;
};

export type PersonDepartmentFieldInput = {
  connect?: InputMaybe<Array<PersonDepartmentConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonDepartmentConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonDepartmentCreateFieldInput>>;
};

export type PersonDepartmentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PersonDepartmentNodeAggregationWhereInput>>;
  NOT?: InputMaybe<PersonDepartmentNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<PersonDepartmentNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type PersonDepartmentRelationship = {
  __typename?: 'PersonDepartmentRelationship';
  cursor: Scalars['String']['output'];
  node: Department;
};

export type PersonDepartmentUpdateConnectionInput = {
  node?: InputMaybe<DepartmentUpdateInput>;
};

export type PersonDepartmentUpdateFieldInput = {
  connect?: InputMaybe<Array<PersonDepartmentConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<PersonDepartmentConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<PersonDepartmentCreateFieldInput>>;
  delete?: InputMaybe<Array<PersonDepartmentDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<PersonDepartmentDisconnectFieldInput>>;
  update?: InputMaybe<PersonDepartmentUpdateConnectionInput>;
  where?: InputMaybe<PersonDepartmentConnectionWhere>;
};

export type PersonDisconnectInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerDisconnectFieldInput>>;
  department?: InputMaybe<Array<PersonDepartmentDisconnectFieldInput>>;
};

export type PersonEdge = {
  __typename?: 'PersonEdge';
  cursor: Scalars['String']['output'];
  node: Person;
};

export type PersonOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  midddleName?: InputMaybe<Scalars['String']['input']>;
};

export type PersonOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more PersonSort objects to sort People by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PersonSort>>;
};

export type PersonRelationInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerCreateFieldInput>>;
  department?: InputMaybe<Array<PersonDepartmentCreateFieldInput>>;
};

/** Fields to sort People by. The order in which sorts are applied is not guaranteed when specifying many fields in one PersonSort object. */
export type PersonSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  firstName?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  lastName?: InputMaybe<SortDirection>;
  midddleName?: InputMaybe<SortDirection>;
};

export type PersonUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type PersonUpdateInput = {
  applicationOwner?: InputMaybe<Array<PersonApplicationOwnerUpdateFieldInput>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  department?: InputMaybe<Array<PersonDepartmentUpdateFieldInput>>;
  description?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  midddleName?: InputMaybe<Scalars['String']['input']>;
};

export type PersonWhere = {
  AND?: InputMaybe<Array<PersonWhere>>;
  NOT?: InputMaybe<PersonWhere>;
  OR?: InputMaybe<Array<PersonWhere>>;
  applicationOwnerAggregate?: InputMaybe<PersonApplicationOwnerAggregateInput>;
  /** Return People where all of the related PersonApplicationOwnerConnections match this filter */
  applicationOwnerConnection_ALL?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
  /** Return People where none of the related PersonApplicationOwnerConnections match this filter */
  applicationOwnerConnection_NONE?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
  /** Return People where one of the related PersonApplicationOwnerConnections match this filter */
  applicationOwnerConnection_SINGLE?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
  /** Return People where some of the related PersonApplicationOwnerConnections match this filter */
  applicationOwnerConnection_SOME?: InputMaybe<PersonApplicationOwnerConnectionWhere>;
  /** Return People where all of the related Applications match this filter */
  applicationOwner_ALL?: InputMaybe<ApplicationWhere>;
  /** Return People where none of the related Applications match this filter */
  applicationOwner_NONE?: InputMaybe<ApplicationWhere>;
  /** Return People where one of the related Applications match this filter */
  applicationOwner_SINGLE?: InputMaybe<ApplicationWhere>;
  /** Return People where some of the related Applications match this filter */
  applicationOwner_SOME?: InputMaybe<ApplicationWhere>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  departmentAggregate?: InputMaybe<PersonDepartmentAggregateInput>;
  /** Return People where all of the related PersonDepartmentConnections match this filter */
  departmentConnection_ALL?: InputMaybe<PersonDepartmentConnectionWhere>;
  /** Return People where none of the related PersonDepartmentConnections match this filter */
  departmentConnection_NONE?: InputMaybe<PersonDepartmentConnectionWhere>;
  /** Return People where one of the related PersonDepartmentConnections match this filter */
  departmentConnection_SINGLE?: InputMaybe<PersonDepartmentConnectionWhere>;
  /** Return People where some of the related PersonDepartmentConnections match this filter */
  departmentConnection_SOME?: InputMaybe<PersonDepartmentConnectionWhere>;
  /** Return People where all of the related Departments match this filter */
  department_ALL?: InputMaybe<DepartmentWhere>;
  /** Return People where none of the related Departments match this filter */
  department_NONE?: InputMaybe<DepartmentWhere>;
  /** Return People where one of the related Departments match this filter */
  department_SINGLE?: InputMaybe<DepartmentWhere>;
  /** Return People where some of the related Departments match this filter */
  department_SOME?: InputMaybe<DepartmentWhere>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  firstName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  firstName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  firstName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  lastName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  lastName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lastName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  midddleName?: InputMaybe<Scalars['String']['input']>;
  midddleName_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  midddleName_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  midddleName_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  midddleName_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type Product = CiRoot & Component & Software & {
  __typename?: 'Product';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  installLocation?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  instanceOf: Array<DatabaseInstance>;
  instanceOfAggregate?: Maybe<ProductDatabaseInstanceInstanceOfAggregationSelection>;
  instanceOfConnection: ProductInstanceOfConnection;
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  licenseType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  partOf: Array<Computer>;
  partOfAggregate?: Maybe<ProductComputerPartOfAggregationSelection>;
  partOfConnection: ComponentPartOfConnection;
  productType?: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
};


export type ProductInstanceOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<DatabaseInstanceOptions>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type ProductInstanceOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type ProductInstanceOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ProductInstanceOfConnectionSort>>;
  where?: InputMaybe<ProductInstanceOfConnectionWhere>;
};


export type ProductPartOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type ProductPartOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type ProductPartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type ProductAggregateSelection = {
  __typename?: 'ProductAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  installLocation: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  licenseType: StringAggregateSelection;
  name: StringAggregateSelection;
  productType: StringAggregateSelection;
  version: StringAggregateSelection;
};

export type ProductComputerPartOfAggregationSelection = {
  __typename?: 'ProductComputerPartOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProductComputerPartOfNodeAggregateSelection>;
};

export type ProductComputerPartOfNodeAggregateSelection = {
  __typename?: 'ProductComputerPartOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type ProductConnectInput = {
  instanceOf?: InputMaybe<Array<ProductInstanceOfConnectFieldInput>>;
  partOf?: InputMaybe<Array<ProductPartOfConnectFieldInput>>;
};

export type ProductConnectOrCreateInput = {
  instanceOf?: InputMaybe<Array<ProductInstanceOfConnectOrCreateFieldInput>>;
  partOf?: InputMaybe<Array<ProductPartOfConnectOrCreateFieldInput>>;
};

export type ProductConnectOrCreateWhere = {
  node: ProductUniqueWhere;
};

export type ProductConnectWhere = {
  node: ProductWhere;
};

export type ProductCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  instanceOf?: InputMaybe<ProductInstanceOfFieldInput>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  partOf?: InputMaybe<ProductPartOfFieldInput>;
  productType?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

export type ProductDatabaseInstanceInstanceOfAggregationSelection = {
  __typename?: 'ProductDatabaseInstanceInstanceOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<ProductDatabaseInstanceInstanceOfNodeAggregateSelection>;
};

export type ProductDatabaseInstanceInstanceOfNodeAggregateSelection = {
  __typename?: 'ProductDatabaseInstanceInstanceOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type ProductDeleteInput = {
  instanceOf?: InputMaybe<Array<ProductInstanceOfDeleteFieldInput>>;
  partOf?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
};

export type ProductDisconnectInput = {
  instanceOf?: InputMaybe<Array<ProductInstanceOfDisconnectFieldInput>>;
  partOf?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
};

export type ProductEdge = {
  __typename?: 'ProductEdge';
  cursor: Scalars['String']['output'];
  node: Product;
};

export type ProductInstanceOfAggregateInput = {
  AND?: InputMaybe<Array<ProductInstanceOfAggregateInput>>;
  NOT?: InputMaybe<ProductInstanceOfAggregateInput>;
  OR?: InputMaybe<Array<ProductInstanceOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProductInstanceOfNodeAggregationWhereInput>;
};

export type ProductInstanceOfConnectFieldInput = {
  connect?: InputMaybe<Array<DatabaseInstanceConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<DatabaseInstanceConnectWhere>;
};

export type ProductInstanceOfConnectOrCreateFieldInput = {
  onCreate: ProductInstanceOfConnectOrCreateFieldInputOnCreate;
  where: DatabaseInstanceConnectOrCreateWhere;
};

export type ProductInstanceOfConnectOrCreateFieldInputOnCreate = {
  node: DatabaseInstanceOnCreateInput;
};

export type ProductInstanceOfConnection = {
  __typename?: 'ProductInstanceOfConnection';
  edges: Array<ProductInstanceOfRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ProductInstanceOfConnectionSort = {
  node?: InputMaybe<DatabaseInstanceSort>;
};

export type ProductInstanceOfConnectionWhere = {
  AND?: InputMaybe<Array<ProductInstanceOfConnectionWhere>>;
  NOT?: InputMaybe<ProductInstanceOfConnectionWhere>;
  OR?: InputMaybe<Array<ProductInstanceOfConnectionWhere>>;
  node?: InputMaybe<DatabaseInstanceWhere>;
};

export type ProductInstanceOfCreateFieldInput = {
  node: DatabaseInstanceCreateInput;
};

export type ProductInstanceOfDeleteFieldInput = {
  delete?: InputMaybe<DatabaseInstanceDeleteInput>;
  where?: InputMaybe<ProductInstanceOfConnectionWhere>;
};

export type ProductInstanceOfDisconnectFieldInput = {
  disconnect?: InputMaybe<DatabaseInstanceDisconnectInput>;
  where?: InputMaybe<ProductInstanceOfConnectionWhere>;
};

export type ProductInstanceOfFieldInput = {
  connect?: InputMaybe<Array<ProductInstanceOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProductInstanceOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProductInstanceOfCreateFieldInput>>;
};

export type ProductInstanceOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProductInstanceOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProductInstanceOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProductInstanceOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductInstanceOfRelationship = {
  __typename?: 'ProductInstanceOfRelationship';
  cursor: Scalars['String']['output'];
  node: DatabaseInstance;
};

export type ProductInstanceOfUpdateConnectionInput = {
  node?: InputMaybe<DatabaseInstanceUpdateInput>;
};

export type ProductInstanceOfUpdateFieldInput = {
  connect?: InputMaybe<Array<ProductInstanceOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProductInstanceOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProductInstanceOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ProductInstanceOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ProductInstanceOfDisconnectFieldInput>>;
  update?: InputMaybe<ProductInstanceOfUpdateConnectionInput>;
  where?: InputMaybe<ProductInstanceOfConnectionWhere>;
};

export type ProductOnCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  productType?: InputMaybe<Scalars['String']['input']>;
  version: Scalars['String']['input'];
};

export type ProductOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more ProductSort objects to sort Products by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProductSort>>;
};

export type ProductPartOfAggregateInput = {
  AND?: InputMaybe<Array<ProductPartOfAggregateInput>>;
  NOT?: InputMaybe<ProductPartOfAggregateInput>;
  OR?: InputMaybe<Array<ProductPartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<ProductPartOfNodeAggregationWhereInput>;
};

export type ProductPartOfConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type ProductPartOfConnectOrCreateFieldInput = {
  onCreate: ProductPartOfConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type ProductPartOfConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type ProductPartOfCreateFieldInput = {
  node: ComputerCreateInput;
};

export type ProductPartOfFieldInput = {
  connect?: InputMaybe<Array<ProductPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProductPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProductPartOfCreateFieldInput>>;
};

export type ProductPartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProductPartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<ProductPartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<ProductPartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductPartOfUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type ProductPartOfUpdateFieldInput = {
  connect?: InputMaybe<Array<ProductPartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<ProductPartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<ProductPartOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
  update?: InputMaybe<ProductPartOfUpdateConnectionInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type ProductRelationInput = {
  instanceOf?: InputMaybe<Array<ProductInstanceOfCreateFieldInput>>;
  partOf?: InputMaybe<Array<ProductPartOfCreateFieldInput>>;
};

/** Fields to sort Products by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProductSort object. */
export type ProductSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  installLocation?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  licenseType?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  productType?: InputMaybe<SortDirection>;
  version?: InputMaybe<SortDirection>;
};

export type ProductUniqueWhere = {
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type ProductUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  instanceOf?: InputMaybe<Array<ProductInstanceOfUpdateFieldInput>>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  partOf?: InputMaybe<Array<ProductPartOfUpdateFieldInput>>;
  productType?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

export type ProductWhere = {
  AND?: InputMaybe<Array<ProductWhere>>;
  NOT?: InputMaybe<ProductWhere>;
  OR?: InputMaybe<Array<ProductWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  installLocation_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  installLocation_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  installLocation_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceOfAggregate?: InputMaybe<ProductInstanceOfAggregateInput>;
  /** Return Products where all of the related ProductInstanceOfConnections match this filter */
  instanceOfConnection_ALL?: InputMaybe<ProductInstanceOfConnectionWhere>;
  /** Return Products where none of the related ProductInstanceOfConnections match this filter */
  instanceOfConnection_NONE?: InputMaybe<ProductInstanceOfConnectionWhere>;
  /** Return Products where one of the related ProductInstanceOfConnections match this filter */
  instanceOfConnection_SINGLE?: InputMaybe<ProductInstanceOfConnectionWhere>;
  /** Return Products where some of the related ProductInstanceOfConnections match this filter */
  instanceOfConnection_SOME?: InputMaybe<ProductInstanceOfConnectionWhere>;
  /** Return Products where all of the related DatabaseInstances match this filter */
  instanceOf_ALL?: InputMaybe<DatabaseInstanceWhere>;
  /** Return Products where none of the related DatabaseInstances match this filter */
  instanceOf_NONE?: InputMaybe<DatabaseInstanceWhere>;
  /** Return Products where one of the related DatabaseInstances match this filter */
  instanceOf_SINGLE?: InputMaybe<DatabaseInstanceWhere>;
  /** Return Products where some of the related DatabaseInstances match this filter */
  instanceOf_SOME?: InputMaybe<DatabaseInstanceWhere>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  licenseType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  licenseType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  licenseType_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  licenseType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  partOfAggregate?: InputMaybe<ProductPartOfAggregateInput>;
  /** Return Products where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Products where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Products where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Products where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Products where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return Products where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return Products where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Products where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  productType?: InputMaybe<Scalars['String']['input']>;
  productType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  productType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  productType_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  productType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
  version_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  version_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  version_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  version_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
};

export type ProductsConnection = {
  __typename?: 'ProductsConnection';
  edges: Array<ProductEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  applications: Array<Application>;
  applicationsAggregate: ApplicationAggregateSelection;
  applicationsConnection: ApplicationsConnection;
  ciRoots: Array<CiRoot>;
  ciRootsAggregate: CiRootAggregateSelection;
  ciRootsConnection: CiRootsConnection;
  companies: Array<Company>;
  companiesAggregate: CompanyAggregateSelection;
  companiesConnection: CompaniesConnection;
  components: Array<Component>;
  componentsAggregate: ComponentAggregateSelection;
  componentsConnection: ComponentsConnection;
  computers: Array<Computer>;
  computersAggregate: ComputerAggregateSelection;
  computersConnection: ComputersConnection;
  cpus: Array<Cpu>;
  cpusAggregate: CpuAggregateSelection;
  cpusConnection: CpusConnection;
  databaseInstances: Array<DatabaseInstance>;
  databaseInstancesAggregate: DatabaseInstanceAggregateSelection;
  databaseInstancesConnection: DatabaseInstancesConnection;
  departments: Array<Department>;
  departmentsAggregate: DepartmentAggregateSelection;
  departmentsConnection: DepartmentsConnection;
  devices: Array<Device>;
  devicesAggregate: DeviceAggregateSelection;
  devicesConnection: DevicesConnection;
  ips: Array<Ip>;
  ipsAggregate: IpAggregateSelection;
  ipsConnection: IpsConnection;
  locations: Array<Location>;
  locationsAggregate: LocationAggregateSelection;
  locationsConnection: LocationsConnection;
  memories: Array<Memory>;
  memoriesAggregate: MemoryAggregateSelection;
  memoriesConnection: MemoriesConnection;
  operatingSystems: Array<OperatingSystem>;
  operatingSystemsAggregate: OperatingSystemAggregateSelection;
  operatingSystemsConnection: OperatingSystemsConnection;
  organizations: Array<Organization>;
  organizationsAggregate: OrganizationAggregateSelection;
  organizationsConnection: OrganizationsConnection;
  people: Array<Person>;
  peopleAggregate: PersonAggregateSelection;
  peopleConnection: PeopleConnection;
  products: Array<Product>;
  productsAggregate: ProductAggregateSelection;
  productsConnection: ProductsConnection;
  software: Array<Software>;
  softwareAggregate: SoftwareAggregateSelection;
  softwareConnection: SoftwareConnection;
  storages: Array<Storage>;
  storagesAggregate: StorageAggregateSelection;
  storagesConnection: StoragesConnection;
};


export type QueryApplicationsArgs = {
  options?: InputMaybe<ApplicationOptions>;
  where?: InputMaybe<ApplicationWhere>;
};


export type QueryApplicationsAggregateArgs = {
  where?: InputMaybe<ApplicationWhere>;
};


export type QueryApplicationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ApplicationSort>>>;
  where?: InputMaybe<ApplicationWhere>;
};


export type QueryCiRootsArgs = {
  options?: InputMaybe<CiRootOptions>;
  where?: InputMaybe<CiRootWhere>;
};


export type QueryCiRootsAggregateArgs = {
  where?: InputMaybe<CiRootWhere>;
};


export type QueryCiRootsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CiRootSort>>>;
  where?: InputMaybe<CiRootWhere>;
};


export type QueryCompaniesArgs = {
  options?: InputMaybe<CompanyOptions>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompaniesAggregateArgs = {
  where?: InputMaybe<CompanyWhere>;
};


export type QueryCompaniesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CompanySort>>>;
  where?: InputMaybe<CompanyWhere>;
};


export type QueryComponentsArgs = {
  options?: InputMaybe<ComponentOptions>;
  where?: InputMaybe<ComponentWhere>;
};


export type QueryComponentsAggregateArgs = {
  where?: InputMaybe<ComponentWhere>;
};


export type QueryComponentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ComponentSort>>>;
  where?: InputMaybe<ComponentWhere>;
};


export type QueryComputersArgs = {
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type QueryComputersAggregateArgs = {
  where?: InputMaybe<ComputerWhere>;
};


export type QueryComputersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ComputerSort>>>;
  where?: InputMaybe<ComputerWhere>;
};


export type QueryCpusArgs = {
  options?: InputMaybe<CpuOptions>;
  where?: InputMaybe<CpuWhere>;
};


export type QueryCpusAggregateArgs = {
  where?: InputMaybe<CpuWhere>;
};


export type QueryCpusConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<CpuSort>>>;
  where?: InputMaybe<CpuWhere>;
};


export type QueryDatabaseInstancesArgs = {
  options?: InputMaybe<DatabaseInstanceOptions>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type QueryDatabaseInstancesAggregateArgs = {
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type QueryDatabaseInstancesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DatabaseInstanceSort>>>;
  where?: InputMaybe<DatabaseInstanceWhere>;
};


export type QueryDepartmentsArgs = {
  options?: InputMaybe<DepartmentOptions>;
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryDepartmentsAggregateArgs = {
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DepartmentSort>>>;
  where?: InputMaybe<DepartmentWhere>;
};


export type QueryDevicesArgs = {
  options?: InputMaybe<DeviceOptions>;
  where?: InputMaybe<DeviceWhere>;
};


export type QueryDevicesAggregateArgs = {
  where?: InputMaybe<DeviceWhere>;
};


export type QueryDevicesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<DeviceSort>>>;
  where?: InputMaybe<DeviceWhere>;
};


export type QueryIpsArgs = {
  options?: InputMaybe<IpOptions>;
  where?: InputMaybe<IpWhere>;
};


export type QueryIpsAggregateArgs = {
  where?: InputMaybe<IpWhere>;
};


export type QueryIpsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IpSort>>>;
  where?: InputMaybe<IpWhere>;
};


export type QueryLocationsArgs = {
  options?: InputMaybe<LocationOptions>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsAggregateArgs = {
  where?: InputMaybe<LocationWhere>;
};


export type QueryLocationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<LocationSort>>>;
  where?: InputMaybe<LocationWhere>;
};


export type QueryMemoriesArgs = {
  options?: InputMaybe<MemoryOptions>;
  where?: InputMaybe<MemoryWhere>;
};


export type QueryMemoriesAggregateArgs = {
  where?: InputMaybe<MemoryWhere>;
};


export type QueryMemoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<MemorySort>>>;
  where?: InputMaybe<MemoryWhere>;
};


export type QueryOperatingSystemsArgs = {
  options?: InputMaybe<OperatingSystemOptions>;
  where?: InputMaybe<OperatingSystemWhere>;
};


export type QueryOperatingSystemsAggregateArgs = {
  where?: InputMaybe<OperatingSystemWhere>;
};


export type QueryOperatingSystemsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OperatingSystemSort>>>;
  where?: InputMaybe<OperatingSystemWhere>;
};


export type QueryOrganizationsArgs = {
  options?: InputMaybe<OrganizationOptions>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsAggregateArgs = {
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<OrganizationSort>>>;
  where?: InputMaybe<OrganizationWhere>;
};


export type QueryPeopleArgs = {
  options?: InputMaybe<PersonOptions>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleAggregateArgs = {
  where?: InputMaybe<PersonWhere>;
};


export type QueryPeopleConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<PersonSort>>>;
  where?: InputMaybe<PersonWhere>;
};


export type QueryProductsArgs = {
  options?: InputMaybe<ProductOptions>;
  where?: InputMaybe<ProductWhere>;
};


export type QueryProductsAggregateArgs = {
  where?: InputMaybe<ProductWhere>;
};


export type QueryProductsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<ProductSort>>>;
  where?: InputMaybe<ProductWhere>;
};


export type QuerySoftwareArgs = {
  options?: InputMaybe<SoftwareOptions>;
  where?: InputMaybe<SoftwareWhere>;
};


export type QuerySoftwareAggregateArgs = {
  where?: InputMaybe<SoftwareWhere>;
};


export type QuerySoftwareConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<SoftwareSort>>>;
  where?: InputMaybe<SoftwareWhere>;
};


export type QueryStoragesArgs = {
  options?: InputMaybe<StorageOptions>;
  where?: InputMaybe<StorageWhere>;
};


export type QueryStoragesAggregateArgs = {
  where?: InputMaybe<StorageWhere>;
};


export type QueryStoragesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<InputMaybe<StorageSort>>>;
  where?: InputMaybe<StorageWhere>;
};

export type Software = {
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  installLocation?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  licenseType?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  partOf: Array<Computer>;
  partOfConnection: ComponentPartOfConnection;
};


export type SoftwarePartOfArgs = {
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type SoftwarePartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type SoftwareAggregateSelection = {
  __typename?: 'SoftwareAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  installLocation: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  licenseType: StringAggregateSelection;
  name: StringAggregateSelection;
};

export type SoftwareConnection = {
  __typename?: 'SoftwareConnection';
  edges: Array<SoftwareEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type SoftwareEdge = {
  __typename?: 'SoftwareEdge';
  cursor: Scalars['String']['output'];
  node: Software;
};

export enum SoftwareImplementation {
  OperatingSystem = 'OperatingSystem',
  Product = 'Product'
}

export type SoftwareOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more SoftwareSort objects to sort Software by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<SoftwareSort>>>;
};

export type SoftwarePartOfAggregateInput = {
  AND?: InputMaybe<Array<SoftwarePartOfAggregateInput>>;
  NOT?: InputMaybe<SoftwarePartOfAggregateInput>;
  OR?: InputMaybe<Array<SoftwarePartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<SoftwarePartOfNodeAggregationWhereInput>;
};

export type SoftwarePartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<SoftwarePartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<SoftwarePartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<SoftwarePartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

/** Fields to sort Software by. The order in which sorts are applied is not guaranteed when specifying many fields in one SoftwareSort object. */
export type SoftwareSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  installLocation?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  licenseType?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type SoftwareWhere = {
  AND?: InputMaybe<Array<SoftwareWhere>>;
  NOT?: InputMaybe<SoftwareWhere>;
  OR?: InputMaybe<Array<SoftwareWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation?: InputMaybe<Scalars['String']['input']>;
  installLocation_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  installLocation_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  installLocation_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  installLocation_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  licenseType?: InputMaybe<Scalars['String']['input']>;
  licenseType_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  licenseType_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  licenseType_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  licenseType_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  name_IN?: InputMaybe<Array<Scalars['String']['input']>>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  partOfAggregate?: InputMaybe<SoftwarePartOfAggregateInput>;
  /** Return Software where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Software where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Software where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Software where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Software where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return Software where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return Software where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Software where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  typename_IN?: InputMaybe<Array<SoftwareImplementation>>;
};

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type Storage = CiRoot & Component & {
  __typename?: 'Storage';
  assetTag?: Maybe<Scalars['String']['output']>;
  cost?: Maybe<Scalars['Float']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  instanceId: Scalars['ID']['output'];
  isMarkedDelete?: Maybe<Scalars['Boolean']['output']>;
  mediaType: MediaType;
  partOf: Array<Computer>;
  partOfAggregate?: Maybe<StorageComputerPartOfAggregationSelection>;
  partOfConnection: ComponentPartOfConnection;
  size: Scalars['BigInt']['output'];
};


export type StoragePartOfArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  options?: InputMaybe<ComputerOptions>;
  where?: InputMaybe<ComputerWhere>;
};


export type StoragePartOfAggregateArgs = {
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComputerWhere>;
};


export type StoragePartOfConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  directed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Array<ComponentPartOfConnectionSort>>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type StorageAggregateSelection = {
  __typename?: 'StorageAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  count: Scalars['Int']['output'];
  description: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  size: BigIntAggregateSelection;
};

export type StorageComputerPartOfAggregationSelection = {
  __typename?: 'StorageComputerPartOfAggregationSelection';
  count: Scalars['Int']['output'];
  node?: Maybe<StorageComputerPartOfNodeAggregateSelection>;
};

export type StorageComputerPartOfNodeAggregateSelection = {
  __typename?: 'StorageComputerPartOfNodeAggregateSelection';
  assetTag: StringAggregateSelection;
  cost: FloatAggregateSelection;
  description: StringAggregateSelection;
  hostName: StringAggregateSelection;
  instanceId: IdAggregateSelection;
  memory: BigIntAggregateSelection;
  name: StringAggregateSelection;
};

export type StorageConnectInput = {
  partOf?: InputMaybe<Array<StoragePartOfConnectFieldInput>>;
};

export type StorageConnectOrCreateInput = {
  partOf?: InputMaybe<Array<StoragePartOfConnectOrCreateFieldInput>>;
};

export type StorageCreateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  mediaType: MediaType;
  partOf?: InputMaybe<StoragePartOfFieldInput>;
  size: Scalars['BigInt']['input'];
};

export type StorageDeleteInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
};

export type StorageDisconnectInput = {
  partOf?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
};

export type StorageEdge = {
  __typename?: 'StorageEdge';
  cursor: Scalars['String']['output'];
  node: Storage;
};

export type StorageOptions = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  /** Specify one or more StorageSort objects to sort Storages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StorageSort>>;
};

export type StoragePartOfAggregateInput = {
  AND?: InputMaybe<Array<StoragePartOfAggregateInput>>;
  NOT?: InputMaybe<StoragePartOfAggregateInput>;
  OR?: InputMaybe<Array<StoragePartOfAggregateInput>>;
  count?: InputMaybe<Scalars['Int']['input']>;
  count_GT?: InputMaybe<Scalars['Int']['input']>;
  count_GTE?: InputMaybe<Scalars['Int']['input']>;
  count_LT?: InputMaybe<Scalars['Int']['input']>;
  count_LTE?: InputMaybe<Scalars['Int']['input']>;
  node?: InputMaybe<StoragePartOfNodeAggregationWhereInput>;
};

export type StoragePartOfConnectFieldInput = {
  connect?: InputMaybe<Array<ComputerConnectInput>>;
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars['Boolean']['input'];
  where?: InputMaybe<ComputerConnectWhere>;
};

export type StoragePartOfConnectOrCreateFieldInput = {
  onCreate: StoragePartOfConnectOrCreateFieldInputOnCreate;
  where: ComputerConnectOrCreateWhere;
};

export type StoragePartOfConnectOrCreateFieldInputOnCreate = {
  node: ComputerOnCreateInput;
};

export type StoragePartOfCreateFieldInput = {
  node: ComputerCreateInput;
};

export type StoragePartOfFieldInput = {
  connect?: InputMaybe<Array<StoragePartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StoragePartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StoragePartOfCreateFieldInput>>;
};

export type StoragePartOfNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<StoragePartOfNodeAggregationWhereInput>>;
  NOT?: InputMaybe<StoragePartOfNodeAggregationWhereInput>;
  OR?: InputMaybe<Array<StoragePartOfNodeAggregationWhereInput>>;
  assetTag_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  assetTag_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  assetTag_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  assetTag_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  cost_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_AVERAGE_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MAX_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_MIN_LTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_SUM_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  description_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  description_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  description_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  hostName_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  hostName_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  hostName_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  memory_AVERAGE_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_AVERAGE_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MAX_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_MIN_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_EQUAL?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LT?: InputMaybe<Scalars['BigInt']['input']>;
  memory_SUM_LTE?: InputMaybe<Scalars['BigInt']['input']>;
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars['Float']['input']>;
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars['Float']['input']>;
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars['Int']['input']>;
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars['Int']['input']>;
};

export type StoragePartOfUpdateConnectionInput = {
  node?: InputMaybe<ComputerUpdateInput>;
};

export type StoragePartOfUpdateFieldInput = {
  connect?: InputMaybe<Array<StoragePartOfConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<StoragePartOfConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<StoragePartOfCreateFieldInput>>;
  delete?: InputMaybe<Array<ComponentPartOfDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<ComponentPartOfDisconnectFieldInput>>;
  update?: InputMaybe<StoragePartOfUpdateConnectionInput>;
  where?: InputMaybe<ComponentPartOfConnectionWhere>;
};

export type StorageRelationInput = {
  partOf?: InputMaybe<Array<StoragePartOfCreateFieldInput>>;
};

/** Fields to sort Storages by. The order in which sorts are applied is not guaranteed when specifying many fields in one StorageSort object. */
export type StorageSort = {
  assetTag?: InputMaybe<SortDirection>;
  cost?: InputMaybe<SortDirection>;
  description?: InputMaybe<SortDirection>;
  instanceId?: InputMaybe<SortDirection>;
  isMarkedDelete?: InputMaybe<SortDirection>;
  mediaType?: InputMaybe<SortDirection>;
  size?: InputMaybe<SortDirection>;
};

export type StorageUpdateInput = {
  assetTag?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_ADD?: InputMaybe<Scalars['Float']['input']>;
  cost_DIVIDE?: InputMaybe<Scalars['Float']['input']>;
  cost_MULTIPLY?: InputMaybe<Scalars['Float']['input']>;
  cost_SUBTRACT?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  mediaType?: InputMaybe<MediaType>;
  partOf?: InputMaybe<Array<StoragePartOfUpdateFieldInput>>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_DECREMENT?: InputMaybe<Scalars['BigInt']['input']>;
  size_INCREMENT?: InputMaybe<Scalars['BigInt']['input']>;
};

export type StorageWhere = {
  AND?: InputMaybe<Array<StorageWhere>>;
  NOT?: InputMaybe<StorageWhere>;
  OR?: InputMaybe<Array<StorageWhere>>;
  assetTag?: InputMaybe<Scalars['String']['input']>;
  assetTag_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  assetTag_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  assetTag_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  assetTag_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  cost?: InputMaybe<Scalars['Float']['input']>;
  cost_GT?: InputMaybe<Scalars['Float']['input']>;
  cost_GTE?: InputMaybe<Scalars['Float']['input']>;
  cost_IN?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  cost_LT?: InputMaybe<Scalars['Float']['input']>;
  cost_LTE?: InputMaybe<Scalars['Float']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_CONTAINS?: InputMaybe<Scalars['String']['input']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']['input']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  instanceId_CONTAINS?: InputMaybe<Scalars['ID']['input']>;
  instanceId_ENDS_WITH?: InputMaybe<Scalars['ID']['input']>;
  instanceId_IN?: InputMaybe<Array<Scalars['ID']['input']>>;
  instanceId_STARTS_WITH?: InputMaybe<Scalars['ID']['input']>;
  isMarkedDelete?: InputMaybe<Scalars['Boolean']['input']>;
  mediaType?: InputMaybe<MediaType>;
  mediaType_IN?: InputMaybe<Array<MediaType>>;
  partOfAggregate?: InputMaybe<StoragePartOfAggregateInput>;
  /** Return Storages where all of the related ComponentPartOfConnections match this filter */
  partOfConnection_ALL?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Storages where none of the related ComponentPartOfConnections match this filter */
  partOfConnection_NONE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Storages where one of the related ComponentPartOfConnections match this filter */
  partOfConnection_SINGLE?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Storages where some of the related ComponentPartOfConnections match this filter */
  partOfConnection_SOME?: InputMaybe<ComponentPartOfConnectionWhere>;
  /** Return Storages where all of the related Computers match this filter */
  partOf_ALL?: InputMaybe<ComputerWhere>;
  /** Return Storages where none of the related Computers match this filter */
  partOf_NONE?: InputMaybe<ComputerWhere>;
  /** Return Storages where one of the related Computers match this filter */
  partOf_SINGLE?: InputMaybe<ComputerWhere>;
  /** Return Storages where some of the related Computers match this filter */
  partOf_SOME?: InputMaybe<ComputerWhere>;
  size?: InputMaybe<Scalars['BigInt']['input']>;
  size_GT?: InputMaybe<Scalars['BigInt']['input']>;
  size_GTE?: InputMaybe<Scalars['BigInt']['input']>;
  size_IN?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  size_LT?: InputMaybe<Scalars['BigInt']['input']>;
  size_LTE?: InputMaybe<Scalars['BigInt']['input']>;
};

export type StoragesConnection = {
  __typename?: 'StoragesConnection';
  edges: Array<StorageEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']['output']>;
  shortest?: Maybe<Scalars['String']['output']>;
};

export type UpdateApplicationsMutationResponse = {
  __typename?: 'UpdateApplicationsMutationResponse';
  applications: Array<Application>;
  info: UpdateInfo;
};

export type UpdateCompaniesMutationResponse = {
  __typename?: 'UpdateCompaniesMutationResponse';
  companies: Array<Company>;
  info: UpdateInfo;
};

export type UpdateComputersMutationResponse = {
  __typename?: 'UpdateComputersMutationResponse';
  computers: Array<Computer>;
  info: UpdateInfo;
};

export type UpdateCpusMutationResponse = {
  __typename?: 'UpdateCpusMutationResponse';
  cpus: Array<Cpu>;
  info: UpdateInfo;
};

export type UpdateDatabaseInstancesMutationResponse = {
  __typename?: 'UpdateDatabaseInstancesMutationResponse';
  databaseInstances: Array<DatabaseInstance>;
  info: UpdateInfo;
};

export type UpdateDepartmentsMutationResponse = {
  __typename?: 'UpdateDepartmentsMutationResponse';
  departments: Array<Department>;
  info: UpdateInfo;
};

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars['String']['output']>;
  nodesCreated: Scalars['Int']['output'];
  nodesDeleted: Scalars['Int']['output'];
  relationshipsCreated: Scalars['Int']['output'];
  relationshipsDeleted: Scalars['Int']['output'];
};

export type UpdateIpsMutationResponse = {
  __typename?: 'UpdateIpsMutationResponse';
  info: UpdateInfo;
  ips: Array<Ip>;
};

export type UpdateLocationsMutationResponse = {
  __typename?: 'UpdateLocationsMutationResponse';
  info: UpdateInfo;
  locations: Array<Location>;
};

export type UpdateMemoriesMutationResponse = {
  __typename?: 'UpdateMemoriesMutationResponse';
  info: UpdateInfo;
  memories: Array<Memory>;
};

export type UpdateOperatingSystemsMutationResponse = {
  __typename?: 'UpdateOperatingSystemsMutationResponse';
  info: UpdateInfo;
  operatingSystems: Array<OperatingSystem>;
};

export type UpdateOrganizationsMutationResponse = {
  __typename?: 'UpdateOrganizationsMutationResponse';
  info: UpdateInfo;
  organizations: Array<Organization>;
};

export type UpdatePeopleMutationResponse = {
  __typename?: 'UpdatePeopleMutationResponse';
  info: UpdateInfo;
  people: Array<Person>;
};

export type UpdateProductsMutationResponse = {
  __typename?: 'UpdateProductsMutationResponse';
  info: UpdateInfo;
  products: Array<Product>;
};

export type UpdateStoragesMutationResponse = {
  __typename?: 'UpdateStoragesMutationResponse';
  info: UpdateInfo;
  storages: Array<Storage>;
};

export type CreateCompanyMutationVariables = Exact<{
  input: Array<CompanyCreateInput> | CompanyCreateInput;
}>;


export type CreateCompanyMutation = { __typename?: 'Mutation', createCompanies: { __typename?: 'CreateCompaniesMutationResponse', companies: Array<{ __typename?: 'Company', name: string, instanceId: string }> } };

export type UpdateCompaniesMutationVariables = Exact<{
  update?: InputMaybe<CompanyUpdateInput>;
  where?: InputMaybe<CompanyWhere>;
}>;


export type UpdateCompaniesMutation = { __typename?: 'Mutation', updateCompanies: { __typename?: 'UpdateCompaniesMutationResponse', companies: Array<{ __typename?: 'Company', instanceId: string, name: string }> } };

export type DeleteCompaniesMutationVariables = Exact<{
  where?: InputMaybe<CompanyWhere>;
}>;


export type DeleteCompaniesMutation = { __typename?: 'Mutation', deleteCompanies: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type CreateOrganizationMutationVariables = Exact<{
  input: Array<OrganizationCreateInput> | OrganizationCreateInput;
}>;


export type CreateOrganizationMutation = { __typename?: 'Mutation', createOrganizations: { __typename?: 'CreateOrganizationsMutationResponse', organizations: Array<{ __typename?: 'Organization', name: string, description?: string | null, company: Array<{ __typename?: 'Company', name: string }> }> } };

export type UpdateOrganizationsMutationVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
  update?: InputMaybe<OrganizationUpdateInput>;
}>;


export type UpdateOrganizationsMutation = { __typename?: 'Mutation', updateOrganizations: { __typename?: 'UpdateOrganizationsMutationResponse', organizations: Array<{ __typename?: 'Organization', name: string, instanceId: string }> } };

export type DeleteOrganizationsMutationVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
}>;


export type DeleteOrganizationsMutation = { __typename?: 'Mutation', deleteOrganizations: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type CreateDepartmentMutationVariables = Exact<{
  input: Array<DepartmentCreateInput> | DepartmentCreateInput;
}>;


export type CreateDepartmentMutation = { __typename?: 'Mutation', createDepartments: { __typename?: 'CreateDepartmentsMutationResponse', departments: Array<{ __typename?: 'Department', name: string, instanceId: string, description?: string | null, organization: Array<{ __typename?: 'Organization', instanceId: string, name: string }> }> } };

export type UpdateDepartmentsMutationVariables = Exact<{
  where?: InputMaybe<DepartmentWhere>;
  update?: InputMaybe<DepartmentUpdateInput>;
}>;


export type UpdateDepartmentsMutation = { __typename?: 'Mutation', updateDepartments: { __typename?: 'UpdateDepartmentsMutationResponse', departments: Array<{ __typename?: 'Department', name: string, instanceId: string }> } };

export type DeleteDepartmentsMutationVariables = Exact<{
  delete?: InputMaybe<DepartmentDeleteInput>;
  where?: InputMaybe<DepartmentWhere>;
}>;


export type DeleteDepartmentsMutation = { __typename?: 'Mutation', deleteDepartments: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type CreatePersonMutationVariables = Exact<{
  input: Array<PersonCreateInput> | PersonCreateInput;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPeople: { __typename?: 'CreatePeopleMutationResponse', people: Array<{ __typename?: 'Person', firstName?: string | null, lastName?: string | null, instanceId: string, department: Array<{ __typename?: 'Department', name: string, instanceId: string }> }> } };

export type GetIPsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetIPsQuery = { __typename?: 'Query', ips: Array<{ __typename?: 'IP', instanceId: string, address: string }> };

export type GetAllCompanyIdsQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhere>;
}>;


export type GetAllCompanyIdsQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, instanceId: string }> };

export type GetOrgsForCompanyQueryVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
}>;


export type GetOrgsForCompanyQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', name: string, instanceId: string, company: Array<{ __typename?: 'Company', instanceId: string }> }> };

export type GetAllCompanyWithOptionsQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhere>;
  options?: InputMaybe<CompanyOptions>;
}>;


export type GetAllCompanyWithOptionsQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, instanceId: string, description?: string | null, isMarkedDelete?: boolean | null, type?: string | null }> };

export type GetCompaniesQueryVariables = Exact<{
  where?: InputMaybe<CompanyWhere>;
  options?: InputMaybe<CompanyOptions>;
}>;


export type GetCompaniesQuery = { __typename?: 'Query', companies: Array<{ __typename?: 'Company', name: string, type?: string | null, description?: string | null, instanceId: string, isMarkedDelete?: boolean | null, organization: Array<{ __typename?: 'Organization', company: Array<{ __typename?: 'Company', name: string, instanceId: string }> }>, organizationConnection: { __typename?: 'CompanyOrganizationConnection', totalCount: number } }> };

export type GetOrganizationsShortQueryVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
}>;


export type GetOrganizationsShortQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', name: string, instanceId: string, description?: string | null, isMarkedDelete?: boolean | null }> };

export type GetOrganizationsQueryVariables = Exact<{
  where?: InputMaybe<OrganizationWhere>;
  options?: InputMaybe<OrganizationOptions>;
}>;


export type GetOrganizationsQuery = { __typename?: 'Query', organizations: Array<{ __typename?: 'Organization', name: string, instanceId: string, description?: string | null, isMarkedDelete?: boolean | null, company: Array<{ __typename?: 'Company', name: string, instanceId: string }>, departments: Array<{ __typename?: 'Department', name: string, instanceId: string }> }> };

export type GetDepartmentsShortQueryVariables = Exact<{
  where?: InputMaybe<DepartmentWhere>;
  options?: InputMaybe<DepartmentOptions>;
}>;


export type GetDepartmentsShortQuery = { __typename?: 'Query', departments: Array<{ __typename?: 'Department', name: string, instanceId: string, description?: string | null, isMarkedDelete?: boolean | null }> };

export type GetDepartmentsQueryVariables = Exact<{
  where?: InputMaybe<DepartmentWhere>;
  options?: InputMaybe<DepartmentOptions>;
}>;


export type GetDepartmentsQuery = { __typename?: 'Query', departments: Array<{ __typename?: 'Department', name: string, instanceId: string, description?: string | null, isMarkedDelete?: boolean | null, organization: Array<{ __typename?: 'Organization', name: string, instanceId: string }> }> };


export const CreateCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateCompanyMutation, CreateCompanyMutationVariables>;
export const UpdateCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyUpdateInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateCompaniesMutation, UpdateCompaniesMutationVariables>;
export const DeleteCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteCompaniesMutation, DeleteCompaniesMutationVariables>;
export const CreateOrganizationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrganization"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateOrganizationMutation, CreateOrganizationMutationVariables>;
export const UpdateOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateOrganizationsMutation, UpdateOrganizationsMutationVariables>;
export const DeleteOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteOrganizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteOrganizationsMutation, DeleteOrganizationsMutationVariables>;
export const CreateDepartmentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDepartment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDepartments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateDepartmentMutation, CreateDepartmentMutationVariables>;
export const UpdateDepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDepartments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"update"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentUpdateInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDepartments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"update"},"value":{"kind":"Variable","name":{"kind":"Name","value":"update"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateDepartmentsMutation, UpdateDepartmentsMutationVariables>;
export const DeleteDepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteDepartments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"delete"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentDeleteInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteDepartments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"delete"},"value":{"kind":"Variable","name":{"kind":"Name","value":"delete"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodesDeleted"}},{"kind":"Field","name":{"kind":"Name","value":"relationshipsDeleted"}}]}}]}}]} as unknown as DocumentNode<DeleteDepartmentsMutation, DeleteDepartmentsMutationVariables>;
export const CreatePersonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPerson"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PersonCreateInput"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPeople"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"department"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePersonMutation, CreatePersonMutationVariables>;
export const GetIPsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetIPs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ips"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<GetIPsQuery, GetIPsQueryVariables>;
export const GetAllCompanyIdsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCompanyIds"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]} as unknown as DocumentNode<GetAllCompanyIdsQuery, GetAllCompanyIdsQueryVariables>;
export const GetOrgsForCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrgsForCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<GetOrgsForCompanyQuery, GetOrgsForCompanyQueryVariables>;
export const GetAllCompanyWithOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCompanyWithOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetAllCompanyWithOptionsQuery, GetAllCompanyWithOptionsQueryVariables>;
export const GetCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"organizationConnection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetCompaniesQuery, GetCompaniesQueryVariables>;
export const GetOrganizationsShortDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrganizationsShort"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationsShortQuery, GetOrganizationsShortQueryVariables>;
export const GetOrganizationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrganizations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"OrganizationOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"departments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<GetOrganizationsQuery, GetOrganizationsQueryVariables>;
export const GetDepartmentsShortDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDepartmentsShort"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}}]}}]}}]} as unknown as DocumentNode<GetDepartmentsShortQuery, GetDepartmentsShortQueryVariables>;
export const GetDepartmentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDepartments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentWhere"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"DepartmentOptions"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"departments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isMarkedDelete"}},{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"instanceId"}}]}}]}}]}}]} as unknown as DocumentNode<GetDepartmentsQuery, GetDepartmentsQueryVariables>;