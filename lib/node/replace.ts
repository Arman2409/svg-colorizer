import getAllElementColors from "../../helpers/getAllElementColors";
import type { ReplaceDetail } from "../../types/global";
import getColors from "./getColors";

const replace = (
    elemString: string,
    detailsArray: ReplaceDetail[],
    callback?: Function): string => {
    if (typeof elemString !== "string" || typeof detailsArray !== "object") {
        throw new Error("SVG element string and details array should be provided");
    }

    const colors = getColors(elemString);
    const colorsArr = getAllElementColors(colors);

    detailsArray.forEach(({ target, replace }) => {
        colorsArr.forEach(colorItem => {
            if (colorItem === target) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    if (callback) callback()
    return elemString;
}

export default replace;