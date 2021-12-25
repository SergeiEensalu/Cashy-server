import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export const WorkGraphQLType = new GraphQLObjectType({
  name: 'Work',
  fields: () => ({
    id: {type: GraphQLInt},
    name: {type: GraphQLString},
    description: {type: GraphQLString},
    paymentPerHour: {type: GraphQLInt},
  })
})

export interface WorkInterface {
  id: number
  name: string
  description: string
  paymentPerHour: number
}