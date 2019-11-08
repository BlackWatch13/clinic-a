"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var expediente = _db.sequelize.define('expediente', {
  idexpe: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  idpaciente: {
    type: _sequelize["default"].TEXT
  },
  alergias: {
    type: _sequelize["default"].TEXT
  },
  enferpade: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'expediente',
  timestamps: false
});

var _default = expediente;
exports["default"] = _default;