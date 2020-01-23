"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = _default;


function _default({} = {}) {
  return async function ({ portClassInstance, parentResult, args }) {
    let connection = portClassInstance.constructor.rethinkdbConnection;
    let context = portClassInstance.context;
    let parameter = context.request.query;
    let databaseName = 'webappContent';
    return parentResult[args.fieldToExtract];

  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9yZXNvbHZlci9leHRyYWN0RmllbGRGcm9tUGFyZW50RGF0YXNldC5qcyJdLCJuYW1lcyI6WyJwb3J0Q2xhc3NJbnN0YW5jZSIsInBhcmVudFJlc3VsdCIsImFyZ3MiLCJjb25uZWN0aW9uIiwiY29uc3RydWN0b3IiLCJyZXRoaW5rZGJDb25uZWN0aW9uIiwiY29udGV4dCIsInBhcmFtZXRlciIsInJlcXVlc3QiLCJxdWVyeSIsImRhdGFiYXNlTmFtZSIsImZpZWxkVG9FeHRyYWN0Il0sIm1hcHBpbmdzIjoiOzs7QUFHZSxrQkFBUyxLQUFLLEVBQWQsRUFBa0I7QUFDL0IsU0FBTyxnQkFBZSxFQUFFQSxpQkFBRixFQUFxQkMsWUFBckIsRUFBbUNDLElBQW5DLEVBQWYsRUFBMEQ7QUFDL0QsUUFBSUMsVUFBVSxHQUFHSCxpQkFBaUIsQ0FBQ0ksV0FBbEIsQ0FBOEJDLG1CQUEvQztBQUNBLFFBQUlDLE9BQU8sR0FBR04saUJBQWlCLENBQUNNLE9BQWhDO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUNFLE9BQVIsQ0FBZ0JDLEtBQWhDO0FBQ0EsUUFBSUMsWUFBWSxHQUFHLGVBQW5CO0FBQ0EsV0FBT1QsWUFBWSxDQUFDQyxJQUFJLENBQUNTLGNBQU4sQ0FBbkI7O0FBRUQsR0FQRDtBQVFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VycmllZCBhcyBnZXRUYWJsZURvY3VtZW50Q3VycmllZCB9IGZyb20gXCIuL3F1ZXJ5L2dldFRhYmxlRG9jdW1lbnQucXVlcnkuanNcIjtcbmltcG9ydCByIGZyb20gJ3JldGhpbmtkYidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oe30gPSB7fSkge1xuICByZXR1cm4gYXN5bmMgZnVuY3Rpb24oeyBwb3J0Q2xhc3NJbnN0YW5jZSwgcGFyZW50UmVzdWx0LCBhcmdzIH0pIHtcbiAgICBsZXQgY29ubmVjdGlvbiA9IHBvcnRDbGFzc0luc3RhbmNlLmNvbnN0cnVjdG9yLnJldGhpbmtkYkNvbm5lY3Rpb25cbiAgICBsZXQgY29udGV4dCA9IHBvcnRDbGFzc0luc3RhbmNlLmNvbnRleHRcbiAgICBsZXQgcGFyYW1ldGVyID0gY29udGV4dC5yZXF1ZXN0LnF1ZXJ5XG4gICAgbGV0IGRhdGFiYXNlTmFtZSA9ICd3ZWJhcHBDb250ZW50J1xuICAgIHJldHVybiBwYXJlbnRSZXN1bHRbYXJncy5maWVsZFRvRXh0cmFjdF1cblxuICB9XG59Il19