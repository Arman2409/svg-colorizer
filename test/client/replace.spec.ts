import getColors from "../../lib/client/getColors";
import replace from "../../lib/client/replace";
import mockElement from "../utils/mockElement";

const INITIAL_COLOR = "green"
const REPLACE_COLOR = "red";

const initialSVG = mockElement("svg", false, {fill: INITIAL_COLOR}) as Element;
const replacedSVG = mockElement("svg", false, {fill: REPLACE_COLOR}) as Element;
jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);
jest.spyOn(replacedSVG, 'querySelectorAll').mockReturnValue([replacedSVG] as any);

test('replace should replace given colors', () => {
    replace(initialSVG, [{
        target: INITIAL_COLOR,
        replace: REPLACE_COLOR
    }])
    
    const newColors = getColors(replacedSVG);

    expect(newColors?.fill).toStrictEqual([REPLACE_COLOR]);
});