import getColorsOfSVG from '../helpers/environmentals/extractColors/client';
import getColorsOfSVGServer from '../helpers/environmentals/extractColors/server';
import type { SvgColors } from '../../types/global';

const extractColors = (
    element: SVGElement | Element | string,
    onlyParent?: boolean,
    asArray?: boolean
):SvgColors | string[] => {

    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return getColorsOfSVG(element as SVGElement, onlyParent, asArray);
    } else {
        return getColorsOfSVGServer(element as string, onlyParent, asArray);
    }
}

export default extractColors;  