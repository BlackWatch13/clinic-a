"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _usercont = require("../controlles/usercont");

var router = (0, _express.Router)();
router.post('/', _usercont.crearuser);
router.get('/', _usercont.getuser);
router.get('/:iduser', _usercont.getuserwhere);
router["delete"]('/:iduser', _usercont.deleteuser);
router.put('/:iduser', _usercont.updateuser);
var _default = router;
exports["default"] = _default;