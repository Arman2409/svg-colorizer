const getColors = (element: Element, onlyParent?: boolean): {
    fill: string[],
    stroke: string[],
    stopColor: string[],
} => {
    const colors: {
        fill: Set<string>,
        stroke: Set<string>,
        stopColor: Set<string>,
    } = {
        fill: new Set(),
        stroke: new Set(),
        stopColor: new Set(),
    };

    let elements;

    if (onlyParent) elements = [element];
    else elements = element.querySelectorAll("*");

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
            colors.stopColor.add(element.getAttribute("stop-color") || "");
        }
    }

    const resultColors: {
        fill: string[],
        stroke: string[],
        stopColor: string[],
    } = {
        fill: [],
        stroke: [],
        stopColor: [],
    }
    // Convert Sets to arrays 
    resultColors.fill = Array.from(colors.fill);
    resultColors.stroke = Array.from(colors.stroke);
    resultColors.stopColor = Array.from(colors.stopColor);

    return resultColors;
};

export default getColors;