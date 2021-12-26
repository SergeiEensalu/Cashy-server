import {GraphQLObjectType, GraphQLSchema} from "graphql";
import UserQuery from "../query/UserQuery";
import WorkQuery from "../query/WorkQuery";
import BalanceQuery from "../query/BalanceQuery";
import AssetsQuery from "../query/AssetsQuery";
import HistoryQuery from "../query/HistoryQuery";
import HistoryMutation from "../mutation/HistoryMutation";


const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...UserQuery,
    ...WorkQuery,
    ...BalanceQuery,
    ...AssetsQuery,
    ...HistoryQuery
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...HistoryMutation
  }
})


export default new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})