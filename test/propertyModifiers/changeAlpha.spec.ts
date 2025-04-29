import tinycolor from "tinycolor2";

import { changeAlpha } from "../../lib/core/propertyModifiers/index";
import extractColors from "../../lib/core/extractors/extractColors";
import generateRandomColor from "../../lib/core/generators/generateRandomColor";
import mockElement from "../utils/mockElement";

const alphaChange = -0.5;

// Mock client and server side elements
const HtmlSVG = mockElement("svg", false, { fill: generateRandomColor() }) as Element;
const SVGString = mockElement("svg", true, { fill: generateRandomColor() }) as string;

jest.spyOn(HtmlSVG, 'querySelectorAll').mockReturnValue([HtmlSVG] as unknown as NodeListOf<Element>);

describe("changeAlpha", () => {
    test('changes alpha for client-side HTML SVG', () => {
        changeAlpha(HtmlSVG, alphaChange);
        const colors = extractColors(HtmlSVG);
        const changedColor = (colors?.fill as string[])[0];
        
        expect(tinycolor(changedColor).getAlpha()).toEqual(1 + alphaChange);
    });

    test('changes alpha for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeAlpha(SVGString, alphaChange);
        const colors = extractColors(changedSVGString as string);
        const changedColor = (colors?.fill as string[])[0];
        
        expect(tinycolor(changedColor).getAlpha()).toEqual(1 + alphaChange);
    });

})