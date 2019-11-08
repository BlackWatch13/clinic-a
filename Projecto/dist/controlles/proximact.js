"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getproximact = getproximact;
exports.getproxwhere = getproxwhere;
exports.deleteprox = deleteprox;
exports.crearprox = crearprox;
exports.updateprox = updateprox;

var _proximact = _interopRequireDefault(require("../model/proximact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getproximact(_x, _x2) {
  return _getproximact.apply(this, arguments);
}

function _getproximact() {
  _getproximact = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var proxi;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _proximact["default"].findAll({
              attributes: ['idproximact', 'fecha', 'hora', 'idpaciente', 'doctor', 'especialidad']
            });

          case 2:
            proxi = _context.sent;
            res.json({
              data: proxi
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getproximact.apply(this, arguments);
}

;

function getproxwhere(_x3, _x4) {
  return _getproxwhere.apply(this, arguments);
}

function _getproxwhere() {
  _getproxwhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var idproximact, prox;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            idproximact = req.params.idproximact;
            _context2.next = 3;
            return _proximact["default"].findAll({
              where: {
                idproximact: idproximact
              }
            });

          case 3:
            prox = _context2.sent;
            res.json({
              message: 'Valores solicitados',
              dat: prox
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getproxwhere.apply(this, arguments);
}

;

function deleteprox(_x5, _x6) {
  return _deleteprox.apply(this, arguments);
}

function _deleteprox() {
  _deleteprox = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var idproximact, delprox;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idproximact = req.params.idproximact;
            _context3.next = 3;
            return _proximact["default"].destroy({
              where: {
                idproximact: idproximact
              }
            });

          case 3:
            delprox = _context3.sent;
            res.json({
              message: 'delete successful',
              count: delprox
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteprox.apply(this, arguments);
}

;

function crearprox(_x7, _x8) {
  return _crearprox.apply(this, arguments);
}

function _crearprox() {
  _crearprox = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var _req$body, idproximact, fecha, hora, idpaciente, doctor, especialidad, prox;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _req$body = req.body, idproximact = _req$body.idproximact, fecha = _req$body.fecha, hora = _req$body.hora, idpaciente = _req$body.idpaciente, doctor = _req$body.doctor, especialidad = _req$body.especialidad;
            _context4.prev = 1;
            _context4.next = 4;
            return _proximact["default"].create({
              idproximact: idproximact,
              fecha: fecha,
              hora: hora,
              idpaciente: idpaciente,
              doctor: doctor,
              especialidad: especialidad
            }, {
              fields: ['idproximact', 'fecha', 'hora', 'idpaciente', 'doctor', 'especialidad']
            });

          case 4:
            prox = _context4.sent;

            if (!prox) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", res.json({
              message: 'Insert Successfull',
              data: prox
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
  return _crearprox.apply(this, arguments);
}

;

function updateprox(_x9, _x10) {
  return _updateprox.apply(this, arguments);
}

function _updateprox() {
  _updateprox = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var idproximact, _req$body2, fecha, hora, idpaciente, doctor, especialidad, prox3;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            idproximact = req.params.idproximact;
            _req$body2 = req.body, fecha = _req$body2.fecha, hora = _req$body2.hora, idpaciente = _req$body2.idpaciente, doctor = _req$body2.doctor, especialidad = _req$body2.especialidad;
            _context6.next = 4;
            return _proximact["default"].findAll({
              attributes: ['fecha', 'hora', 'idpaciente', 'doctor', 'especialidad'],
              where: {
                idproximact: idproximact
              }
            });

          case 4:
            prox3 = _context6.sent;

            if (prox3.length > 0) {
              prox3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(prox3) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return prox3.update({
                            fecha: fecha,
                            hora: hora,
                            idpaciente: idpaciente,
                            doctor: doctor,
                            especialidad: especialidad
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
              data: prox3
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateprox.apply(this, arguments);
}

;