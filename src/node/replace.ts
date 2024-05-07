import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const replace = (
    elemString: string,
    color: string,
    ignoreColors?: string[],
    callback?: Function): string => {
    const colors = getColors(elemString);
    const colorsArr = getAllElementColors(colors);

    colorsArr.forEach(colorItem => {
        if (ignoreColors && ignoreColors?.includes(colorItem)) return;
        elemString = elemString.replaceAll(colorItem, color);
    })

    if (callback) callback()
    return elemString;
}

export default replace;