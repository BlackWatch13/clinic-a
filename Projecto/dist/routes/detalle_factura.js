"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _detalle_factura = require("../controlles/detalle_factura");

var router = (0, _express.Router)();
router.post('/', _detalle_factura.crearfactura);
router.get('/', _detalle_factura.getfactura);
router.get('/:iddetalle', _detalle_factura.getfactuwhere);
router["delete"]('/:iddetalle', _detalle_factura.deletedetalle);
router.put('/:iddetalle', _detalle_factura.updatedoctor);
var _default = router;
exports["default"] = _default;