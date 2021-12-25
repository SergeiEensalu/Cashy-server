import {WorkInterface} from "../interface/work";

const data = require('../database/data');
const _ = require('lodash')

export default function work_service() {
  //Placeholder
}

work_service.getById      = (id: number | null): WorkInterface | null  => _.find(data.works, {id: id})
work_service.getAll       = (): Array<WorkInterface> => data.works
