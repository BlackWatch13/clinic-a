"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _paciente = require("../controlles/paciente.cont");

var router = (0, _express.Router)();
router.post('/', _paciente.crearpaciente);
router.get('/', _paciente.getpaciente);
router.get('/:sexo', _paciente.getpacientewheresexo);
router.get('/:idpaciente', _paciente.getpacientewhere);
router["delete"]('/:idpaciente', _paciente.deletepacientewhere);
router.put('/:idpaciente', _paciente.updatepacientewhere);
var _default = router;
exports["default"] = _default;