import {
  GraphQLInt, GraphQLList,
  GraphQLNonNull, GraphQLString,
} from 'graphql';
import {HistoryGraphQLType} from "../interface/history";
import history_service from "../service/history_service";

const HistoryMutation = {
  addHistory: {
    type: new GraphQLList(HistoryGraphQLType),
    args: {
      userId: {type: new GraphQLNonNull(GraphQLInt)},
      date: {type: new GraphQLNonNull(GraphQLString)},
      parentId: {type: new GraphQLNonNull(GraphQLInt)},
      parentType: {type: new GraphQLNonNull(GraphQLString)},
      action: {type: new GraphQLNonNull(GraphQLString)},
    },
    // TODO change any to type
    resolve(parent: any, args: any) {
      const history = history_service.parseToHistory(args)
      if (!history) throw Error(`Error happened. Given data=${JSON.stringify(args)} `)
      return history_service.add(history)
    }
  }
};

export default HistoryMutation;