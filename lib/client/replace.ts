import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const replace = (
    svg: Element,
    color: string,
    ignoreColors?: string[],
    callback?: Function): void => {
    const colors = getColors(svg);
    const colorsArr = getAllElementColors(colors);

    let elementString = svg.outerHTML;

    colorsArr.forEach(colorItem => {
        if (ignoreColors && ignoreColors?.includes(colorItem)) return;
        elementString = elementString.replaceAll(colorItem, color);
    })

    const domParser = new DOMParser();
    const elemDOM = domParser.parseFromString(`<html>${elementString}<html>`, "text/html");
    svg = elemDOM.querySelector("svg") as Element;
    if (callback) callback()
}

export default replace;