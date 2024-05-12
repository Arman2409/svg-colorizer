import getColors from "./getColors";
import replace from "./replace";

const changeBrightness = (
    svg: Element, 
    factor: number):void => {
    if(!svg || typeof factor !== "number") {
        throw new Error("SVG HTML Element and brightness factor should be provided");
    }
        
    const colors = getColors(svg, false, true);
    
    const replaceDetails = colors.map((color:string) => {
        const newColor = brightenColor(color, factor);
        return {
            target: color,
            replace: newColor,
        }
    })
  
    replace(svg, replaceDetails)
}

export default changeBrightness;