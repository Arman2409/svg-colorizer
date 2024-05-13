import tinycolor from "tinycolor2";

const brightenColor =(
    colorString: string, 
    factor: number):any => {
        
    // Handle hex and rgb formats
    const match = colorString.match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
    if (match) {
        const rgbValues = match[1].split("").map(hex => parseInt(hex, 16));
        return `rgb(${brightenColorValues(rgbValues, factor).join(",")})`;
    } else {
        let rgbValues:any = colorString.match(/rgb\((\d+), (\d+), (\d+)\)/)
        if (rgbValues) {
            rgbValues =  rgbValues?.slice(1).map(Number);
            return `rgb(${brightenColorValues(rgbValues, factor).join(",")})`;
        } else {
            const rgb = tinycolor(colorString).toRgbString();
            if(rgb) return brightenColor(rgb, factor);
            throw new Error("Invalid color provided")
        }
    }
}

const brightenColorValues = (colorValues: number[], factor: number) => {
    return colorValues.map(value => {
        const newValue = Math.min(255, Math.round(value + factor * 255));
        return newValue.toString(16).padStart(2, "0"); // Ensure 2-digit hex string
    });
}

export default brightenColor;