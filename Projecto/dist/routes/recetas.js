"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _recetacont = require("../controlles/recetacont");

var router = (0, _express.Router)();
router.post('/', _recetacont.crearrecetas);
router.get('/', _recetacont.getreceta);
router.get('/:idrec', _recetacont.getrecetawhere);
router.get('/:nombdr', _recetacont.getrecetawheredr);
router.get('/:medicamento', _recetacont.getrecetawheremed);
router["delete"]('/:idrec', _recetacont.deletereceta);
router.put('/:idrec', _recetacont.updaterecetas);
var _default = router;
exports["default"] = _default;