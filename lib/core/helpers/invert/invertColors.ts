const invertColor = (
    color: string
): string => {
    // Handle named colors, hex, or rgb formats
    let r: number, g: number, b: number;

    if (color.startsWith("#")) {
        // Hex color
        const hex = color.replace("#", "");
       
        r = parseInt(hex.length === 3 ? hex[0] + hex[0] : hex.slice(0, 2), 16);
        g = parseInt(hex.length === 3 ? hex[1] + hex[1] : hex.slice(2, 4), 16);
        b = parseInt(hex.length === 3 ? hex[2] + hex[2] : hex.slice(4, 6), 16);
    } else if (color.startsWith("rgb")) {
        // RGB color
        const matches = color.match(/\d+/g);
        if (!matches || matches.length < 3) throw new Error(`Invalid RGB color: ${color}`);
      
        r = parseInt(matches[0]);
        g = parseInt(matches[1]);
        b = parseInt(matches[2]);
    } else {
        // Named colors or unsupported formats (convert to hex via temporary element)
   
        const tempDiv = document.createElement("div");
        tempDiv.style.color = color;
        document.body.appendChild(tempDiv);
        const computedColor = getComputedStyle(tempDiv).color;
        document.body.removeChild(tempDiv);
        const matches = computedColor.match(/\d+/g);
        if (!matches || matches.length < 3) throw new Error(`Invalid color: ${color}`);
       
        r = parseInt(matches[0]);
        g = parseInt(matches[1]);
        b = parseInt(matches[2]);
    }

    // Invert the RGB values
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Return as hex color
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}

export default invertColor;