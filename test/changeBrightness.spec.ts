import changeBrightness from "../lib/changeBrightness";
import getColors from "../lib/getColors";
import mockElement from "./utils/mockElement";

const initialValue = 100;
const changeAmout = 100;

const initialColor = `rgb(${initialValue}, 0, 0)`;
const expectedColor = `rgb(${initialValue + changeAmout}, ${changeAmout}, ${changeAmout})`;

const initialSVG = mockElement("svg", false, { fill:  initialColor}) as Element;
const changedSVG = mockElement("svg", false, { fill:  expectedColor}) as Element;

const SVGString = mockElement("svg", true, { fill: initialColor }) as string;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([changedSVG] as any);

describe("changeBrightness", () => {
    test('should change brightness for client side', () => {
        changeBrightness(initialSVG, 100);
        const colors = getColors(initialSVG);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

    test('should implement fill color for server side', () => {
        Object.defineProperty(global, 'document', {
            value: undefined,
        })

        const changedSVGString = changeBrightness(SVGString, changeAmout)
        const colors = getColors(changedSVGString);

        expect(colors?.fill).toStrictEqual([expectedColor]);
    });

})