import { changeBrightness } from "../../lib/core/propertyModifiers/index";
import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";

const initialValue = 100;
const changeAmout = 100;

const initialColor = `rgb(${initialValue}, 0, 0)`;
const expectedColor = `rgb(${initialValue + changeAmout}, ${changeAmout}, ${changeAmout})`;

// Mock client and server side elements
const initialSVG = mockElement("svg", false, { fill:  initialColor}) as Element;
const SVGString = mockElement("svg", true, { fill: initialColor }) as string;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as unknown as NodeListOf<Element>);

describe("changeBrightness", () => {
    test('changes brightness for client-side HTML SVG', () => {
        changeBrightness(initialSVG, changeAmout);
        const colors = extractColors(initialSVG);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

    test('changes brightness for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeBrightness(SVGString, changeAmout)
        const colors = extractColors(changedSVGString as string);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

})