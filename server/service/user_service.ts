import {UserInterface} from "../interface/user";

const data = require('../database/data');
const _ = require('lodash')

export default function user_service() {
  //Placeholder
}

user_service.getById      = (id: number | null): UserInterface | null  => _.find(data.users, {id: id})
user_service.getAll       = (): Array<UserInterface>  => data.users
