import {AllAssetsInterface, AssetsInterface, AssetsStatusEnum} from "../interface/assets";

const data = require('../database/data');
const _ = require('lodash')

export default function assets_service() {
  //Placeholder
}


assets_service.getAllStocks = (): Array<AssetsInterface> => data.stocks

assets_service.getAllBonds = (): Array<AssetsInterface> => data.bonds

assets_service.getAllRealEstate = (): Array<AssetsInterface> => data.realEstate

assets_service.getAll = (status: AssetsStatusEnum | undefined = undefined): AllAssetsInterface => {
  return {
    stocks: status || (status === AssetsStatusEnum.ACTIVE && status === AssetsStatusEnum.SOLD) ?
    _.filter(data.stocks, function (stock: AssetsInterface) {return stock.status === status}) : data.stocks,

    bond: status || (status === AssetsStatusEnum.ACTIVE && status === AssetsStatusEnum.SOLD) ?
    _.filter(data.bonds, function (bonds: AssetsInterface) {return bonds.status === status}) : data.bonds,

    realEstate: status || (status === AssetsStatusEnum.ACTIVE && status === AssetsStatusEnum.SOLD) ?
    _.filter(data.realEstate, function (realEstate: AssetsInterface) {return realEstate.status === status}) : data.realEstate,
  }
}

