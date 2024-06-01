import modifyColor from "../helpers/modifyColor";
import getColors from "./getColors";
import replace from "./replace";

const changeAlpha = (
    svg: Element | string,
    factor: number): string | void => {
    // Check if DOM API is available  
    const isClient = document !== undefined;

    if (!svg || typeof factor !== "number") {
        throw new Error(`SVG ${isClient ? "HTML Element" : "string"} and brightness factor should be provided`);
    }

    const colors = getColors(svg, false, true) as string[];

    // Get new replaceDetails with changed colors 
    const replaceDetails = colors.map((color: string) => {
        const newColor = modifyColor(color, "alpha", factor);

        return {
            target: color,
            replace: newColor,
        }
    })
    return replace(svg, replaceDetails);    
}

export default changeAlpha;