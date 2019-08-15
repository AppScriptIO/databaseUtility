"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = getTableDocument;exports.curried = void 0;var _rethinkdb = _interopRequireDefault(require("rethinkdb"));
var _namedCurry = require("@dependency/namedCurry");
var _assert = _interopRequireDefault(require("assert"));


function getTableDocument(databaseName, tableName) {
  return async function getCondition(connection, key) {
    (0, _assert.default)(connection, 'Rethinkdb `connection` should be set.');
    _assert.default.strictEqual(Object.getPrototypeOf(connection).constructor.name, 'TcpConnection');
    let result;
    if (key) {
      result = await _rethinkdb.default.
      db(databaseName).
      table(tableName).
      filter({ key: key }).
      coerceTo('array').
      run(connection);




      return result[0];
    } else {
      result = await _rethinkdb.default.
      db(databaseName).
      table(tableName).
      coerceTo('array').
      run(connection);
      return result;
    }
  };
}

async function getTableDocumentAllParams({ databaseName, tableName, connection, key }) {
  (0, _assert.default)(connection, 'Rethinkdb `connection` should be set.');
  _assert.default.strictEqual(Object.getPrototypeOf(connection).constructor.name, 'TcpConnection');
  let result;
  if (key) {
    result = await _rethinkdb.default.
    db(databaseName).
    table(tableName).
    filter({ key: key }).
    coerceTo('array').
    run(connection);




    return result[0];
  } else {
    result = await _rethinkdb.default.
    db(databaseName).
    table(tableName).
    coerceTo('array').
    run(connection);
    return result;
  }
}

