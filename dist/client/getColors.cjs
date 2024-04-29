"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/getColors.ts
var getColors_exports = {};
__export(getColors_exports, {
  default: () => getColors_default
});
module.exports = __toCommonJS(getColors_exports);
var getColors = (svg) => {
  const colors = /* @__PURE__ */ new Set();
  const elements = svg.querySelectorAll("*");
  for (const element of elements) {
    const styleAttribute = element.getAttribute("style");
    if (styleAttribute) {
      const colorMatches = styleAttribute.match(/fill:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi);
      if (colorMatches) {
        colorMatches.forEach((color) => colors.add(color.slice(5)));
      }
    }
    const fill = element.getAttribute("fill");
    const stroke = element.getAttribute("stroke");
    const stopColor = element.getAttribute("stop-color");
    if (fill || stroke || stopColor) {
      console.log(fill);
      console.log(stroke);
      console.log(stopColor);
    }
    if (fill)
      colors.add(fill);
    if (stroke)
      colors.add(stroke);
    if (stopColor)
      colors.add(stopColor);
  }
  return Array.from(colors);
};
var getColors_default = getColors;
