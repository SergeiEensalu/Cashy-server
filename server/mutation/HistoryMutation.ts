import {
  GraphQLInt,
  GraphQLNonNull, GraphQLString,
} from 'graphql';
import {HistoryGraphQLType} from "../interface/history";

const HistoryMutation = {
  addHistory: {
    type: HistoryGraphQLType,
    args: {
      id: {type: new GraphQLNonNull(GraphQLInt)},
      userId: {type: new GraphQLNonNull(GraphQLInt)},
      date: {type: new GraphQLNonNull(GraphQLString)},
      parentId: {type: new GraphQLNonNull(GraphQLInt)},
      parentType: {type: new GraphQLNonNull(GraphQLString)},
      action: {type: new GraphQLNonNull(GraphQLString)},
    },
    // TODO change any to type
    resolve(parent: any, args: any) {

    }
  }
};

export default HistoryMutation;