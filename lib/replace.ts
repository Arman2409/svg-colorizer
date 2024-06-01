import tinycolor from "tinycolor2";

import getAllElementColors from "../helpers/getAllElementColors";
import fill from "./utils/client/fillOrReplace";
import getColors from "./getColors";
import type { ReplaceDetail, SvgColors } from "../types/global";

const replace = (
    svg: Element | string,
    detailsArray: ReplaceDetail[],
    callback?: Function): string|void => {

    // Check if DOM API is available  
    const isClient = document !== undefined;

    if (!svg || typeof detailsArray !== "object") {
        throw new Error(`SVG ${isClient ? "HTML Element" : "string"} and details array should be provided`);
    }

    if(isClient) return fill(svg as Element, "replace", undefined, undefined, detailsArray, callback);

    const colors = getColors(svg);
    const colorsArr = getAllElementColors(colors as SvgColors);

    detailsArray.forEach(({ target, replace }) => {
        colorsArr.forEach(colorItem => {
            // Check if valid data was provided for replacing 
            if (!target || !replace) {
                return console.error("Invalid data provided for color replacement");
            }

            if (colorItem === target || colorItem === tinycolor(colorItem).toHex()) {
                svg = (svg as string).replaceAll(colorItem, replace);
            }
        })
    })

    if (typeof callback === "function") callback();
    if (!isClient) return svg as string;
}

export default replace;