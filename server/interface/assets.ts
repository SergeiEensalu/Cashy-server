import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const AssetsGraphQLType = new GraphQLObjectType({
  name: 'Assets',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    ticker: {type: new GraphQLNonNull(GraphQLString)},
    price: {type: new GraphQLNonNull(GraphQLInt)},
    status: {type: new GraphQLNonNull(GraphQLString)}, // TODO BY Sergei: Don't know how define AssetsStatusEnum enum here.
  })
})

export const AllAssetsGraphQLType = new GraphQLObjectType({
  name: 'AllAssets',
  fields: () => ({
    stocks: {type: new GraphQLList(AssetsGraphQLType)},
    bond: {type: new GraphQLList(AssetsGraphQLType)},
    realEstate: {type: new GraphQLList(AssetsGraphQLType)},
  })
})

export interface AssetsInterface {
  id: number
  name: string
  ticker: string
  price: number
  status: AssetsStatusEnum
}

export interface AllAssetsInterface {
  stocks: Array<AssetsInterface>
  bond: Array<AssetsInterface>
  realEstate: Array<AssetsInterface>
}

export enum AssetsStatusEnum {
  ACTIVE = "ACTIVE",
  SOLD = "SOLD"
}