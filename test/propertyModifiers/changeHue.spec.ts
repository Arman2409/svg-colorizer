import tinycolor from "tinycolor2";

import { changeHue } from "../../lib/core/propertyModifiers/index";
import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";

const HUE_CHANGE = 50;
const INITIAL_COLOR =  "#947cf0";
const HUE_CHANGED_COLOR = "#f07ceb";

// Mock client and server side elements
const HtmlSVG = mockElement("svg", false, { fill: INITIAL_COLOR }) as Element;
const SVGString = mockElement("svg", true, { fill: INITIAL_COLOR }) as string;

jest.spyOn(HtmlSVG, 'querySelectorAll').mockReturnValue([HtmlSVG] as unknown as NodeListOf<Element>);

describe("changeAlpha", () => {
    test('changes hue for client-side HTML SVG', () => {
        changeHue(HtmlSVG, HUE_CHANGE);

        const colors = extractColors(HtmlSVG);
        const changedColor = (colors?.fill as string[])[0];
        
        expect("#" + tinycolor(changedColor).toHex()).toEqual(HUE_CHANGED_COLOR);
    });

    test('changes hue for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeHue(SVGString, HUE_CHANGE);
        const colors = extractColors(changedSVGString as string);
        const changedColor = (colors?.fill as string[])[0];
        
        expect("#" + tinycolor(changedColor).toHex()).toEqual(HUE_CHANGED_COLOR);
    });

})