let requiredArgument = ['databaseName', 'tableName', 'connection', 'key'];
let curried = (0, _namedCurry.curryNamed)(requiredArgument, getTableDocumentAllParams);exports.curried = curried;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9xdWVyeS9nZXRUYWJsZURvY3VtZW50LnF1ZXJ5LmpzIl0sIm5hbWVzIjpbImdldFRhYmxlRG9jdW1lbnQiLCJkYXRhYmFzZU5hbWUiLCJ0YWJsZU5hbWUiLCJnZXRDb25kaXRpb24iLCJjb25uZWN0aW9uIiwia2V5IiwiYXNzZXJ0Iiwic3RyaWN0RXF1YWwiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNvbnN0cnVjdG9yIiwibmFtZSIsInJlc3VsdCIsInIiLCJkYiIsInRhYmxlIiwiZmlsdGVyIiwiY29lcmNlVG8iLCJydW4iLCJnZXRUYWJsZURvY3VtZW50QWxsUGFyYW1zIiwicmVxdWlyZWRBcmd1bWVudCIsImN1cnJpZWQiXSwibWFwcGluZ3MiOiI0TkFBQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNBLGdCQUFULENBQTBCQyxZQUExQixFQUF3Q0MsU0FBeEMsRUFBbUQ7QUFDL0MsU0FBTyxlQUFlQyxZQUFmLENBQTRCQyxVQUE1QixFQUF3Q0MsR0FBeEMsRUFBNkM7QUFDaEQseUJBQU9ELFVBQVAsRUFBbUIsdUNBQW5CO0FBQ0FFLG9CQUFPQyxXQUFQLENBQW1CQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JMLFVBQXRCLEVBQWtDTSxXQUFsQyxDQUE4Q0MsSUFBakUsRUFBdUUsZUFBdkU7QUFDQSxRQUFJQyxNQUFKO0FBQ0EsUUFBR1AsR0FBSCxFQUFRO0FBQ0pPLE1BQUFBLE1BQU0sR0FBRyxNQUFNQztBQUNWQyxNQUFBQSxFQURVLENBQ1BiLFlBRE87QUFFVmMsTUFBQUEsS0FGVSxDQUVKYixTQUZJO0FBR1ZjLE1BQUFBLE1BSFUsQ0FHSCxFQUFDWCxHQUFHLEVBQUVBLEdBQU4sRUFIRztBQUlWWSxNQUFBQSxRQUpVLENBSUQsT0FKQztBQUtWQyxNQUFBQSxHQUxVLENBS05kLFVBTE0sQ0FBZjs7Ozs7QUFVQSxhQUFPUSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0gsS0FaRCxNQVlPO0FBQ0hBLE1BQUFBLE1BQU0sR0FBRyxNQUFNQztBQUNWQyxNQUFBQSxFQURVLENBQ1BiLFlBRE87QUFFVmMsTUFBQUEsS0FGVSxDQUVKYixTQUZJO0FBR1ZlLE1BQUFBLFFBSFUsQ0FHRCxPQUhDO0FBSVZDLE1BQUFBLEdBSlUsQ0FJTmQsVUFKTSxDQUFmO0FBS0EsYUFBT1EsTUFBUDtBQUNIO0FBQ0osR0F4QkQ7QUF5Qkg7O0FBRUQsZUFBZU8seUJBQWYsQ0FBeUMsRUFBRWxCLFlBQUYsRUFBZ0JDLFNBQWhCLEVBQTJCRSxVQUEzQixFQUF1Q0MsR0FBdkMsRUFBekMsRUFBdUY7QUFDbkYsdUJBQU9ELFVBQVAsRUFBbUIsdUNBQW5CO0FBQ0FFLGtCQUFPQyxXQUFQLENBQW1CQyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JMLFVBQXRCLEVBQWtDTSxXQUFsQyxDQUE4Q0MsSUFBakUsRUFBdUUsZUFBdkU7QUFDQSxNQUFJQyxNQUFKO0FBQ0EsTUFBR1AsR0FBSCxFQUFRO0FBQ0pPLElBQUFBLE1BQU0sR0FBRyxNQUFNQztBQUNWQyxJQUFBQSxFQURVLENBQ1BiLFlBRE87QUFFVmMsSUFBQUEsS0FGVSxDQUVKYixTQUZJO0FBR1ZjLElBQUFBLE1BSFUsQ0FHSCxFQUFDWCxHQUFHLEVBQUVBLEdBQU4sRUFIRztBQUlWWSxJQUFBQSxRQUpVLENBSUQsT0FKQztBQUtWQyxJQUFBQSxHQUxVLENBS05kLFVBTE0sQ0FBZjs7Ozs7QUFVQSxXQUFPUSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQ0gsR0FaRCxNQVlPO0FBQ0hBLElBQUFBLE1BQU0sR0FBRyxNQUFNQztBQUNWQyxJQUFBQSxFQURVLENBQ1BiLFlBRE87QUFFVmMsSUFBQUEsS0FGVSxDQUVKYixTQUZJO0FBR1ZlLElBQUFBLFFBSFUsQ0FHRCxPQUhDO0FBSVZDLElBQUFBLEdBSlUsQ0FJTmQsVUFKTSxDQUFmO0FBS0EsV0FBT1EsTUFBUDtBQUNIO0FBQ0o7O0FBRUQsSUFBSVEsZ0JBQWdCLEdBQUcsQ0FBQyxjQUFELEVBQWlCLFdBQWpCLEVBQThCLFlBQTlCLEVBQTRDLEtBQTVDLENBQXZCO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLDRCQUFXRCxnQkFBWCxFQUE2QkQseUJBQTdCLENBQWQsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByIGZyb20gJ3JldGhpbmtkYidcbmltcG9ydCB7IGN1cnJ5TmFtZWQgfSBmcm9tICdAZGVwZW5kZW5jeS9uYW1lZEN1cnJ5J1xuaW1wb3J0IGFzc2VydCBmcm9tIFwiYXNzZXJ0XCJcblxuLy8gSU1QT1JUQU5UOiB3aGVuIGZhbHNlIHZhbHVlIChudWxsLCBlbXB0eSwgdW5kZWZpbmVkKSBpcyBwYXNzZWQgYXMga2V5LCB0aGUgcXVlcnkgd2lsbCBnZXQgYWxsIGtleXMgaW4gZGIgZG9jdW1lbnQuXG5mdW5jdGlvbiBnZXRUYWJsZURvY3VtZW50KGRhdGFiYXNlTmFtZSwgdGFibGVOYW1lKSB7XG4gICAgcmV0dXJuIGFzeW5jIGZ1bmN0aW9uIGdldENvbmRpdGlvbihjb25uZWN0aW9uLCBrZXkpIHtcbiAgICAgICAgYXNzZXJ0KGNvbm5lY3Rpb24sICdSZXRoaW5rZGIgYGNvbm5lY3Rpb25gIHNob3VsZCBiZSBzZXQuJylcbiAgICAgICAgYXNzZXJ0LnN0cmljdEVxdWFsKE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25uZWN0aW9uKS5jb25zdHJ1Y3Rvci5uYW1lLCAnVGNwQ29ubmVjdGlvbicpXG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmKGtleSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgclxuICAgICAgICAgICAgICAgIC5kYihkYXRhYmFzZU5hbWUpXG4gICAgICAgICAgICAgICAgLnRhYmxlKHRhYmxlTmFtZSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKHtrZXk6IGtleX0pXG4gICAgICAgICAgICAgICAgLmNvZXJjZVRvKCdhcnJheScpXG4gICAgICAgICAgICAgICAgLnJ1bihjb25uZWN0aW9uKVxuICAgICAgICAgICAgLy8gcmVzdWx0ID0gYXdhaXQgY3Vyc29yLnRvQXJyYXkoZnVuY3Rpb24oZXJyLCByZXN1bHQpIHsgLy8gY29udmVydCBjdXJzb3Igc3RyZWFtIHRvIGFuIGFycmF5LlxuICAgICAgICAgICAgLy8gICAgIGlmIChlcnIpIHRocm93IGVycjtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRbMF1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IHJcbiAgICAgICAgICAgICAgICAuZGIoZGF0YWJhc2VOYW1lKVxuICAgICAgICAgICAgICAgIC50YWJsZSh0YWJsZU5hbWUpXG4gICAgICAgICAgICAgICAgLmNvZXJjZVRvKCdhcnJheScpXG4gICAgICAgICAgICAgICAgLnJ1bihjb25uZWN0aW9uKVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRUYWJsZURvY3VtZW50QWxsUGFyYW1zKHsgZGF0YWJhc2VOYW1lLCB0YWJsZU5hbWUsIGNvbm5lY3Rpb24sIGtleSB9KSB7XG4gICAgYXNzZXJ0KGNvbm5lY3Rpb24sICdSZXRoaW5rZGIgYGNvbm5lY3Rpb25gIHNob3VsZCBiZSBzZXQuJylcbiAgICBhc3NlcnQuc3RyaWN0RXF1YWwoT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbm5lY3Rpb24pLmNvbnN0cnVjdG9yLm5hbWUsICdUY3BDb25uZWN0aW9uJylcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmKGtleSkge1xuICAgICAgICByZXN1bHQgPSBhd2FpdCByXG4gICAgICAgICAgICAuZGIoZGF0YWJhc2VOYW1lKVxuICAgICAgICAgICAgLnRhYmxlKHRhYmxlTmFtZSlcbiAgICAgICAgICAgIC5maWx0ZXIoe2tleToga2V5fSlcbiAgICAgICAgICAgIC5jb2VyY2VUbygnYXJyYXknKVxuICAgICAgICAgICAgLnJ1bihjb25uZWN0aW9uKVxuICAgICAgICAvLyByZXN1bHQgPSBhd2FpdCBjdXJzb3IudG9BcnJheShmdW5jdGlvbihlcnIsIHJlc3VsdCkgeyAvLyBjb252ZXJ0IGN1cnNvciBzdHJlYW0gdG8gYW4gYXJyYXkuXG4gICAgICAgIC8vICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgIC8vICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIC8vIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0WzBdXG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gYXdhaXQgclxuICAgICAgICAgICAgLmRiKGRhdGFiYXNlTmFtZSlcbiAgICAgICAgICAgIC50YWJsZSh0YWJsZU5hbWUpXG4gICAgICAgICAgICAuY29lcmNlVG8oJ2FycmF5JylcbiAgICAgICAgICAgIC5ydW4oY29ubmVjdGlvbilcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cbn1cblxubGV0IHJlcXVpcmVkQXJndW1lbnQgPSBbJ2RhdGFiYXNlTmFtZScsICd0YWJsZU5hbWUnLCAnY29ubmVjdGlvbicsICdrZXknIF0gLy8gY29tbWVudGVkIG91dCBhcmUgb3B0aW9uYWxcbmxldCBjdXJyaWVkID0gY3VycnlOYW1lZChyZXF1aXJlZEFyZ3VtZW50LCBnZXRUYWJsZURvY3VtZW50QWxsUGFyYW1zKSAvLyBcblxuZXhwb3J0IHsgZ2V0VGFibGVEb2N1bWVudCBhcyBkZWZhdWx0LCBjdXJyaWVkfSJdfQ==