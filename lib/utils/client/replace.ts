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
            if(!target || !replace) {
                return console.error("Invalid data provided for color replacement");
            }
            console.log(target, replace);
            
            if(colorItem === target) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    const domParser = new DOMParser();
    const elemDOM = domParser.parseFromString(`<html>${elemString}<html>`, "text/html");
    const updatedSVG = elemDOM.querySelector("svg") as Element;
    svg.outerHTML = updatedSVG.outerHTML;
    if (callback) callback();
}

export default  requiresDOM(replace);