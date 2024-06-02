import getAllElementColors from "../../../helpers/getAllElementColors";
import getStyleValueFromLine from "../../../helpers/getStyleValueFromLine";
import type { SvgColors, SvgColorsInSets } from "../../../types/global";

const getColors = (
    element: Element,
    onlyParent?: boolean,
    asArray?: boolean): SvgColors | string[] => {
    if (!element) {
        throw new Error("SVG element should be provided");
    }
    const colors: SvgColorsInSets = {
        fill: new Set(),
        stroke: new Set(),
        stop: new Set(),
    };

    let elements;

    if (onlyParent) {
        elements = [element]
    } else {
        elements = element.querySelectorAll("*");
    }

    for (const element of elements) {
        const styleAttribute = element.getAttribute("style");

        // Extract color values from inline styles
        if (styleAttribute) {
            
            // Check for each possible style indicator !! this is not quite optimal and need updating
            if (styleAttribute.includes("fill")) {
                const color = getStyleValueFromLine(styleAttribute, "fill");
                colors.fill.add(color as string);
            }

            if (styleAttribute.includes("stroke")) {
                const color = getStyleValueFromLine(styleAttribute, "stroke");
                colors.stroke.add(color as string);
            }

            if (styleAttribute.includes("stop-color")) {
                const color = getStyleValueFromLine(styleAttribute, "stop-color");
                colors.stop.add(color as string);
            }
        }

        // Check for each possible style indicator !! this is not quite optimal and need updating
        if (element.hasAttribute("fill")) {
            colors.fill.add(element.getAttribute("fill") || "");
        }
        if (element.hasAttribute("stroke")) {
            colors.stroke.add(element.getAttribute("stroke") || "");
        }
        if (element.hasAttribute("stop-color")) {
            colors.stop.add(element.getAttribute("stop-color") || "");
        }
    }

    const resultColors: SvgColors = {
        fill: [],
        stroke: [],
        stop: [],
    }

    // Convert Sets to arrays 
    resultColors.fill = Array.from(colors.fill);
    resultColors.stroke = Array.from(colors.stroke);
    resultColors.stop = Array.from(colors.stop);

    if (asArray) return getAllElementColors(resultColors);
    return resultColors;
};

export default getColors;

