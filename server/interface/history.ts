import {GraphQLID, GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export const HistoryGraphQLType = new GraphQLObjectType({
  name: 'History',
  // TODO: add GraphQLNonNull
  fields: () => ({
    id: {type: GraphQLID},
    userId: {type: GraphQLInt},
    date: {type: GraphQLString}, // Going to use string here to simplify task. Don't want to spend time to formatting/parsing date
    deal: {type: DealGraphQLType},
  })
})

export const DealGraphQLType = new GraphQLObjectType({
  name: 'Deal',
  fields: () => ({
    parentId: {type: GraphQLInt},
    parentType: {type: GraphQLString}, // TODO BY Sergei: Don't know how to define DealParentTypeEnum enum here.
    action: {type: GraphQLString}, // TODO BY Sergei: Don't know how to define ActionEnum enum here.
  })
})

export interface HistoryInterface {
  id: number
  userId: number
  date: string // Going to use string here to simplify task. Don't want to spend time to formatting/parsing date
  deal: DealInterface
}

export interface DealInterface {
  parentId: number  // Assets (bonds, real estate, stocks id) or work id
  parentType: DealParentTypeEnum,
  action: ActionEnum,
}

export enum ActionEnum {
  EARN = "EARN",
  BUY = "BUY",
  SOLD = "SOLD",
}

export enum DealParentTypeEnum {
  STOCKS = "STOCKS",
  BONDS = "BONDS",
  REAL_ESTATE = "REAL_ESTATE",
  WORK = "WORK"
}
