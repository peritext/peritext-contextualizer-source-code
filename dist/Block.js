"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Block = ({
  resource
}) => {
  return _react.default.createElement("pre", null, _react.default.createElement("code", null, resource.data.html));
};

Block.contextTypes = {};
var _default = Block;
exports.default = _default;