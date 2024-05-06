import getColors from "../../src/client/getColors";
import mockElement from "../_utils/mockElement";

const FILL_COLOR = "red";

const mockedSVG = mockElement("svg", false) as Element;
const mockedPath = mockElement("path", false, { fill: FILL_COLOR });

jest.spyOn(mockedSVG, 'querySelectorAll').mockReturnValue([mockedSVG, mockedPath] as any);

test('getColors should extract colors from SVG', () => {
    const colors = getColors(mockedSVG);

    expect(colors?.fill).toStrictEqual([FILL_COLOR]);
});