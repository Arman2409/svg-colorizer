import getColors from "../../src/client/getColors";
import mockElement from "../_utils/mockElement";

const TEST_COLOR = "red";

const mockedSVG = mockElement("svg", false) as Element;
const mockedPath = mockElement("path", false, { fill: TEST_COLOR });

jest.spyOn(mockedSVG, 'querySelectorAll').mockReturnValue([mockedPath] as any);

test('getColors should extract colors from SVG', () => {
    const colors = getColors(mockedSVG);

    expect(colors?.fill).toStrictEqual([TEST_COLOR]);
});