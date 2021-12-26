import {
  GraphQLString,
} from 'graphql';
import {AllAssetsGraphQLType, AssetsStatusEnum} from "../interface/assets";
import assets_service from "../service/assets_service";

const AssetsQuery = {
  assets: {
    type: AllAssetsGraphQLType,
    args: {status: {type: GraphQLString}},
    resolve(_: any, args: { status: AssetsStatusEnum }) {
      return assets_service.getAll(args.status)
    }
  },

};

export default AssetsQuery;