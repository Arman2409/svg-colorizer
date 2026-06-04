import tinycolor from "tinycolor2";

const invertColor = (color: string): string => {
    const parsed = tinycolor(color);
    if (!parsed.isValid()) throw new Error(`Invalid color: ${color}`);

    const { r, g, b } = parsed.toRgb();
    const ir = 255 - r;
    const ig = 255 - g;
    const ib = 255 - b;

    return `#${ir.toString(16).padStart(2, "0")}${ig.toString(16).padStart(2, "0")}${ib.toString(16).padStart(2, "0")}`;
};

export default invertColor;