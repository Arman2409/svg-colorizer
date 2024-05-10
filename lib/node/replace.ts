import getAllElementColors from "../../helpers/getAllElementColors";
import getColors from "./getColors";

const replace = (
    elemString: string,
    detailsArray: {
        target: string,
        replace: string
    }[],
    callback?: Function): string => {
    const colors = getColors(elemString);
    const colorsArr = getAllElementColors(colors);

    detailsArray.forEach(({ target, replace})=> {
        colorsArr.forEach(colorItem => {
            if(colorItem === target) {
                elemString = elemString.replaceAll(colorItem, replace);
            }
        })
    })

    if (callback) callback()
    return elemString;
}

export default replace;