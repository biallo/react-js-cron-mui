const _excluded = ["clearButton", "clearButtonProps", "clearButtonAction", "locale", "value", "setValue", "displayError", "onError", "className", "defaultPeriod", "allowEmpty", "humanizeLabels", "humanizeValue", "disabled", "readOnly", "leadingZero", "shortcuts", "clockFormat"];
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useRef } from 'react';
import { DEFAULT_LOCALE_EN } from './locale';
import './styles.css';
export default function Cron(props) {
  const {
      clearButton = true,
      clearButtonProps = {},
      clearButtonAction = 'fill-with-every',
      locale = DEFAULT_LOCALE_EN,
      value = '',
      setValue,
      displayError = true,
      onError,
      className,
      defaultPeriod = 'day',
      allowEmpty = 'for-default-value',
      humanizeLabels = true,
      humanizeValue = false,
      disabled = false,
      readOnly = false,
      leadingZero = false,
      shortcuts = ['@yearly', '@annually', '@monthly', '@weekly', '@daily', '@midnight', '@hourly'],
      clockFormat
    } = props,
    selectProps = _objectWithoutProperties(props, _excluded);
  const internalValueRef = useRef(value);
  return React.createElement("h1", null, "A");
}