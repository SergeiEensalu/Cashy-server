import {
  GraphQLList,
} from 'graphql';
import {HistoryGraphQLType} from "../interface/history";
import history_service from "../service/history_service";

const HistoryQuery = {
  history: {
    type: new GraphQLList(HistoryGraphQLType),
    resolve() {
      return history_service.getAll()
    }
  },
};

export default HistoryQuery;