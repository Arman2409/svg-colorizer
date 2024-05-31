import getAllElementColors from "../../../helpers/getAllElementColors";
import getStyleValueFromLine from "../../../helpers/getStyleValueFromLine";
import hasCommonElements from "../../../helpers/hasCommonElements";
import requiresDOM from "../../../helpers/requiresDOM";
import getColors from "./getColors";

const fill = (
    svg: Element,
    color: string,
    ignoreColors?: string[],
    callback?: Function): void => {
    if (!svg || typeof color !== "string") {
        throw new Error("SVG element and color should be provided");
    }

    const elements = svg.querySelectorAll("*");

    for (const element of elements) {
        const elemColors = getColors(element, true);  
        
        if (ignoreColors) {
            if (hasCommonElements(
                getAllElementColors(elemColors), ignoreColors
            )) {
                continue;
            }
        }
        if(element.hasAttribute("style")) {            
            const styleAttribute = element.getAttribute("style");

            if (styleAttribute) {      
                Object.keys(elemColors).forEach((colorType:string) => {
                    if (styleAttribute.includes(colorType)) {
                        const currentColor = getStyleValueFromLine(styleAttribute, colorType);
                        element.setAttribute("style", styleAttribute.replace(currentColor as string, color))
                    }
                })

            }
        }
        for (const colorKey in elemColors) {
            if(element.hasAttribute(colorKey)) {
                element.setAttribute(colorKey, `${color}`);
            }
        }
    };

    if (callback) callback()
}

export default requiresDOM(fill);
