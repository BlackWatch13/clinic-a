"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var doctor = _db.sequelize.define('doctor', {
  iddoctor: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellidos: {
    type: _sequelize["default"].TEXT
  },
  Especialidad: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'doctor',
  timestamps: false
});

var _default = doctor;
exports["default"] = _default;