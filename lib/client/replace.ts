import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const replace = (
    svg: Element,
    detailsArray: {
        target: string,
        replace: string
    }[],
    callback?: Function): Element => {
    let elemString = svg.outerHTML;

    const colors = getColors(svg);
    const colorsArr = getAllElementColors(colors);

    detailsArray.forEach(({ target, replace})=> {
        colorsArr.forEach(colorItem => {
            if(colorItem === target) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    const domParser = new DOMParser();
    const elemDOM = domParser.parseFromString(`<html>${elemString}<html>`, "text/html");
    svg = elemDOM.querySelector("svg") as Element;
    if (callback) callback();
    return svg;
}

export default replace;