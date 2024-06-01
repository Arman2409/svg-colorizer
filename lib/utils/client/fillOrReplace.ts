import getAllElementColors from "../../../helpers/getAllElementColors";
import getStyleValueFromLine from "../../../helpers/getStyleValueFromLine";
import hasCommonElements from "../../../helpers/hasCommonElements";
import getColors from "./getColors";
import type { ReplaceDetail, SvgColors } from "../../../types/global";

const fillOrReplace = (
    svg: Element,
    operation: "fill" | "replace",
    color?: string,
    ignoreColors?: string[],
    replaceDetails?: ReplaceDetail[],
    callback?: Function): void => {
    if (!svg) {
        throw new Error("SVG element must be provided");
    }
    if (operation === "fill" && typeof color !== "string") {
        throw new Error("Argument 'color' must be provided");
    }
    if (operation === "replace" && typeof replaceDetails !== "object") {
        throw new Error("Argument 'detailsArray' must be provided");
    }

    // Get all child elements inside the element
    const elements = svg.querySelectorAll("*");

    for (const element of elements) {
        const elemColors = getColors(element, true) as SvgColors;

        // Check if the element has ignored colors 
        if (ignoreColors) {
            if (
                hasCommonElements(
                    getAllElementColors(elemColors),
                    ignoreColors
                )
            ) continue;
        }

        if (element.hasAttribute("style")) {
            const styleAttribute = element.getAttribute("style");

            if (styleAttribute) {
                Object.keys(elemColors).forEach((colorType: string) => {
                    if (styleAttribute.includes(colorType)) {
                        let currentColor = getStyleValueFromLine(styleAttribute, colorType);

                        if (operation === "replace") {
                            // Find the replace details for the given color 
                            const currReplaceDetail = replaceDetails?.find(({ target }) => currentColor === target);
                            if (currReplaceDetail) {
                                color = currReplaceDetail.replace;
                            } else {
                                return;
                            }
                        }
                        element.setAttribute("style", styleAttribute.replaceAll(currentColor as string, color as string))
                    }
                })

            }
        }
        for (const colorKey in elemColors) {
            // Check if the element has color defining attribute
            if (element.hasAttribute(colorKey)) {
                if (operation === "replace") {
                    const attribColor = element.getAttribute(colorKey);
                    // Find the replace details for the given color 
                    const currReplaceDetail = replaceDetails?.find(({ target }) => attribColor === target);
                    if (currReplaceDetail) {
                        element.setAttribute(colorKey, currReplaceDetail.replace);
                        continue;
                    }
                }
                color && element.setAttribute(colorKey, color);
            }
        }
    };

    if (typeof callback === "function") callback()
}

export default fillOrReplace;
