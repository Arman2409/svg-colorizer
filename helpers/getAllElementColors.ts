import type { SvgColors } from "../types/global";

const getAllElementColors = (elemColors:SvgColors) => {
    let allColors:string[] = [];
    // Destructure different categories of colors into one array 
    for(const colors of Object.values(elemColors) as string[]) {
       allColors = [...allColors, ...colors]
    }
    return allColors;
}

export default getAllElementColors;