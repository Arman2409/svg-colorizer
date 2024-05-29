import fill from "../lib/fill";
import getColors from "../lib/getColors";
import mockElement from "./utils/mockElement";

const FILL_COLOR = "red";

const initialSVG = mockElement("svg", false, { fill: "green" }) as Element;
const filledSVG = mockElement("svg", false, { fill: FILL_COLOR }) as Element;
const initialSVGString = mockElement("svg", true, { fill: "blue" }) as string;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);
jest.spyOn(filledSVG, 'querySelectorAll').mockReturnValue([filledSVG] as any);

describe("fill", () => {
    test('should implement fill color for client side', () => {
        fill(initialSVG, FILL_COLOR);
        const filledColors = getColors(filledSVG);

        expect(filledColors?.fill).toStrictEqual([FILL_COLOR]);
    });

    test('should implement fill color for server side', () => {
        Object.defineProperty(global, 'document', {
            value: undefined,
        })
        const filledSVG = fill(initialSVGString, FILL_COLOR);
        const replacedColors = getColors(filledSVG);

        expect(replacedColors?.fill).toStrictEqual([FILL_COLOR]);
    });

})