import fill from "../../lib/core/colorModifiers/fill";
import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";
import type { SvgColors } from "../../lib/types/global";

const FILL_COLOR = "red";

// Mock client and server side elements
const initialSVG = mockElement("svg", false, { fill: "green" }) as Element;
const filledSVG = mockElement("svg", false, { fill: FILL_COLOR }) as Element;
const initialSVGString = mockElement("svg", true, { fill: "blue" }) as string;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as unknown as NodeListOf<Element>);
jest.spyOn(filledSVG, 'querySelectorAll').mockReturnValue([filledSVG] as unknown as NodeListOf<Element>);

describe("fill", () => {
    test('fills with color for client-side HTML SVG', () => {
        fill(initialSVG, FILL_COLOR);
        const filledColors = extractColors(filledSVG);

        expect(filledColors?.fill).toStrictEqual([FILL_COLOR]);
    });

    test('fills both fill and stroke attributes', () => {
        const svgWithStroke = mockElement("svg", false, { fill: "blue", stroke: "green" }) as Element;
        jest.spyOn(svgWithStroke, 'querySelectorAll').mockReturnValue([svgWithStroke] as unknown as NodeListOf<Element>);
        fill(svgWithStroke, FILL_COLOR);
        const colors = extractColors(svgWithStroke) as SvgColors;
        expect(colors?.fill).toStrictEqual([FILL_COLOR]);
        expect(colors?.stroke).toStrictEqual([FILL_COLOR]);
    });

    test('invokes callback after filling', () => {
        const cb = jest.fn();
        const svgEl = mockElement("svg", false, { fill: "blue" }) as Element;
        jest.spyOn(svgEl, 'querySelectorAll').mockReturnValue([svgEl] as unknown as NodeListOf<Element>);
        fill(svgEl, FILL_COLOR, undefined, cb);
        expect(cb).toHaveBeenCalledTimes(1);
    });

    test('fills with color for server-side HTML string', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const filledSVG = fill(initialSVGString, FILL_COLOR);
        const replacedColors = extractColors(filledSVG as string);

        expect(replacedColors?.fill).toStrictEqual([FILL_COLOR]);
    });

    test('skips elements whose color is in ignoreColors', () => {
        const svgStr = mockElement("svg", true, { fill: "blue" }) as string;
        const result = fill(svgStr, FILL_COLOR, ["blue"]);
        const colors = extractColors(result as string);
        expect(colors?.fill).toStrictEqual(["blue"]);
    });

    test('throws when color is not provided', () => {
        const svgStr = mockElement("svg", true, { fill: "blue" }) as string;
        expect(() => fill(svgStr, "")).toThrow();
    });

})