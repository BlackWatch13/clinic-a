"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var detalle_factura = _db.sequelize.define('detalle_factura', {
  iddetalle: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  fecha: {
    type: _sequelize["default"].TEXT
  },
  cobro: {
    type: _sequelize["default"].DECIMAL
  },
  detalle: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'detalle_factura',
  timestamps: false
});

var _default = detalle_factura;
exports["default"] = _default;