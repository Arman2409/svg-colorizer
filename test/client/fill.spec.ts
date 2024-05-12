import fill from "../../lib/client/fill";
import getColors from "../../lib/client/getColors";
import mockElement from "../_utils/mockElement";

const FILL_COLOR = "red";

const initialSVG = mockElement("svg", false, { fill: "green" }) as Element;
const filledSVG = mockElement("svg", false, { fill: FILL_COLOR }) as Element;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);
jest.spyOn(filledSVG, 'querySelectorAll').mockReturnValue([filledSVG] as any);

test('should fill the SVG with given color', () => {
    fill(initialSVG, FILL_COLOR);
    const filledColors = getColors(filledSVG);

    expect(filledColors?.fill).toStrictEqual([FILL_COLOR]);
});
