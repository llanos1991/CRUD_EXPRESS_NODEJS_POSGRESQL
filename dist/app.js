"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _projects = _interopRequireDefault(require("./routes/projects"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//imported route
var app = (0, _express["default"])(); //middlewares

app.use((0, _morgan["default"])('dev'));
app.use(json()); //routes

app.use('/api/projects', _projects["default"]);
app.use('/api/tasks', _tasks["default"]);
var _default = app; //https://www.youtube.com/watch?v=sA3t4d1v7OI&t=2739s

exports["default"] = _default;