import requiresDOM from "../../helpers/requiresDOM";
import type { SvgColors, SvgColorsInSets } from "../../types/global";

const getColors = (
    element: Element,
    onlyParent?: boolean): SvgColors => {
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
        if (styleAttribute) {
            // Extract color values from inline styles
            const colorMatches = styleAttribute.match(/fill:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi);
            if (colorMatches) {
                colorMatches.forEach(color => colors.fill.add(color.slice(5)));
            }
        }

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

    return resultColors;
};

export default requiresDOM(getColors);