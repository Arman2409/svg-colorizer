import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const fill = (
    elementString: string,
    color: string,
    ignoreColors?: string[],
    callback?: Function): string => {
    if (typeof elementString !== "string" || typeof color !== "string") {
        throw new Error("SVG element and color should be provided");
    }

    const colors = getColors(elementString);
    const colorsArr = getAllElementColors(colors);
    colorsArr.forEach(colorItem => {
        if (ignoreColors && ignoreColors?.includes(colorItem)) return;
        elementString = elementString.replaceAll(colorItem, color);
    })

    if (callback) callback()
    return elementString;
}

export default fill;