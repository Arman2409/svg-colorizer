import getColors from "./getColors";
import type { ReplaceDetail } from "../../types/global";

const replace = (
    elemString: string,
    detailsArray: ReplaceDetail[],
    callback?: Function): string => {
    if (typeof elemString !== "string" || typeof detailsArray !== "object") {
        throw new Error("SVG element string and details array should be provided");
    }

    const colors = getColors(elemString, false, true) as string[];

    detailsArray.forEach(({ target, replace }) => {
        colors.forEach(colorItem => {
            if (colorItem === target) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    if (callback) callback()
    return elemString;
}

export default replace;