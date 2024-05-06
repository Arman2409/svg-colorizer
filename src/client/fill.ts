import getAllElementColors from "../../helpers/getAllElementColors";
import hasCommonElements from "../../helpers/hasCommonElements";
import getColors from "./getColors";

const fill = (
    svg: Element,
    color: string,
    ignoreColors?: string[],
    callback?: Function): void => {
    const elements = svg.querySelectorAll("*");

    for (const element of elements) {
        if (ignoreColors) {
            const elemColors = getColors(element, true);
            if (hasCommonElements(getAllElementColors(elemColors), ignoreColors)) {
                continue;
            }
        }

        element.setAttribute("style", `fill:${color}`);
    };

    if (callback) callback()
}

export default fill;