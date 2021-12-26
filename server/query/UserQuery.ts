import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import {UserGraphQLType} from "../interface/user";
import user_service from "../service/user_service";
import {BalanceGraphQLType} from "../interface/balance";
import balance_service from "../service/balance_service";

const UserQuery = {
  user: {
    type: UserGraphQLType,
    args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
    resolve(_: any, args: { id: number }) {
      return user_service.getById(args.id)
    }
  },
  users: {
    type: new GraphQLList(UserGraphQLType),
    resolve() {
      return user_service.getAll()
    }
  },
  userBalance: {
    type: BalanceGraphQLType,
    args: {userId: {type: new GraphQLNonNull(GraphQLInt)}},
    resolve(_: any, args: { userId: number }) {
      return balance_service.getUserBalanceByUserId(args.userId)
    }
  },
};

export default UserQuery;