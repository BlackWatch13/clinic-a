"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var consulta_hojaclinica = _db.sequelize.define('consulta_hojaclinica', {
  idconsulta: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].TEXT
  },
  hora: {
    type: _sequelize["default"].TEXT
  },
  motivo_consulta: {
    type: _sequelize["default"].TEXT
  },
  peso: {
    type: _sequelize["default"].DECIMAL
  },
  evaluacion: {
    type: _sequelize["default"].TEXT
  },
  examenes_slt: {
    type: _sequelize["default"].TEXT
  },
  idexpe: {
    type: _sequelize["default"].TEXT
  },
  iduser: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'hoja_clinica',
  timestamps: false
});

var _default = consulta_hojaclinica;
exports["default"] = _default;