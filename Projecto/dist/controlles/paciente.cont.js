"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getpaciente = getpaciente;
exports.crearpaciente = crearpaciente;
exports.getpacientewhere = getpacientewhere;
exports.deletepacientewhere = deletepacientewhere;
exports.updatepacientewhere = updatepacientewhere;
exports.getpacientewheresexo = getpacientewheresexo;

var _paciente = _interopRequireDefault(require("../model/paciente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getpaciente(_x, _x2) {
  return _getpaciente.apply(this, arguments);
}

function _getpaciente() {
  _getpaciente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var getpaciente;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _paciente["default"].findAll({
              attributes: ['idpaciente', 'nombre', 'apellido', 'telefono', 'edad', 'direccion', 'sexo']
            });

          case 2:
            getpaciente = _context.sent;
            res.json({
              data: getpaciente
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getpaciente.apply(this, arguments);
}

;

function crearpaciente(_x3, _x4) {
  return _crearpaciente.apply(this, arguments);
}

function _crearpaciente() {
  _crearpaciente = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, idpaciente, nombre, apellido, telefono, edad, direccion, sexo, newpaciente;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, idpaciente = _req$body.idpaciente, nombre = _req$body.nombre, apellido = _req$body.apellido, telefono = _req$body.telefono, edad = _req$body.edad, direccion = _req$body.direccion, sexo = _req$body.sexo;
            _context2.prev = 1;
            _context2.next = 4;
            return _paciente["default"].create({
              idpaciente: idpaciente,
              nombre: nombre,
              apellido: apellido,
              telefono: telefono,
              edad: edad,
              direccion: direccion,
              sexo: sexo
            }, {
              fields: ['idpaciente', 'nombre', 'apellido', 'telefono', 'edad', 'direccion', 'sexo']
            });

          case 4:
            newpaciente = _context2.sent;

            if (!newpaciente) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              mesage: "Insert successful",
              data: newpaciente
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'insert failed',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _crearpaciente.apply(this, arguments);
}

;

function getpacientewhere(_x5, _x6) {
  return _getpacientewhere.apply(this, arguments);
}

function _getpacientewhere() {
  _getpacientewhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var idpaciente, paciente1;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idpaciente = req.params.idpaciente;
            _context3.next = 3;
            return _paciente["default"].findAll({
              where: {
                idpaciente: idpaciente
              }
            });

          case 3:
            paciente1 = _context3.sent;
            res.json({
              data: paciente1
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getpacientewhere.apply(this, arguments);
}

;

function deletepacientewhere(_x7, _x8) {
  return _deletepacientewhere.apply(this, arguments);
}

function _deletepacientewhere() {
  _deletepacientewhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var idpaciente, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idpaciente = req.params.idpaciente;
            _context4.next = 3;
            return _paciente["default"].destroy({
              where: {
                idpaciente: idpaciente
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: 'Exito al eliminar',
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deletepacientewhere.apply(this, arguments);
}

;

function updatepacientewhere(_x9, _x10) {
  return _updatepacientewhere.apply(this, arguments);
} //reportes


function _updatepacientewhere() {
  _updatepacientewhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var idpaciente, _req$body2, nombre, apellido, telefono, edad, direccion, enferpade, alergias, sexo, paciente3;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            idpaciente = req.params.idpaciente;
            _req$body2 = req.body, nombre = _req$body2.nombre, apellido = _req$body2.apellido, telefono = _req$body2.telefono, edad = _req$body2.edad, direccion = _req$body2.direccion, enferpade = _req$body2.enferpade, alergias = _req$body2.alergias, sexo = _req$body2.sexo;
            _context6.next = 4;
            return _paciente["default"].findAll({
              attributes: ['idpaciente', 'nombre', 'apellido', 'telefono', 'edad', 'direccion', 'sexo'],
              where: {
                idpaciente: idpaciente
              }
            });

          case 4:
            paciente3 = _context6.sent;

            if (paciente3.length > 0) {
              paciente3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(paciente3) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return paciente3.update({
                            nombre: nombre,
                            apellido: apellido,
                            telefono: telefono,
                            edad: edad,
                            direccion: direccion,
                            sexo: sexo
                          });

                        case 2:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5);
                }));

                return function (_x13) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context6.abrupt("return", res.json({
              message: 'exito al actualizar',
              data: paciente3
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updatepacientewhere.apply(this, arguments);
}

function getpacientewheresexo(_x11, _x12) {
  return _getpacientewheresexo.apply(this, arguments);
}

function _getpacientewheresexo() {
  _getpacientewheresexo = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var sexo, paciente1;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            sexo = req.params.sexo;
            _context7.next = 3;
            return _paciente["default"].findAll({
              where: {
                sexo: sexo
              }
            });

          case 3:
            paciente1 = _context7.sent;
            res.json({
              data: paciente1
            });

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getpacientewheresexo.apply(this, arguments);
}

;