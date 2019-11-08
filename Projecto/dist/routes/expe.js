"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _expedientecont = require("../controlles/expedientecont");

var router = (0, _express.Router)();
router.post('/', _expedientecont.crearexpe);
router.get('/', _expedientecont.getexpe);
router.get('/:idexpe', _expedientecont.getexpewhere);
router["delete"]('/:idexpe', _expedientecont.deleteexpe);
router.put('/:idexpe', _expedientecont.updateexpe);
var _default = router;
exports["default"] = _default;