import getColors from "./getColors"
import invertColor from "./helpers/invert/invertColors";
import replace from "./replace";
import type { ReplaceDetail } from "./types/global";

const invertAll = (
    elementStringOrElement: SVGElement | Element | string,
) => {
    let allColors = getColors(elementStringOrElement, false, true);

    if (!Array.isArray(allColors)) {
        allColors = [];

        for (const colors of Object.values(allColors)) {
            allColors.push(...colors);
        }

    }

    const replaceDetails: ReplaceDetail[] = allColors.map((color: string) => (
        {
            target: color,
            replace: invertColor(color),
        }
    ));

    return replace(elementStringOrElement, replaceDetails);
}

export default invertAll;