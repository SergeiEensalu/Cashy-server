import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export const UserGraphQLType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    personalIdCode: {type: GraphQLString},
    email: {type: GraphQLString},
  })
})

export interface UserInterface {
  id: number
  firstName: string
  lastName: string
  personalIdCode: string
  email: string
}