import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const replace = (
    svg: Element,
    detailsArray: {
        target: string,
        replace: string
    }[],
    callback?: Function): void => {
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
    const updatedSVG = elemDOM.querySelector("svg") as Element;
    svg.outerHTML = updatedSVG.outerHTML;
    if (callback) callback();
}

export default replace;