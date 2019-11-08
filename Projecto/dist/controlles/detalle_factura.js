"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getfactura = getfactura;
exports.getfactuwhere = getfactuwhere;
exports.deletedetalle = deletedetalle;
exports.crearfactura = crearfactura;
exports.updatedoctor = updatedoctor;

var _detalle_factura = _interopRequireDefault(require("../model/detalle_factura"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getfactura(_x, _x2) {
  return _getfactura.apply(this, arguments);
}

function _getfactura() {
  _getfactura = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var factu;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _detalle_factura["default"].findAll({
              atributes: ['iddetalle', 'fecha', 'cobro', 'detalle']
            });

          case 2:
            factu = _context.sent;
            res.json({
              message: 'Datos',
              data: factu
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getfactura.apply(this, arguments);
}

;

function getfactuwhere(_x3, _x4) {
  return _getfactuwhere.apply(this, arguments);
}

function _getfactuwhere() {
  _getfactuwhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var iddetalle, factu;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            iddetalle = req.params.iddetalle;
            _context2.next = 3;
            return _detalle_factura["default"].findOne({
              where: {
                iddetalle: iddetalle
              },
              atributes: ['iddetalle', 'fecha', 'cobro', 'detalle']
            });

          case 3:
            factu = _context2.sent;
            res.json({
              message: 'Dato seleccionado',
              data: factu
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getfactuwhere.apply(this, arguments);
}

;

function deletedetalle(_x5, _x6) {
  return _deletedetalle.apply(this, arguments);
}

function _deletedetalle() {
  _deletedetalle = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var iddetalle, delet;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            iddetalle = req.params.iddetalle;
            _context3.next = 3;
            return deletedetalle.destroy({
              where: {
                iddetalle: iddetalle
              }
            });

          case 3:
            delet = _context3.sent;
            res.json({
              message: 'datos eliminados',
              count: delet
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deletedetalle.apply(this, arguments);
}

;

function crearfactura(_x7, _x8) {
  return _crearfactura.apply(this, arguments);
}

function _crearfactura() {
  _crearfactura = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, iddetalle, fecha, cobro, detalle, newdefac;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, iddetalle = _req$body.iddetalle, fecha = _req$body.fecha, cobro = _req$body.cobro, detalle = _req$body.detalle;
            _context4.prev = 1;
            _context4.next = 4;
            return _detalle_factura["default"].create({
              iddetalle: iddetalle,
              fecha: fecha,
              cobro: cobro,
              detalle: detalle
            }, {
              fields: ['iddetalle', 'fecha', 'cobro', 'detalle']
            });

          case 4:
            newdefac = _context4.sent;

            if (!newdefac) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'Insert Successfull',
              data: newdefac
            }));

          case 7:
            _context4.next = 13;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return _crearfactura.apply(this, arguments);
}

;

function updatedoctor(_x9, _x10) {
  return _updatedoctor.apply(this, arguments);
}

function _updatedoctor() {
  _updatedoctor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var iddetalle, _req$body2, fecha, cobro, detalle, upda;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            iddetalle = req.params.iddetalle;
            _req$body2 = req.body, fecha = _req$body2.fecha, cobro = _req$body2.cobro, detalle = _req$body2.detalle;
            _context6.next = 4;
            return _detalle_factura["default"].findAll({
              atributes: ['iddetalle', 'fecha', 'cobro', 'detalle'],
              where: {
                iddetalle: iddetalle
              }
            });

          case 4:
            upda = _context6.sent;

            if (upda.length > 0) {
              upda.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(upda) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return upda.update({
                            fecha: fecha,
                            cobro: cobro,
                            detalle: detalle
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x11) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'exito al actualizar',
              data: upda
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatedoctor.apply(this, arguments);
}

;