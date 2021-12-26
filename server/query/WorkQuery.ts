import {
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import {WorkGraphQLType} from "../interface/work";
import work_service from "../service/work_service";

const WorkQuery = {
  work: {
    type: WorkGraphQLType,
    args: {id: {type: new GraphQLNonNull(GraphQLInt)}},
    resolve(_: any, args: { id: number }) {
      return work_service.getById(args.id)
    }
  },
  works: {
    type: new GraphQLList(WorkGraphQLType),
    resolve() {
      return work_service.getAll()
    }
  },
};

export default WorkQuery;