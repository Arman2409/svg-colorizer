// src/client/getColors.ts
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
export {
  getColors_default as default
};
