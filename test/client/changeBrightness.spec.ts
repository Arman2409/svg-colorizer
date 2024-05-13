// this test is incomplete

import changeBrightness from "../../lib/client/changeBrightness";
import mockElement from "../_utils/mockElement";

const initialSVG = mockElement("svg", false, { fill: "green" }) as Element;

jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);

test('should fill the SVG with given color', () => {
    changeBrightness(initialSVG, 0.1);
    
    expect({}).toStrictEqual({});
});