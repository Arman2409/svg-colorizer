import fillOrReplaceClient from './environments/client/fillOrReplace';
import fillSVGServer from './environments/server/fillOrReplace';

const fill = (
    elementStringOrElement?: SVGElement | Element | string,
    color?: string,
    ignoreColors?: string[],
    callback?: Function) => {  
    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return fillOrReplaceClient(elementStringOrElement as Element, "fill", color, ignoreColors, undefined, callback);
    } else {
        return fillSVGServer(elementStringOrElement as string, "fill", color, ignoreColors, undefined, callback);
    }
}

export default fill;  