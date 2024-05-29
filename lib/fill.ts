import fillSVG from './utils/client/fill';
import fillSVGServer from './utils/server/fill';

const fill = (
    elementStringOrElement?: Element | string,
    color?: string,
    ignoreColors?: string[],
    callback?: Function) => {  
    if (typeof document !== 'undefined') {
        return fillSVG(elementStringOrElement, color, ignoreColors, callback);
    } else {
        return fillSVGServer(elementStringOrElement as any, color as any, ignoreColors, callback);
    }
}

export default fill;  