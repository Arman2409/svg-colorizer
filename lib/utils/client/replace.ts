import tinycolor from "tinycolor2";

import getAllElementColors from "../../../helpers/getAllElementColors";
import getColors from "./getColors";
import requiresDOM from "../../../helpers/requiresDOM";
import type { ReplaceDetail } from "../../../types/global";

const replace = (
    svg: Element,
    detailsArray: ReplaceDetail[],
    callback?: Function): void => {
    if(!svg || typeof detailsArray !== "object") {
        throw new Error("SVG element and details array should be provided");
    }
    let elemString = svg.outerHTML;

    const colors = getColors(svg);
    const colorsArr = getAllElementColors(colors);

    detailsArray.forEach(({ target, replace})=> {
        colorsArr.forEach(colorItem => {
            // Check if valid data was provided for replacing 
            if(!target || !replace) {
                return console.error("Invalid data provided for color replacement");
            }

            if(colorItem === target || colorItem === tinycolor(colorItem).toHex()) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    // Create new SVG element with DOM Parser
    const domParser = new DOMParser();
    const elemDOM = domParser.parseFromString(`<html>${elemString}<html>`, "text/html");
    const updatedSVG = elemDOM.querySelector("svg") as Element;

    // Update the SVG element by updating it's outer HTMl 
    svg.outerHTML = updatedSVG.outerHTML;
    if (typeof callback === "function") callback();
}

export default  requiresDOM(replace);