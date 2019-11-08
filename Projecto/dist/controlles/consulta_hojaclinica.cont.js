"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearhoja = crearhoja;
exports.gethoja = gethoja;
exports.gethojawhere = gethojawhere;
exports.deletehoja = deletehoja;
exports.update = update;

var _consulta_hojaclinica = _interopRequireDefault(require("../model/consulta_hojaclinica"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*Suerte cuando estes intentando comprender lo que hice,
cuando lo escribi estaba medio dormido y bueno todo tenia sentido para mi.
*/
function crearhoja(_x, _x2) {
  return _crearhoja.apply(this, arguments);
}

function _crearhoja() {
  _crearhoja = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, idconsulta, idpaciente, iddoctor, fecha, motivo_consulta, peso, evaluacion, examenes_slt, prescripcion_fc, newhoja;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, idconsulta = _req$body.idconsulta, idpaciente = _req$body.idpaciente, iddoctor = _req$body.iddoctor, fecha = _req$body.fecha, motivo_consulta = _req$body.motivo_consulta, peso = _req$body.peso, evaluacion = _req$body.evaluacion, examenes_slt = _req$body.examenes_slt, prescripcion_fc = _req$body.prescripcion_fc;
            _context.prev = 1;
            _context.next = 4;
            return _consulta_hojaclinica["default"].create({
              idconsulta: idconsulta,
              idpaciente: idpaciente,
              iddoctor: iddoctor,
              fecha: fecha,
              motivo_consulta: motivo_consulta,
              peso: peso,
              evaluacion: evaluacion,
              examenes_slt: examenes_slt,
              prescripcion_fc: prescripcion_fc
            }, {
              fields: ['idconsulta', 'idpaciente', 'iddoctor', 'fecha', 'motivo_consulta', 'peso', 'evaluacion', 'examenes_slt', 'prescripcion_fc']
            });

          case 4:
            newhoja = _context.sent;

            if (!newhoja) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.json({
              mesage: "Insert successful into consulta_hojaclinica",
              data: newhoja
            }));

          case 7:
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'insert failed',
              data: {}
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 9]]);
  }));
  return _crearhoja.apply(this, arguments);
}

;

function gethoja(_x3, _x4) {
  return _gethoja.apply(this, arguments);
}

function _gethoja() {
  _gethoja = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var hoja;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _consulta_hojaclinica["default"].findAll({
              atributes: ['idconsulta', 'idpaciente', 'iddoctor', 'fecha', 'motivo_consulta', 'peso', 'evaluacion', 'examenes_slt', 'prescripcion_fc']
            });

          case 2:
            hoja = _context2.sent;
            res.json({
              data: hoja
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _gethoja.apply(this, arguments);
}

;

function gethojawhere(_x5, _x6) {
  return _gethojawhere.apply(this, arguments);
}

function _gethojawhere() {
  _gethojawhere = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var idconsulta, hoja;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            idconsulta = req.params.idconsulta;
            _context3.next = 3;
            return _consulta_hojaclinica["default"].findOne({
              were: {
                idconsulta: idconsulta
              },
              atributes: ['idconsulta', 'idpaciente', 'iddoctor', 'fecha', 'motivo_consulta', 'peso', 'evaluacion', 'examenes_slt', 'prescripcion_fc']
            });

          case 3:
            hoja = _context3.sent;
            res.json({
              data: hoja
            });

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _gethojawhere.apply(this, arguments);
}

;

function deletehoja(_x7, _x8) {
  return _deletehoja.apply(this, arguments);
}

function _deletehoja() {
  _deletehoja = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var idconsulta, deletehoja;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            idconsulta = req.params.idconsulta;
            _context4.next = 3;
            return _consulta_hojaclinica["default"].destroy({
              where: {
                idconsulta: idconsulta
              }
            });

          case 3:
            deletehoja = _context4.sent;
            res.json({
              message: 'Exito al eliminar',
              count: deletehoja
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deletehoja.apply(this, arguments);
}

;

function update(_x9, _x10) {
  return _update.apply(this, arguments);
}

function _update() {
  _update = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee6(req, res) {
    var idconsulta, _req$body2, idpaciente, iddoctor, fecha, motivo_consulta, peso, evaluacion, examenes_slt, prescripcion_fc, hoja;

    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            idconsulta = req.params.idconsulta;
            _req$body2 = req.body, idpaciente = _req$body2.idpaciente, iddoctor = _req$body2.iddoctor, fecha = _req$body2.fecha, motivo_consulta = _req$body2.motivo_consulta, peso = _req$body2.peso, evaluacion = _req$body2.evaluacion, examenes_slt = _req$body2.examenes_slt, prescripcion_fc = _req$body2.prescripcion_fc;
            _context6.next = 4;
            return _consulta_hojaclinica["default"].findAll({
              attributes: ['idconsulta', 'idpaciente', 'iddoctor', 'fecha', 'motivo_consulta', 'peso', 'evaluacion', 'examenes_slt', 'prescripcion_fc'],
              where: {
                idconsulta: idconsulta
              }
            });

          case 4:
            hoja = _context6.sent;

            if (hoja.length > 0) {
              hoja.forEach(
              /*#__PURE__*/
              function () {
                var _ref = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee5(hoja) {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.next = 2;
                          return hoja.update({
                            idpaciente: idpaciente,
                            iddoctor: iddoctor,
                            fecha: fecha,
                            motivo_consulta: motivo_consulta,
                            peso: peso,
                            evaluacion: evaluacion,
                            examenes_slt: examenes_slt,
                            prescripcion_fc: prescripcion_fc
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
              data: hoja
            }));

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _update.apply(this, arguments);
}