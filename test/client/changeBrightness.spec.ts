import tinycolor from "tinycolor2";

import changeBrightness from "../../lib/client/changeBrightness";
import getColors from "../../lib/client/getColors";
import mockElement from "../utils/mockElement";
import type { SvgColors } from "../../types/global";

const initialValue = 100;
const changeAmout = 100;

const initialSVG = mockElement("svg", false, { fill: `rgb(${initialValue}, 0, 0)` }) as Element;
const changedSVG = mockElement("svg", false, { fill:  `rgb(${initialValue + changeAmout}, 0, 0)`}) as Element;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);
jest.spyOn(changedSVG, 'querySelectorAll').mockReturnValue([changedSVG] as any);

test('should fill the SVG with given color', () => {
    changeBrightness(initialSVG, changeAmout);

    const colors = getColors(
        changedSVG
    ) as SvgColors;

    const { _r: red } = new tinycolor(colors.fill[0]) as { _r?: string};
    
    expect(red).toEqual(initialValue + changeAmout);
});