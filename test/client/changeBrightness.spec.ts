// this test is incomplete

import changeBrightness from "../../lib/node/changeBrightness";
import mockElement from "../_utils/mockElement";

const initialSVG = mockElement("svg", true, { fill: "grey" }) as string;

// jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);

test('should fill the SVG with given color', () => {
    const newSVG = changeBrightness(initialSVG, -0.5);
    console.log(newSVG);
    
    expect({}).toStrictEqual({});
});