import extractColors from "../../lib/core/extractors/extractColors";
import replace from "../../lib/core/colorModifiers/replace";
import mockElement from "../utils/mockElement";
import type { SvgColors } from "../../lib/types/global";

const MAIN_FILL_COLOR = "red";
const REPLACE_COLOR = "green";

// Mock client and server side elements
const mainSVGElement = mockElement("svg", false, { fill: MAIN_FILL_COLOR }) as Element;
const replacedSVGElement = mockElement("svg", false, {fill: REPLACE_COLOR}) as Element;

const SVGString = mockElement("svg", true, { fill: MAIN_FILL_COLOR }) as string;

jest.spyOn(replacedSVGElement, 'querySelectorAll').mockReturnValue([replacedSVGElement] as unknown as NodeListOf<Element>);

describe("replace", () => {
    test('replaces colors in client-side HTML SVG element', () => {
        replace(mainSVGElement, [{target: MAIN_FILL_COLOR, replace: "blue"}])
        const colors = extractColors(replacedSVGElement);

        expect(colors?.fill).toStrictEqual([REPLACE_COLOR]);
    });

    test('invokes callback after replacing', () => {
        const cb = jest.fn();
        const svgEl = mockElement("svg", false, { fill: "orange" }) as Element;
        jest.spyOn(svgEl, 'querySelectorAll').mockReturnValue([svgEl] as unknown as NodeListOf<Element>);
        replace(svgEl, [{ target: "orange", replace: "purple" }], cb);
        expect(cb).toHaveBeenCalledTimes(1);
    });

    test('replaces colors in server-side string SVG element', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const replacedSVGString = replace(SVGString, [{target: MAIN_FILL_COLOR, replace: REPLACE_COLOR}])
        const colors = extractColors(replacedSVGString as string);

        expect(colors?.fill).toStrictEqual([REPLACE_COLOR]);
    });

    test('leaves color unchanged when no replace detail matches', () => {
        const svgStr = mockElement("svg", true, { fill: "orange" }) as string;
        const result = replace(svgStr, [{ target: "blue", replace: "red" }]) as string;
        const colors = extractColors(result);
        expect(colors?.fill).toStrictEqual(["orange"]);
    });

    test('replaces multiple colors in a single call', () => {
        const svgStr = `<svg><rect fill="red"/><circle stroke="blue"/></svg>`;
        const result = replace(svgStr, [
            { target: "red", replace: "yellow" },
            { target: "blue", replace: "green" },
        ]) as string;
        const colors = extractColors(result) as SvgColors;
        expect(colors?.fill).toStrictEqual(["yellow"]);
        expect(colors?.stroke).toStrictEqual(["green"]);
    });

    test('replaces all occurrences of a color in server-side string (not just the first)', () => {
        // SVG with the same color repeated in multiple elements
        const svgStr = `<svg><rect fill="red"/><circle fill="red"/><path fill="red"/></svg>`;
        const result = replace(svgStr, [{ target: "red", replace: "blue" }]) as string;
        // All three fill="red" occurrences should be replaced
        expect(result.includes('fill="red"')).toBe(false);
        expect(result.split('fill="blue"').length - 1).toBe(3);
    });
})