import {GraphQLInt, GraphQLNonNull, GraphQLObjectType} from "graphql";

export const BalanceGraphQLType = new GraphQLObjectType({
  name: 'Balance',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLInt)},
    userId: {type: new GraphQLNonNull(GraphQLInt)},
    deposit: {type: new GraphQLNonNull(GraphQLInt)},
    happinessRate: {type: new GraphQLNonNull(GraphQLInt)},
    loan: {type: new GraphQLNonNull(GraphQLInt)},
    investment: {type: new GraphQLNonNull(InvestmentGraphQLType)}
  })
})

export const InvestmentGraphQLType = new GraphQLObjectType({
  name: 'Investment',
  fields: () => ({
    realEstate: {type: new GraphQLNonNull(GraphQLInt)},
    stocks: {type: new GraphQLNonNull(GraphQLInt)},
    bonds: {type: new GraphQLNonNull(GraphQLInt)}
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
