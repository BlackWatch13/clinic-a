"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var paciente = _db.sequelize.define('paciente', {
  idpaciente: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellido: {
    type: _sequelize["default"].TEXT
  },
  telefono: {
    type: _sequelize["default"].TEXT
  },
  edad: {
    type: _sequelize["default"].INTEGER
  },
  direccion: {
    type: _sequelize["default"].TEXT
  },
  sexo: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'pacientes',
  timestamps: false
});

var _default = paciente;
exports["default"] = _default;