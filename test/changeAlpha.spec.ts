import tinycolor from "tinycolor2";

import changeAlpha from "../lib/changeAlpha";
import getColors from "../lib/getColors";
import getRandomColor from "../lib/getRandomColor";
import mockElement from "./utils/mockElement";

const alphaChange = -0.5;

// Mock client and server side elements
const HtmlSVG = mockElement("svg", false, { fill: getRandomColor() }) as Element;
const SVGString = mockElement("svg", true, { fill: getRandomColor() }) as string;

jest.spyOn(HtmlSVG, 'querySelectorAll').mockReturnValue([HtmlSVG] as any);

describe("changeAlpha", () => {
    test('changes alpha for client-side HTML SVG', () => {
        changeAlpha(HtmlSVG, alphaChange);
        const colors = getColors(HtmlSVG);
        const changedColor = (colors?.fill as string[])[0];
        
        expect(tinycolor(changedColor).getAlpha()).toEqual(1 + alphaChange);
    });

    test('changes alpha for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeAlpha(SVGString, alphaChange);
        const colors = getColors(changedSVGString as string);
        const changedColor = (colors?.fill as string[])[0];
        
        expect(tinycolor(changedColor).getAlpha()).toEqual(1 + alphaChange);
    });

})