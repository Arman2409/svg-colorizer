import fillOrReplaceClient from './utils/client/fillOrReplace';
import fillSVGServer from './utils/server/fill';

const fill = (
    elementStringOrElement?: Element | string,
    color?: string,
    ignoreColors?: string[],
    callback?: Function) => {  
    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return fillOrReplaceClient(elementStringOrElement as Element, "fill", color, ignoreColors, undefined, callback);
    } else {
        return fillSVGServer(elementStringOrElement as any, color as any, ignoreColors, callback);
    }
}

export default fill;  