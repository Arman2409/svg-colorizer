import tinycolor from "tinycolor2";

import { changeSaturation } from "../../lib/core/propertyModifiers/index";
import extractColors from "../../lib/core/extractors/extractColors";
import mockElement from "../utils/mockElement";

const SATURATION_CHANGE = 50;
const INITIAL_COLOR =  "#947cf0";
const SATURATION_CHANGED_COLOR = "#8b6dff";

// Mock client and server side elements
const HtmlSVG = mockElement("svg", false, { fill: INITIAL_COLOR }) as Element;
const SVGString = mockElement("svg", true, { fill: INITIAL_COLOR }) as string;

jest.spyOn(HtmlSVG, 'querySelectorAll').mockReturnValue([HtmlSVG] as unknown as NodeListOf<Element>);

describe("changeSaturation", () => {
    test('changes saturation for client-side HTML SVG', () => {
        console.log(extractColors(HtmlSVG));
        
        changeSaturation(HtmlSVG, SATURATION_CHANGE);
        const colors = extractColors(HtmlSVG);

        console.log(colors);
        
        const changedColor = (colors?.fill as string[])[0];
        
        expect("#" + tinycolor(changedColor).toHex()).toEqual(SATURATION_CHANGED_COLOR);
    });

    test('changes saturation for server-side string SVG', () => {
        // Make document undefined 
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeSaturation(SVGString, SATURATION_CHANGE);
        const colors = extractColors(changedSVGString as string);
        const changedColor = (colors?.fill as string[])[0];
        
        expect("#" + tinycolor(changedColor).toHex()).toEqual(SATURATION_CHANGED_COLOR);
    });

})