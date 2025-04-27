import getColorsOfSVG from './environments/client/getColors';
import getColorsOfSVGServer from './environments/server/getColors';
import type { SvgColors } from './types/global';

const getColors = (
    element: SVGElement | Element | string,
    onlyParent?: boolean,
    asArray?: boolean):SvgColors | string[] => {

    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return getColorsOfSVG(element as SVGElement, onlyParent, asArray);
    } else {
        return getColorsOfSVGServer(element as string, onlyParent, asArray);
    }
}

export default getColors;  