import { curried as getTableDocumentCurried } from "./query/getTableDocument.query.js";
import r from 'rethinkdb'

export default function({} = {}) {
  return async function({ portClassInstance, parentResult, args }) {
    let connection = portClassInstance.constructor.rethinkdbConnection
    let context = portClassInstance.context
    let parameter = context.request.query
    let databaseName = 'webappContent'
    return parentResult[args.fieldToExtract]

  }
}