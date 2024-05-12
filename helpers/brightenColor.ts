const brightenColor =(
    colorString: string, 
    factor: number) => {
        
    // Handle hex and rgb formats
    const match = colorString.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (match) {
        const rgbValues = match[1].split("").map(hex => parseInt(hex, 16));
        return `rgb(${brightenColorValues(rgbValues, factor).join(",")})`;
    } else {
        const rgbValues = colorString.match(/rgb\((\d+), (\d+), (\d+)\)/)?.slice(1).map(Number);
        if (rgbValues) {
            return `rgb(${brightenColorValues(rgbValues, factor).join(",")})`;
        }
    }
    throw new Error(`Unsupported color format: ${colorString}`);
}

const brightenColorValues = (colorValues: number[], factor: number) => {
    return colorValues.map(value => {
        const newValue = Math.min(255, Math.round(value + factor * 255));
        return newValue.toString(16).padStart(2, "0"); // Ensure 2-digit hex string
    });
}