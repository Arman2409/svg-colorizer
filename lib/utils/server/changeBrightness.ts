import brightenColor from "../../../helpers/brightenColor";
import getColors from "./getColors";
import replace from "./replace";

const changeBrightness = (
    svgString: string, 
    factor: number):string => {
    if(!svgString || typeof factor !== "number") {
        throw new Error("SVG HTML Element and brightness factor should be provided");
    }
        
    const colors = getColors(svgString, false, true) as string[];
    
    const replaceDetails = colors.map((color:string) => {
        const newColor = brightenColor(color, factor);

        return {
            target: color,
            replace: newColor,
        }
    })
  
    return replace(svgString, replaceDetails);
}

export default changeBrightness;