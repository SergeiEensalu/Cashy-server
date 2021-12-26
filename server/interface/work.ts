import {GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";

export const WorkGraphQLType = new GraphQLObjectType({
  name: 'Work',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
    description: {type: new GraphQLNonNull(GraphQLString)},
    paymentPerHour: {type: new GraphQLNonNull(GraphQLInt)},
  })
})

export interface WorkInterface {
  id: number
  name: string
  description: string
  paymentPerHour: number
}