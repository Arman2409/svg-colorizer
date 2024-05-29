import getColors from "../lib/getColors";
import mockElement from "./utils/mockElement";

const MAIN_FILL_COLOR = "red";
const CHILD_FILL_COLOR = "green";

const mainSVGElement = mockElement("svg", false, { fill: MAIN_FILL_COLOR }) as Element;
const childSVGElement = mockElement("svg", false, { fill: CHILD_FILL_COLOR }) as Element;
const SVGString = mockElement("svg", true, { fill: MAIN_FILL_COLOR }) as string;

jest.spyOn(mainSVGElement, 'querySelectorAll').mockReturnValue([mainSVGElement, childSVGElement] as any);

describe("getColors", () => {
    test('should return colors HTML SVG element', () => {
        const colors = getColors(mainSVGElement);

        expect(colors?.fill).toStrictEqual([MAIN_FILL_COLOR, CHILD_FILL_COLOR]);
    });

    test('should implement fill color for server side', () => {
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const colors = getColors(SVGString);

        expect(colors?.fill).toStrictEqual([MAIN_FILL_COLOR]);
    });

})