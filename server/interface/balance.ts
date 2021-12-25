import {GraphQLInt, GraphQLObjectType} from "graphql";

export const BalanceGraphQLType = new GraphQLObjectType({
  name: 'Balance',
  fields: () => ({
    id: {type: GraphQLInt},
    userId: {type: GraphQLInt},
    deposit: {type: GraphQLInt},
    happinessRate: {type: GraphQLInt},
    loan: {type: GraphQLInt},
    investment: {type: InvestmentGraphQLType}
  })
})

export const InvestmentGraphQLType = new GraphQLObjectType({
  name: 'Investment',
  fields: () => ({
    realEstate: {type: GraphQLInt},
    stocks: {type: GraphQLInt},
    bonds: {type: GraphQLInt}
  })
})

export interface BalanceInterface {
  id: number
  userId: number
  deposit: number
  happinessRate: number
  loan: number
  investment: InvestmentInterface
}

export interface InvestmentInterface {
  realEstate: number
  stocks: number
  bonds: number
}
