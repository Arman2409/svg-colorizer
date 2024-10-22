import changeBrightness from "../lib/changeBrightness";
import getColors from "../lib/getColors";
import mockElement from "./utils/mockElement";

const initialValue = 100;
const changeAmout = 100;

const initialColor = `rgb(${initialValue}, 0, 0)`;
const expectedColor = `rgb(${initialValue + changeAmout}, ${changeAmout}, ${changeAmout})`;

// Mock client and server side elements
const initialSVG = mockElement("svg", false, { fill:  initialColor}) as Element;
const SVGString = mockElement("svg", true, { fill: initialColor }) as string;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);

describe("changeBrightness", () => {
    test('changes brightness for client-side HTML SVG', () => {
        changeBrightness(initialSVG, changeAmout);
        const colors = getColors(initialSVG);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

    test('changes brightness for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeBrightness(SVGString, changeAmout)
        const colors = getColors(changedSVGString as string);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

})