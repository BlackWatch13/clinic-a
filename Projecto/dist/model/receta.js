"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var receta = _db.sequelize.define('receta', {
  idrec: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  medicamento: {
    type: _sequelize["default"].TEXT
  },
  nombdr: {
    type: _sequelize["default"].TEXT
  },
  nombpac: {
    type: _sequelize["default"].TEXT
  },
  edad: {
    type: _sequelize["default"].INTEGER
  },
  sexo: {
    type: _sequelize["default"].TEXT
  },
  dosis: {
    type: _sequelize["default"].TEXT
  },
  formed: {
    type: _sequelize["default"].TEXT
  },
  viadmi: {
    type: _sequelize["default"].TEXT
  },
  cantpre: {
    type: _sequelize["default"].TEXT
  },
  idconsulta: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'recetas',
  timestamps: false
});

var _default = receta;
exports["default"] = _default;