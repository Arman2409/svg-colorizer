import getColors from "../dist/client/getColors.js";
import fill from "../dist/client/fill.js";

const svg = document.querySelector("svg");
console.log(getColors(svg));
fill(svg, "green", ["white", "#FFFFFF"]);
