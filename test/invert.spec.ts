import getColors from "../lib/getColors";
import invertAll from "../lib/invert";
import mockElement from "./utils/mockElement";

const FILL_COLOR = "#FF0000";
const INVERTED_COLOR = "#00ffff";

// Mock client and server side elements
const initialSVG = mockElement("svg", false, { fill: FILL_COLOR }) as Element;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as unknown as NodeListOf<Element>);


describe("invertAll", () => {
    test("all colors should be inverted", () => {

        invertAll(initialSVG);
        
        const colors = getColors(initialSVG);

        console.log(colors);

        expect(colors?.fill).toStrictEqual([INVERTED_COLOR]);
    });

})