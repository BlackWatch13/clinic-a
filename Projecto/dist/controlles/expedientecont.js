"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getexpe = getexpe;
exports.getexpewhere = getexpewhere;
exports.deleteexpe = deleteexpe;
exports.updateexpe = updateexpe;
exports.crearexpe = crearexpe;

var _expediente = _interopRequireDefault(require("../model/expediente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getexpe(_x, _x2) {
  return _getexpe.apply(this, arguments);
}

function _getexpe() {
  _getexpe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var expe;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _expediente["default"].findAll({
              attributes: ['idexpe', 'idpaciente', 'alergias', 'enferpade']
            });

          case 2:
            expe = _context.sent;
            res.json({
              data: expe
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getexpe.apply(this, arguments);
}

;

function getexpewhere(_x3, _x4) {
  return _getexpewhere.apply(this, arguments);
}

function _getexpewhere() {
  _getexpewhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var idexpe, expe1;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idexpe = req.params.idexpe;
            _context2.next = 3;
            return _expediente["default"].findAll({
              where: {
                idexpe: idexpe
              }
            });

          case 3:
            expe1 = _context2.sent;
            res.json({
              data: expe1
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getexpewhere.apply(this, arguments);
}

;

function deleteexpe(_x5, _x6) {
  return _deleteexpe.apply(this, arguments);
}

function _deleteexpe() {
  _deleteexpe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var idexpe, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idexpe = req.params.idexpe;
            _context3.next = 3;
            return _expediente["default"].destroy({
              where: {
                idexpe: idexpe
              }
            });

          case 3:
            deleteRowCount = _context3.sent;
            res.json({
              message: 'Exito al eliminar',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteexpe.apply(this, arguments);
}

;

function updateexpe(_x7, _x8) {
  return _updateexpe.apply(this, arguments);
}

function _updateexpe() {
  _updateexpe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var idexpe, _req$body, idpaciente, alergias, enferpade, expe3;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idexpe = req.params.idexpe;
            _req$body = req.body, idpaciente = _req$body.idpaciente, alergias = _req$body.alergias, enferpade = _req$body.enferpade;
            _context5.next = 4;
            return _expediente["default"].findAll({
              attributes: ['idexpe', 'idpaciente', 'alergias', 'enferpade'],
              where: {
                idexpe: idexpe
              }
            });

          case 4:
            expe3 = _context5.sent;

            if (expe3.length > 0) {
              expe3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(expe3) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return expe3.update({
                            idpaciente: idpaciente,
                            alergias: alergias,
                            enferpade: enferpade
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.json({
              message: 'exito al actualizar',
              data: expe3
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateexpe.apply(this, arguments);
}

;

function crearexpe(_x9, _x10) {
  return _crearexpe.apply(this, arguments);
}

function _crearexpe() {
  _crearexpe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, idexpe, idpaciente, alergias, enferpade, newexpe;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, idexpe = _req$body2.idexpe, idpaciente = _req$body2.idpaciente, alergias = _req$body2.alergias, enferpade = _req$body2.enferpade;
            _context6.prev = 1;
            _context6.next = 4;
            return _expediente["default"].create({
              idexpe: idexpe,
              idpaciente: idpaciente,
              alergias: alergias,
              enferpade: enferpade
            }, {
              fields: ['idexpe', 'idpaciente', 'alergias', 'enferpade']
            });

          case 4:
            newexpe = _context6.sent;

            if (!newexpe) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'Insert Successfull',
              data: newexpe
            }));

          case 7:
            _context6.next = 13;
            break;

          case 9:
            _context6.prev = 9;
            _context6.t0 = _context6["catch"](1);
            console.log(_context6.t0);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[1, 9]]);
  }));
  return _crearexpe.apply(this, arguments);
}

;