import getColors from "../../src/node/getColors";
import mockElement from "../_utils/mockElement";

const TEST_COLOR = "red";

const mockedSVGString = mockElement("svg", true, { fill: TEST_COLOR }) as string;

test('getColors should extract colors from SVG', () => {
    const colors = getColors(mockedSVGString);

    expect(colors?.fill).toStrictEqual([TEST_COLOR]);
});