import getColors from "../../lib/client/getColors";
import replace from "../../lib/client/replace";
import mockElement from "../_utils/mockElement";

const INITIAL_COLOR = "green"
const REPLACE_COLOR = "red";

const initialSVG = mockElement("svg", false, {fill: INITIAL_COLOR}) as Element;
jest.spyOn(initialSVG, 'querySelectorAll').mockReturnValue([initialSVG] as any);

test('replace should replace given colors', () => {
    const replacedSVG = replace(initialSVG, [{
        target: INITIAL_COLOR,
        replace: REPLACE_COLOR
    }])
    jest.spyOn(replacedSVG, 'querySelectorAll').mockReturnValue([replacedSVG] as any);
    const newColors = getColors(replacedSVG);

    expect(newColors?.fill).toStrictEqual([REPLACE_COLOR]);
});