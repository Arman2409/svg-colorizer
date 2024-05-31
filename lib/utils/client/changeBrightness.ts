import brightenColor from "../../../helpers/brightenColor";
import getColors from "./getColors";
import replace from "./replace";

const changeBrightness = (
    svgElement: Element, 
    factor: number):string => {
    if(!svgElement || typeof factor !== "number") {
        throw new Error("SVG HTML Element and brightness factor should be provided");
    }
        
    const colors = getColors(svgElement, false, true) as string[];
    
    // Get new replaceDetails with changed colors 
    const replaceDetails = colors.map((color:string) => {
        const newColor = brightenColor(color, factor);
        
        return {
            target: color,
            replace: newColor,
        }
    })
  
    return replace(svgElement, replaceDetails);
}

export default changeBrightness;