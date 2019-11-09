"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var user = _db.sequelize.define('user', {
  iduser: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellido: {
    type: _sequelize["default"].TEXT
  },
  estado: {
    type: _sequelize["default"].INTEGER
  },
  especialidad: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'user',
  timestamps: false
});

var _default = user;
exports["default"] = _default;