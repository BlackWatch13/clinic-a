"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _paciente = _interopRequireDefault(require("./routes/paciente"));

var _consulta_hojaclinica = _interopRequireDefault(require("./routes/consulta_hojaclinica"));

var _proximact = _interopRequireDefault(require("./routes/proximact"));

var _user = _interopRequireDefault(require("./routes/user"));

var _expe = _interopRequireDefault(require("./routes/expe"));

var _recetas = _interopRequireDefault(require("./routes/recetas"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//importamos rutas
//iniciamos
var app = (0, _express["default"])();
app.use((0, _morgan["default"])('dev'));
app.use((0, _express.json)()); //rutas

app.use('/api/pacientes', _paciente["default"]);
app.use('/api/hoja', _consulta_hojaclinica["default"]);
app.use('/api/proxima', _proximact["default"]);
app.use('/api/user', _user["default"]);
app.use('/api/expe', _expe["default"]);
app.use('/api/recetas', _recetas["default"]);
var _default = app;
exports["default"] = _default;