"use strict";r.db("webapp").table("setting").get("unitKey").update({
  unitKey: r.row('unitKey').
  map(function (condition) {
    return r.branch(condition('expectedReturn').eq('true'),
    condition.merge({ this: true }),
    condition);
  }) });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS9xdWVyeS91cGRhdGVTdWJkb2N1bWVudC5xdWVyeS5qcyJdLCJuYW1lcyI6WyJyIiwiZGIiLCJ0YWJsZSIsImdldCIsInVwZGF0ZSIsInVuaXRLZXkiLCJyb3ciLCJtYXAiLCJjb25kaXRpb24iLCJicmFuY2giLCJlcSIsIm1lcmdlIiwidGhpcyJdLCJtYXBwaW5ncyI6ImFBQUFBLENBQUMsQ0FBQ0MsRUFBRixDQUFLLFFBQUwsRUFBZUMsS0FBZixDQUFxQixTQUFyQixFQUFnQ0MsR0FBaEMsQ0FBb0MsU0FBcEMsRUFBK0NDLE1BQS9DLENBQXNEO0FBQ3BEQyxFQUFBQSxPQUFPLEVBQUVMLENBQUMsQ0FBQ00sR0FBRixDQUFNLFNBQU47QUFDUkMsRUFBQUEsR0FEUSxDQUNKLFVBQVNDLFNBQVQsRUFBb0I7QUFDdkIsV0FBT1IsQ0FBQyxDQUFDUyxNQUFGLENBQVNELFNBQVMsQ0FBQyxnQkFBRCxDQUFULENBQTRCRSxFQUE1QixDQUErQixNQUEvQixDQUFUO0FBQ0xGLElBQUFBLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixFQUFDQyxJQUFJLEVBQUUsSUFBUCxFQUFoQixDQURLO0FBRUxKLElBQUFBLFNBRkssQ0FBUDtBQUdELEdBTFEsQ0FEMkMsRUFBdEQiLCJzb3VyY2VzQ29udGVudCI6WyJyLmRiKFwid2ViYXBwXCIpLnRhYmxlKFwic2V0dGluZ1wiKS5nZXQoXCJ1bml0S2V5XCIpLnVwZGF0ZSh7XG4gIHVuaXRLZXk6IHIucm93KCd1bml0S2V5JylcbiAgLm1hcChmdW5jdGlvbihjb25kaXRpb24pIHtcbiAgICByZXR1cm4gci5icmFuY2goY29uZGl0aW9uKCdleHBlY3RlZFJldHVybicpLmVxKCd0cnVlJyksXG4gICAgICBjb25kaXRpb24ubWVyZ2Uoe3RoaXM6IHRydWV9KSxcbiAgICAgIGNvbmRpdGlvbilcbiAgfSlcbn0pIl19