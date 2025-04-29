import tinycolor from "tinycolor2";

import type { ColorProperty } from "../../../types/changeProperty";

const modifyColor = (
    colorString: string,
    property: ColorProperty,
    factor: number
): string => {
    const color = tinycolor(colorString);
    if (!color.isValid()) {
        throw new Error(`Invalid color string: ${colorString}`);
    }

   
    if (property === "hue" || property === "saturation") {
        const hslColor = color.toHsl();

        if (property === "hue") {
            // Adjust hue (0 to 360 range)
            let newHue = hslColor.h + factor;
            // Normalize hue to 0-360 (wrap around if negative or >360)
            newHue = ((newHue % 360) + 360) % 360;
            hslColor.h = newHue;
        } else if (property === "saturation") {
            // Adjust saturation (0 to 1 range)
            let newSaturation = hslColor.s + factor;
            // Clamp saturation between 0 and 1
            newSaturation = Math.max(0, Math.min(1, newSaturation));
            hslColor.s = newSaturation;
        }

        return tinycolor(hslColor).toRgbString();
    }

    const rgbColor = color.toRgb();
    const { a: alpha, ...colorValues } = { ...rgbColor };

    if (property === "brightness") {
        // Add factor to each RGB property
        for (let x in colorValues) {
            const colorValue = colorValues[x as keyof typeof colorValues] + factor;
            // Clamp RGB values between 0 and 255
            const valueInRange = Math.max(0, Math.min(255, colorValue));
            rgbColor[x as keyof typeof rgbColor] = valueInRange;
        }
    }

    if (property === "alpha") {
        // Adjust alpha (0 to 1 range)
        let newAlpha = alpha + factor;
        newAlpha = Math.max(0, Math.min(1, newAlpha));
        rgbColor.a = newAlpha;
    }

    return tinycolor(rgbColor).toRgbString();
};

export default modifyColor;