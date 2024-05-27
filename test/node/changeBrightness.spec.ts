import tinycolor from "tinycolor2";

import changeBrightness from "../../lib/node/changeBrightness";
import getColors from "../../lib/node/getColors";
import mockElement from "../utils/mockElement";
import type { SvgColors } from "../../types/global";

const initialValue = 100;
const changeAmout = 100;

const initialSVG = mockElement("svg", true, { fill: `rgb(${initialValue}, 0, 0)` }) as string;

test('should fill the SVG with given color', () => {
    const changedSVG = changeBrightness(initialSVG, changeAmout);

    const colors = getColors(
        changedSVG
    ) as SvgColors;

    const { _r: red } = new tinycolor(colors.fill[0]) as { _r?: string};
    
    expect(red).toEqual(initialValue + changeAmout);
});