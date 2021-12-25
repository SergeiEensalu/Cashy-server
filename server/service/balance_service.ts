import {BalanceInterface} from "../interface/balance";

const data = require('../database/data');
const _ = require('lodash')

export default function balance_service() {
  //Placeholder
}

balance_service.getById = (id: number | null): BalanceInterface | null => _.find(data.balance, {id: id})

balance_service.getAll = (): Array<BalanceInterface> => data.balance

balance_service.getUserBalanceByUserId = (userId: number | null): BalanceInterface | null =>
                                  _.find(data.balance, {userId: userId})