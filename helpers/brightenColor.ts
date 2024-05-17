import tinycolor from "tinycolor2";

const brightenColor = (
    colorString: string,
    factor: number): string => {

    const rgbColor = tinycolor(colorString).toRgb();
    const { a, ...rest } = { ...rgbColor }
    const newColor = {
        r: 0, g: 0, b: 0
    };

    for (let x in rest) {
        const colorValue = rest[x as keyof typeof rest] + factor;
        const valueInRange = colorValue > 250 ? 250 : colorValue < 0 ? 0 : colorValue;
        newColor[x as keyof typeof newColor] = valueInRange;
    }

    return tinycolor(newColor).toRgbString();
}

export default brightenColor;