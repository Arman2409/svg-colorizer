import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";

const MAIN_FILL_COLOR = "red";
const CHILD_FILL_COLOR = "green";

// Mock client and server side elements
const mainSVGElement = mockElement("svg", false, { fill: MAIN_FILL_COLOR }) as Element;
const childSVGElement = mockElement("svg", false, { fill: CHILD_FILL_COLOR }) as Element;
const SVGString = mockElement("svg", true, { fill: MAIN_FILL_COLOR }) as string;

jest.spyOn(mainSVGElement, 'querySelectorAll').mockReturnValue([mainSVGElement, childSVGElement] as unknown as NodeListOf<Element>);

describe("extractColors", () => {
    test("returns client-side HTML SVG colors", () => {
        const colors = extractColors(mainSVGElement);

        expect(colors?.fill).toStrictEqual([MAIN_FILL_COLOR, CHILD_FILL_COLOR]);
    });

    test("returns server-side string SVG colors", () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const colors = extractColors(SVGString);

        expect(colors?.fill).toStrictEqual([MAIN_FILL_COLOR]);
    });

})