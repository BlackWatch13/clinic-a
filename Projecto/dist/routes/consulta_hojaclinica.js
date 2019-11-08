"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _consulta_hojaclinica = require("../controlles/consulta_hojaclinica.cont");

var router = (0, _express.Router)();
router.post('/', _consulta_hojaclinica.crearhoja);
router.get('/', _consulta_hojaclinica.gethoja);
router.get('/:idconsulta', _consulta_hojaclinica.gethojawhere);
router["delete"]('/:idconsulta', _consulta_hojaclinica.deletehoja);
router.put('/:idconsulta', _consulta_hojaclinica.update);
var _default = router;
exports["default"] = _default;