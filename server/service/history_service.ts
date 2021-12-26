import {HistoryInterface} from "../interface/history";

const data = require('../database/data');
const _ = require('lodash')

export default function history_service() {
  //Placeholder
}

history_service.getAll = (): HistoryInterface[] => data.history
