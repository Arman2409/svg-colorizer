import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";
import type { SvgColors } from "../../lib/types/global";

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

    test("extracts stroke attribute colors", () => {
        const el = mockElement("svg", false, { stroke: "blue" }) as Element;
        jest.spyOn(el, 'querySelectorAll').mockReturnValue([el] as unknown as NodeListOf<Element>);
        const colors = extractColors(el) as SvgColors;
        expect(colors?.stroke).toStrictEqual(["blue"]);
    });

    test("extracts stop-color attribute colors", () => {
        const el = mockElement("svg", false, { "stop-color": "purple" }) as Element;
        jest.spyOn(el, 'querySelectorAll').mockReturnValue([el] as unknown as NodeListOf<Element>);
        const colors = extractColors(el) as SvgColors;
        expect(colors?.stop).toStrictEqual(["purple"]);
    });

    test("returns a flat array when asArray is true", () => {
        const el = mockElement("svg", false, { fill: "red", stroke: "blue" }) as Element;
        jest.spyOn(el, 'querySelectorAll').mockReturnValue([el] as unknown as NodeListOf<Element>);
        const colors = extractColors(el, false, true);
        expect(Array.isArray(colors)).toBe(true);
        expect(colors).toContain("red");
        expect(colors).toContain("blue");
    });

    test("onlyParent returns only root element colors, not children's", () => {
        const parser = new DOMParser();
        const dom = parser.parseFromString('<html><svg fill="red"><circle fill="blue"/></svg></html>', 'text/html');
        const svgEl = dom.querySelector('svg') as Element;
        const colorsAll = extractColors(svgEl) as SvgColors;
        const colorsParentOnly = extractColors(svgEl, true) as SvgColors;
        expect(colorsAll?.fill).toStrictEqual(["blue"]);
        expect(colorsParentOnly?.fill).toStrictEqual(["red"]);
    });

    test("returns server-side string SVG colors", () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const colors = extractColors(SVGString);

        expect(colors?.fill).toStrictEqual([MAIN_FILL_COLOR]);
    });

    test("extracts fill from style attribute in SVG string", () => {
        const svgStr = `<svg style="fill: purple;"></svg>`;
        const colors = extractColors(svgStr);
        expect(colors?.fill).toStrictEqual(["purple"]);
    });

    test("extracts stroke and stop-color from SVG string", () => {
        const svgStr = `<svg stroke="orange" stop-color="teal"></svg>`;
        const colors = extractColors(svgStr) as SvgColors;
        expect(colors?.stroke).toStrictEqual(["orange"]);
        expect(colors?.stop).toStrictEqual(["teal"]);
    });

})