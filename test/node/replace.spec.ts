import getColors from "../../lib/node/getColors";
import replace from "../../lib/node/replace";
import mockElement from "../_utils/mockElement";

const INITIAL_COLOR = "green"
const REPLACE_COLOR = "red";

const initialSVG = mockElement("svg", true, {fill: INITIAL_COLOR}) as string;

test('replace should replace given colors', () => {
    const replacedSVG = replace(initialSVG, [{
        target: INITIAL_COLOR,
        replace: REPLACE_COLOR
    }])
    const newColors = getColors(replacedSVG);

    expect(newColors?.fill).toStrictEqual([REPLACE_COLOR]);
});