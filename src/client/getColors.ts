const getColors = (svg:HTMLElement) => {
    const colors = new Set(); // Use a Set to avoid duplicates

    const elements = svg.querySelectorAll("*");
    
    for (const element of elements) {
        const styleAttribute = element.getAttribute("style");
        if (styleAttribute) {
            // Extract color values from inline styles
            const colorMatches = styleAttribute.match(/fill:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi);
            if (colorMatches) {
                colorMatches.forEach(color => colors.add(color.slice(5)));
            }
        }

        const fill = element.getAttribute("fill");
        const stroke = element.getAttribute("stroke");
        const stopColor = element.getAttribute("stop-color");

        if (fill) colors.add(fill);
        if (stroke) colors.add(stroke);
        if (stopColor) colors.add(stopColor);
    }

    return Array.from(colors); // Convert Set to an array
}

export default getColors;