import getColors from "../lib/getColors";
import replace from "../lib/replace";
import mockElement from "./utils/mockElement";

const MAIN_FILL_COLOR = "red";
const REPLACE_COLOR = "green";

const mainSVGElement = mockElement("svg", false, { fill: MAIN_FILL_COLOR }) as Element;
const replacedSVGElement = mockElement("svg", false, {fill: REPLACE_COLOR}) as Element;

const SVGString = mockElement("svg", true, { fill: MAIN_FILL_COLOR }) as string;

jest.spyOn(replacedSVGElement, 'querySelectorAll').mockReturnValue([replacedSVGElement] as any);

describe("replace", () => {
    test('should replace colors HTML SVG element', () => {
        replace(mainSVGElement, [{target: MAIN_FILL_COLOR, replace: "blue"}])
        const colors = getColors(replacedSVGElement);

        expect(colors?.fill).toStrictEqual([REPLACE_COLOR]);
    });

    test('should implement fill color for server side', () => {
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const replacedSVGString = replace(SVGString, [{target: MAIN_FILL_COLOR, replace: REPLACE_COLOR}])
        const colors = getColors(replacedSVGString);

        expect(colors?.fill).toStrictEqual([REPLACE_COLOR]);
    });

})