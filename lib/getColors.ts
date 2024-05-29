import getColorsOfSVG from './utils/client/getColors';
import getColorsOfSVGServer from './utils/server/getColors';

const getColors = (
    element: Element | string,
    onlyParent?: boolean,
    asArray?: boolean) => {
    if (typeof document !== 'undefined') {
        return getColorsOfSVG(element, onlyParent, asArray);
    } else {
        return getColorsOfSVGServer(element as string, onlyParent, asArray);
    }
}

export default getColors;  