import {ActionEnum, DealParentTypeEnum, HistoryInterface} from "../interface/history";
import utils from "../utils/utils";
const data = require('../database/data');

export default function history_service() {
  //Placeholder
}

history_service.getAll = (): HistoryInterface[] => data.history

history_service.add = (history: HistoryInterface): HistoryInterface[] => {
  data.history.push(history)
  return data.history
}


// TODO Change 'any' to something else
history_service.parseToHistory = (input: any): HistoryInterface | undefined => {
  if (!input.userId || !input.date || !input.parentId || !input.parentType || !input.action) {
    throw Error(`history_service.parseToHistory error, because wrong input. Given=${JSON.stringify(input)} `)
  }

  let parentType;
  if (input.parentType === DealParentTypeEnum.WORK) parentType = DealParentTypeEnum.WORK
  else if (input.parentType === DealParentTypeEnum.BONDS) parentType = DealParentTypeEnum.BONDS
  else if (input.parentType === DealParentTypeEnum.REAL_ESTATE) parentType = DealParentTypeEnum.REAL_ESTATE
  else if (input.parentType === DealParentTypeEnum.STOCKS) parentType = DealParentTypeEnum.STOCKS
  else {
    throw Error(`history_service.parseToHistory error, because wrong parentType input. Given=${input.parentType} `)
  }

  let action;
  if (input.action === ActionEnum.EARN) action = ActionEnum.EARN
  else if (input.action === ActionEnum.BUY) action = ActionEnum.BUY
  else if (input.action === ActionEnum.SOLD) action = ActionEnum.SOLD
  else throw Error(`history_service.parseToHistory error, because wrong action input. Given=${input.action} `)

  return {
    id: Number(utils.genId()),
    userId: input.userId,
    date: input.date,
    deal: {
      parentId: input.parentId,
      parentType: parentType,
      action: action,
    }
  }
}
