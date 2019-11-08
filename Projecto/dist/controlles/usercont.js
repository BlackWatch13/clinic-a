"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getuser = getuser;
exports.getuserwhere = getuserwhere;
exports.deleteuser = deleteuser;
exports.updateuser = updateuser;
exports.crearuser = crearuser;
exports.getuserestado = getuserestado;
exports.getuserespe = getuserespe;

var _user = _interopRequireDefault(require("../model/user"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getuser(_x, _x2) {
  return _getuser.apply(this, arguments);
}

function _getuser() {
  _getuser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findAll({
              attributes: ['iduser', 'nombre', 'apellido', 'estado', 'especialidad', 'pass']
            });

          case 2:
            users = _context.sent;
            res.json({
              data: users
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getuser.apply(this, arguments);
}

;

function getuserwhere(_x3, _x4) {
  return _getuserwhere.apply(this, arguments);
}

function _getuserwhere() {
  _getuserwhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var iduser, user1;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            iduser = req.params.iduser;
            _context2.next = 3;
            return _user["default"].findAll({
              where: {
                iduser: iduser
              }
            });

          case 3:
            user1 = _context2.sent;
            res.json({
              data: user1
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getuserwhere.apply(this, arguments);
}

;

function deleteuser(_x5, _x6) {
  return _deleteuser.apply(this, arguments);
}

function _deleteuser() {
  _deleteuser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var iduser, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            iduser = req.params.iduser;
            _context3.next = 3;
            return _user["default"].destroy({
              where: {
                iduser: iduser
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
  return _deleteuser.apply(this, arguments);
}

;

function updateuser(_x7, _x8) {
  return _updateuser.apply(this, arguments);
}

function _updateuser() {
  _updateuser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var iduser, _req$body, nombre, apellido, estado, especialidad, pass, user3;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            iduser = req.params.iduser;
            _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, estado = _req$body.estado, especialidad = _req$body.especialidad, pass = _req$body.pass;
            _context5.next = 4;
            return _user["default"].findAll({
              attributes: ['iduser', 'nombre', 'apellido', 'estado', 'especialidad', 'pass'],
              where: {
                iduser: iduser
              }
            });

          case 4:
            user3 = _context5.sent;

            if (user3.length > 0) {
              user3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee4(user3) {
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return user3.update({
                            nombre: nombre,
                            apellido: apellido,
                            estado: estado,
                            especialidad: especialidad,
                            pass: pass
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x15) {
                  return _ref.apply(this, arguments);
                };
              }());
            }

            return _context5.abrupt("return", res.json({
              message: 'exito al actualizar',
              data: user3
            }));

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateuser.apply(this, arguments);
}

;

function crearuser(_x9, _x10) {
  return _crearuser.apply(this, arguments);
}

function _crearuser() {
  _crearuser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var _req$body2, iduser, nombre, apellido, estado, especialidad, pass, newuser;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _req$body2 = req.body, iduser = _req$body2.iduser, nombre = _req$body2.nombre, apellido = _req$body2.apellido, estado = _req$body2.estado, especialidad = _req$body2.especialidad, pass = _req$body2.pass;
            _context6.prev = 1;
            _context6.next = 4;
            return _user["default"].create({
              iduser: iduser,
              nombre: nombre,
              apellido: apellido,
              estado: estado,
              especialidad: especialidad,
              pass: pass
            }, {
              fields: ['iduser', 'nombre', 'apellido', 'estado', 'especialidad', 'pass']
            });

          case 4:
            newuser = _context6.sent;

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
  return _crearuser.apply(this, arguments);
}

; // Saber cuantos son X rol where Estado = X

function getuserestado(_x11, _x12) {
  return _getuserestado.apply(this, arguments);
}

function _getuserestado() {
  _getuserestado = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee7(req, res) {
    var estado, user1;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            estado = req.params.estado;
            _context7.next = 3;
            return _user["default"].findAll({
              where: {
                estado: estado
              }
            });

          case 3:
            user1 = _context7.sent;
            res.json({
              data: user1
            });

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _getuserestado.apply(this, arguments);
}

;

function getuserespe(_x13, _x14) {
  return _getuserespe.apply(this, arguments);
}

function _getuserespe() {
  _getuserespe = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee8(req, res) {
    var especialidad, user1;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            especialidad = req.params.especialidad;
            _context8.next = 3;
            return _user["default"].findAll({
              where: {
                especialidad: especialidad
              }
            });

          case 3:
            user1 = _context8.sent;
            res.json({
              data: user1
            });

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));
  return _getuserespe.apply(this, arguments);
}

;