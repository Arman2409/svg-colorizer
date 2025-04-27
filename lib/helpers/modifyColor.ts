import tinycolor from "tinycolor2";

const modifyColor = (
    colorString: string,
    property: "alpha" | "brightness",
    factor: number): string => {

    const rgbColor = tinycolor(colorString).toRgb();
    const { a:alpha, ...colorValues } = { ...rgbColor }

    // Add factor to each rgb property 
    for (let x in colorValues) {
        if(property === "brightness") {
            const colorValue = colorValues[x as keyof typeof colorValues] + factor;
            // Check if the color is in the range 
            const valueInRange = colorValue > 250 ? 250 : colorValue < 0 ? 0 : colorValue;
            rgbColor[x as keyof typeof rgbColor] = valueInRange;
        }
        if(property === "alpha") {
            rgbColor.a = alpha + factor;
        }
    }

    return tinycolor(rgbColor).toRgbString();
}

export default modifyColor;