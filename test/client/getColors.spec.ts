import getColors from "../../src/client/getColors";
import mockElement from "../_utils/mockElement";

const mockedSVG = mockElement("svg");
const mockedPath = mockElement("path", { fill: "red" })

jest.spyOn(mockedSVG, 'querySelectorAll').mockReturnValue([mockedPath] as any);

test('getColors should extract colors from SVG', () => {
    const colors = getColors(mockedSVG);

    expect(colors).toEqual(['red']);
});