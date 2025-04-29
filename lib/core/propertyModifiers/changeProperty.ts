import modifyColor from "./modifyColor";
import getColors from "../extractors/extractColors";
import replace from "../colorModifiers/replace";
import type { ColorProperty } from "../../types/changeProperty";

const changeProperty = (
    svg: SVGElement | Element | string,
    factor: number,
    property: ColorProperty
): string | void => {
    // Check if DOM API is available  
    const isClient = document !== undefined;

    if (!svg || typeof factor !== "number") {
        throw new Error(`SVG ${isClient ? "HTML Element" : "string"} and brightness factor should be provided`);
    }

    const colors = getColors(svg, false, true) as string[];

    // Get new replaceDetails with changed colors 
    const replaceDetails = colors.map((color: string) => {
        const newColor = modifyColor(color, property, factor);

        return {
            target: color,
            replace: newColor,
        }
    })

    return replace(svg, replaceDetails);    
}

export default changeProperty;