"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Cron;
var _react = _interopRequireWildcard(require("react"));
var _locale = require("./locale");
require("./styles.css");
var _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "allowEmpty", "humanizeLabels", "humanizeValue", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Cron(props) {
  var _props$clearButton = props.clearButton,
    clearButton = _props$clearButton === void 0 ? true : _props$clearButton,
    _props$clearButtonPro = props.clearButtonProps,
    clearButtonProps = _props$clearButtonPro === void 0 ? {} : _props$clearButtonPro,
    _props$clearButtonAct = props.clearButtonAction,
    clearButtonAction = _props$clearButtonAct === void 0 ? 'fill-with-every' : _props$clearButtonAct,
    _props$locale = props.locale,
    locale = _props$locale === void 0 ? _locale.DEFAULT_LOCALE_EN : _props$locale,
    _props$value = props.value,
    value = _props$value === void 0 ? '' : _props$value,
    setValue = props.setValue,
    _props$displayError = props.displayError,
    displayError = _props$displayError === void 0 ? true : _props$displayError,
    onError = props.onError,
    className = props.className,
    _props$defaultPeriod = props.defaultPeriod,
    defaultPeriod = _props$defaultPeriod === void 0 ? 'day' : _props$defaultPeriod,
    _props$allowEmpty = props.allowEmpty,
    allowEmpty = _props$allowEmpty === void 0 ? 'for-default-value' : _props$allowEmpty,
    _props$humanizeLabels = props.humanizeLabels,
    humanizeLabels = _props$humanizeLabels === void 0 ? true : _props$humanizeLabels,
    _props$humanizeValue = props.humanizeValue,
    humanizeValue = _props$humanizeValue === void 0 ? false : _props$humanizeValue,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$readOnly = props.readOnly,
    readOnly = _props$readOnly === void 0 ? false : _props$readOnly,
    _props$leadingZero = props.leadingZero,
    leadingZero = _props$leadingZero === void 0 ? false : _props$leadingZero,
    _props$shortcuts = props.shortcuts,
    shortcuts = _props$shortcuts === void 0 ? ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'] : _props$shortcuts,
    clockFormat = props.clockFormat,
    selectProps = _objectWithoutProperties(props, _excluded);
  var internalValueRef = (0, _react.useRef)(value);
  return _react["default"].createElement("h1", null, "A");
}