"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var proximact = _db.sequelize.define('proximact', {
  idproximact: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  idconsulta: {
    type: _sequelize["default"].TEXT
  },
  fecha: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'proximact',
  timestamps: false
});

var _default = proximact;
exports["default"] = _default;