import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql";
import work_service from "../service/work_service";
import {WorkGraphQLType} from "../interface/work";
import {UserGraphQLType} from "../interface/user";
import user_service from "../service/user_service";
import {BalanceGraphQLType} from "../interface/balance";
import balance_service from "../service/balance_service";
import {AllAssetsGraphQLType, AssetsGraphQLType, AssetsStatusEnum} from "../interface/assets";
import assets_service from "../service/assets_service";

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    work: {
      type: WorkGraphQLType,
      args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
      resolve(_, args: {id: number}) {
        return work_service.getById(args.id)
      }
    },
    works: {
      type: new GraphQLList(WorkGraphQLType),
      resolve() {
        return work_service.getAll()
      }
    },
    user: {
      type: UserGraphQLType,
      args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
      resolve(_, args: {id: number}) {
        return user_service.getById(args.id)
      }
    },
    users: {
      type: new GraphQLList(UserGraphQLType),
      resolve() {
        return user_service.getAll()
      }
    },
    balance: {
      type: BalanceGraphQLType,
      args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
      resolve(_, args: {id: number}) {
        return balance_service.getById(args.id)
      }
    },
    balances: {
      type: new GraphQLList(BalanceGraphQLType),
      resolve() {
        return balance_service.getAll()
      }
    },
    userBalance: {
      type: BalanceGraphQLType,
      args: {userId: {type: new GraphQLNonNull(GraphQLInt)}},
      resolve(_, args: {userId: number}) {
        return balance_service.getUserBalanceByUserId(args.userId)
      }
    },


    // ASSERTS
    assets: {
      type: AllAssetsGraphQLType,
      args: {status: {type: GraphQLString}},
      resolve(_, args: {status: AssetsStatusEnum}) {
        return assets_service.getAll(args.status)
      }
    },

  }
})


export default new GraphQLSchema({
  query: RootQuery
})