"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _proximact = require("../controlles/proximact");

var router = (0, _express.Router)();
router.get('/', _proximact.getproximact);
router.get('/:idproximact', _proximact.getproxwhere);
router["delete"]('/:idproximact', _proximact.deleteprox);
router.post('/', _proximact.crearprox);
router.put('/:idproximact', _proximact.updateprox);
var _default = router;
exports["default"] = _default;