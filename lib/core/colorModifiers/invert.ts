import extractColors from "../extractors/extractColors"
import invertColor from "../helpers/invert/invertColors";
import replace from "./replace";
import type { ReplaceDetail, SvgColors } from "../../types/global";

const invert = (
    elementStringOrElement: SVGElement | Element | string,
    callback?: () => void
) => {
    let allColors = extractColors(elementStringOrElement, false, true);

    if (!Array.isArray(allColors)) {
        allColors = [];

        for (const colors of Object.values(allColors as unknown as SvgColors)) {
            allColors.push(...colors);
        }

    }

    const replaceDetails: ReplaceDetail[] = allColors.map((color: string) => (
        {
            target: color,
            replace: invertColor(color),
        }
    ));

    return replace(elementStringOrElement, replaceDetails, callback);
}

export default invert;