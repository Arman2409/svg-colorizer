import extractColors from "../../lib/core/extractors/extractColors";
import invert from "../../lib/core/colorModifiers/invert";
import mockElement from "../utils/mockElement";

const FILL_COLOR = "#FF0000";
const INVERTED_COLOR = "#00ffff";

// Mock client and server side elements
const initialSVG = mockElement("svg", false, { fill: FILL_COLOR }) as Element;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as unknown as NodeListOf<Element>);


describe("invertAll", () => {
    test("all colors should be inverted", () => {
        invert(initialSVG);

        const colors = extractColors(initialSVG);

        expect(colors?.fill).toStrictEqual([INVERTED_COLOR]);
    });
});

describe("invertAll - server", () => {
    test("all colors should be inverted in SVG string", () => {
        Object.defineProperty(global, 'document', {
            value: undefined,
            writable: true,
        });

        const svgString = `<svg fill="${FILL_COLOR}"></svg>`;
        const result = invert(svgString) as string;

        expect(result.toLowerCase()).toContain(INVERTED_COLOR);
    });
});