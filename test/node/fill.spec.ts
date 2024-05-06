import getColors from "../../src/node/getColors";
import fill from "../../src/node/fill";
import mockElement from "../_utils/mockElement";

const FILL_COLOR = "red";

const mockedSVG = mockElement("svg", true, { fill: "blue" }) as string;

test('getColors should extract colors from SVG', () => {
    const filledSVG = fill(mockedSVG, FILL_COLOR);    
    const replacedColors = getColors(filledSVG);

    expect(replacedColors?.fill).toStrictEqual([FILL_COLOR]);
});