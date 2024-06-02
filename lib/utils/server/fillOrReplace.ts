import { ReplaceDetail } from "../../../types/global";
import getColors from "./getColors";

const fillOrReplace = (
    elementString: string,
    operation: "fill" | "replace",
    color?: string,
    ignoreColors?: string[],
    replaceDetails?: ReplaceDetail[],
    callback?: Function
): string => {
    if (typeof elementString !== "string") {
        throw new Error("SVG string must be provided");
    }
    if(operation === "fill" && !color) {
        throw new Error("color for filling must be provided");
    }
    if(operation === "replace" && !replaceDetails) {
        throw new Error("replace details must be provided");
    }

    const colors = getColors(elementString, false, true) as string[];

    colors.forEach(colorItem => {
        // Check if the element has ignored colors 
        if (ignoreColors && ignoreColors?.includes(colorItem)) return;
        if (operation === "replace") {
            // Check if replace details are available for this color 
            const replaceDetail = replaceDetails?.find(detail => detail.target === colorItem);
            if (replaceDetail) {
                const { replace } = replaceDetail;
                if (replace) {
                    color = replace;
                }
            } else {
                return;
            }
        }
        // Replace all matches in the string 
        elementString = elementString.replace(colorItem, color as string);
    })

    if (typeof callback === "function") callback()
    return elementString;
}

export default fillOrReplace;