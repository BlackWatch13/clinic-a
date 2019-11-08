"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getdoctor = getdoctor;
exports.creardoctor = creardoctor;
exports.getdoctorwhere = getdoctorwhere;
exports.deletedoctor = deletedoctor;
exports.updatedoctor = updatedoctor;

var _doctor = _interopRequireDefault(require("../model/doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//Select * from
function getdoctor(_x, _x2) {
  return _getdoctor.apply(this, arguments);
}

function _getdoctor() {
  _getdoctor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var doctors;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _doctor["default"].findAll({
              attributes: ['iddoctor', 'nombre', 'apellidos', 'Especialidad']
            });

          case 2:
            doctors = _context.sent;
            res.json({
              data: doctors
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getdoctor.apply(this, arguments);
}

; //Insert into 

function creardoctor(_x3, _x4) {
  return _creardoctor.apply(this, arguments);
}

function _creardoctor() {
  _creardoctor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body, iddoctor, nombre, apellidos, Especialidad, newdoctor;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body = req.body, iddoctor = _req$body.iddoctor, nombre = _req$body.nombre, apellidos = _req$body.apellidos, Especialidad = _req$body.Especialidad;
            _context2.prev = 1;
            _context2.next = 4;
            return _doctor["default"].create({
              iddoctor: iddoctor,
              nombre: nombre,
              apellidos: apellidos,
              Especialidad: Especialidad
            }, {
              fields: ['iddoctor', 'nombre', 'apellidos', 'Especialidad']
            });

          case 4:
            newdoctor = _context2.sent;

            if (!newdoctor) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: 'Insert Successfull',
              data: newdoctor
            }));

          case 7:
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'Error',
              data: {}
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 9]]);
  }));
  return _creardoctor.apply(this, arguments);
}

; //Select where id(table) from 

function getdoctorwhere(_x5, _x6) {
  return _getdoctorwhere.apply(this, arguments);
}

function _getdoctorwhere() {
  _getdoctorwhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var iddoctor, doctor1;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            iddoctor = req.params.iddoctor;
            _context3.next = 3;
            return _doctor["default"].findOne({
              where: {
                iddoctor: iddoctor
              },
              attributes: ['iddoctor', 'nombre', 'apellidos', 'Especialidad']
            });

          case 3:
            doctor1 = _context3.sent;
            res.json({
              data: doctor1
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getdoctorwhere.apply(this, arguments);
}

; //Delete where id(table) from

function deletedoctor(_x7, _x8) {
  return _deletedoctor.apply(this, arguments);
}

function _deletedoctor() {
  _deletedoctor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var iddoctor, deleteRowCount;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            iddoctor = req.params.iddoctor;
            _context4.next = 3;
            return _doctor["default"].destroy({
              where: {
                iddoctor: iddoctor
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
  return _deletedoctor.apply(this, arguments);
}

; //update where id

function updatedoctor(_x9, _x10) {
  return _updatedoctor.apply(this, arguments);
}

function _updatedoctor() {
  _updatedoctor = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var iddoctor, _req$body2, nombre, apellidos, Especialidad, doctor3;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            iddoctor = req.params.iddoctor;
            _req$body2 = req.body, nombre = _req$body2.nombre, apellidos = _req$body2.apellidos, Especialidad = _req$body2.Especialidad;
            _context6.next = 4;
            return _doctor["default"].findAll({
              attributes: ['iddoctor', 'nombre', 'apellidos', 'Especialidad'],
              where: {
                iddoctor: iddoctor
              }
            });

          case 4:
            doctor3 = _context6.sent;

            if (doctor3.length > 0) {
              doctor3.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(doctor3) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return doctor3.update({
                            nombre: nombre,
                            apellidos: apellidos,
                            Especialidad: Especialidad
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
              data: doctor3
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