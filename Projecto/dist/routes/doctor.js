"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _doctor = require("../controlles/doctor.cont");

var router = (0, _express.Router)();
router.post('/', _doctor.creardoctor); //select * from

router.get('/', _doctor.getdoctor); //select from table where id(table) 

router.get('/:iddoctor', _doctor.getdoctorwhere); // delete from table where id(table)

router["delete"]('/:iddoctor', _doctor.deletedoctor); //update from table where id(table)

router.put('/:iddoctor', _doctor.updatedoctor);
var _default = router;
exports["default"] = _default;