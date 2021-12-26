import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import {BalanceGraphQLType} from "../interface/balance";
import balance_service from "../service/balance_service";

const BalanceQuery = {
  balance: {
    type: BalanceGraphQLType,
    args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
    resolve(_: any, args: { id: number }) {
      return balance_service.getById(args.id)
    }
  },
  balances: {
    type: new GraphQLList(BalanceGraphQLType),
    resolve() {
      return balance_service.getAll()
    }
  },
};

export default BalanceQuery;