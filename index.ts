import fill from "./lib/core/colorModifiers/fill";
import replace from "./lib/core/colorModifiers/replace";
import invert from "./lib/core/colorModifiers/invert";
import extractColors from "./lib/core/extractors/extractColors";
import generateRandomColor from "./lib/core/generators/generateRandomColor";
import { changeBrightness, changeAlpha, changeSaturation, changeHue } from "./lib/core/propertyModifiers/index";   

export type * from "./lib/types/global";

export {
    fill,
    replace,
    invert,
    extractColors,
    generateRandomColor,
    changeBrightness,
    changeAlpha,
    changeSaturation,
    changeHue
}

export default {
    fill,
    replace,
    invert,
    extractColors,
    generateRandomColor,
    changeBrightness,
    changeAlpha,
    changeSaturation,
    changeHue
}