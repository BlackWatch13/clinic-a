"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getreceta = getreceta;
exports.getrecetawhere = getrecetawhere;
exports.deletereceta = deletereceta;
exports.updaterecetas = updaterecetas;
exports.crearrecetas = crearrecetas;

var _receta = _interopRequireDefault(require("../model/receta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getreceta(_x, _x2) {
  return _getreceta.apply(this, arguments);
}

function _getreceta() {
  _getreceta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var rct;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _receta["default"].findAll({
              attributes: ['idrec', 'medicamento', 'nombpac', 'edad', 'sexo', 'dosis', 'formed', 'viadmi', 'cantpre', 'idconsulta']
            });

          case 2:
            rct = _context.sent;
            res.json({
              data: rct
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getreceta.apply(this, arguments);
}

;

function getrecetawhere(_x3, _x4) {
  return _getrecetawhere.apply(this, arguments);
}

function _getrecetawhere() {
  _getrecetawhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var idrec, rct1;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idrec = req.params.idrec;
            _context2.next = 3;
            return _receta["default"].findAll({
              where: {
                idrec: idrec
              }
            });

          case 3:
            rct1 = _context2.sent;
            res.json({
              data: rct1
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getrecetawhere.apply(this, arguments);
}

;

function deletereceta(_x5, _x6) {
  return _deletereceta.apply(this, arguments);
}

function _deletereceta() {
  _deletereceta = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var idrec, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idrec = req.params.idrec;
            _context3.next = 3;
            return _receta["default"].destroy({
              where: {
                idrec: idrec
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
  return _deletereceta.apply(this, arguments);
}

;

function updaterecetas(_x7, _x8) {
  return _updaterecetas.apply(this, arguments);
}

function _updaterecetas() {
  _updaterecetas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var idrec, _req$body, medicamento, nombpac, edad, sexo, dosis, formed, viadmi, cantpre, idconsulta, rect3;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            idrec = req.params.idrec;
            _req$body = req.body, medicamento = _req$body.medicamento, nombpac = _req$body.nombpac, edad = _req$body.edad, sexo = _req$body.sexo, dosis = _req$body.dosis, formed = _req$body.formed, viadmi = _req$body.viadmi, cantpre = _req$body.cantpre, idconsulta = _req$body.idconsulta;
            _context5.next = 4;
            return _receta["default"].findAll({
              attributes: ['idrec', 'medicamento', 'nombpac', 'edad', 'sexo', 'dosis', 'formed', 'viadmi', 'cantpre', 'idconsulta'],
              where: {
                idrec: idrec
              }
            });

          case 4:
            rect3 = _context5.sent;

            if (rect3.length > 0) {
              rect3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(rect3) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return rect3.update({
                            medicamento: medicamento,
                            nombpac: nombpac,
                            edad: edad,
                            sexo: sexo,
                            dosis: dosis,
                            formed: formed,
                            viadmi: viadmi,
                            cantpre: cantpre,
                            idconsulta: idconsulta
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
              data: rect3
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updaterecetas.apply(this, arguments);
}

;

function crearrecetas(_x9, _x10) {
  return _crearrecetas.apply(this, arguments);
}

function _crearrecetas() {
  _crearrecetas = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, idrec, medicamento, nombpac, edad, sexo, dosis, formed, viadmi, cantpre, idconsulta, newrect;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, idrec = _req$body2.idrec, medicamento = _req$body2.medicamento, nombpac = _req$body2.nombpac, edad = _req$body2.edad, sexo = _req$body2.sexo, dosis = _req$body2.dosis, formed = _req$body2.formed, viadmi = _req$body2.viadmi, cantpre = _req$body2.cantpre, idconsulta = _req$body2.idconsulta;
            _context6.prev = 1;
            _context6.next = 4;
            return _receta["default"].create({
              idrec: idrec,
              medicamento: medicamento,
              nombpac: nombpac,
              edad: edad,
              sexo: sexo,
              dosis: dosis,
              formed: formed,
              viadmi: viadmi,
              cantpre: cantpre,
              idconsulta: idconsulta
            }, {
              fields: ['idrec', 'medicamento', 'nombpac', 'edad', 'sexo', 'dosis', 'formed', 'viadmi', 'cantpre', 'idconsulta']
            });

          case 4:
            newrect = _context6.sent;

            if (!newuser) {
              _context6.next = 7;
              break;
            }

            return _context6.abrupt("return", res.json({
              message: 'Insert Successfull',
              data: newuser
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
  return _crearrecetas.apply(this, arguments);
}

;