"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _db = require("../db/db");

var _consulta_hojaclinica = _interopRequireDefault(require("./consulta_hojaclinica"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var paciente = _db.sequelize.define('paciente', {
  idpaciente: {
    type: _sequelize["default"].TEXT,
    primaryKey: true
  },
  nombre: {
    type: _sequelize["default"].TEXT
  },
  apellidos: {
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
  enferpade: {
    type: _sequelize["default"].TEXT
  },
  alergias: {
    type: _sequelize["default"].TEXT
  },
  sexo: {
    type: _sequelize["default"].TEXT
  }
}, {
  tableName: 'paciente',
  timestamps: false
}); //agregar relacion antes de exportar
//paciente.hasMany(consulta_hojaclinica,{foreingKey: 'idpaciente', sourceKey: 'idconsulta' });
//consulta_hojaclinica.belongTo(paciente,{foreingKey: 'idpaciente', sourceKey:'idconsulta'});


var _default = paciente;
exports["default"] = _default;