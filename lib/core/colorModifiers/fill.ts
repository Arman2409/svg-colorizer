import fillOrReplaceClient from '../helpers/environmentals/fillOrReplace/client';
import fillSVGServer from '../helpers/environmentals/fillOrReplace/server';

const fill = (
    elementStringOrElement: SVGElement | Element | string,
    color: string,
    ignoreColors?: string[],
    callback?: () => void
):string | void => {  

    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return fillOrReplaceClient(elementStringOrElement as Element, "fill", color, ignoreColors, undefined, callback);
    } else {
        return fillSVGServer(elementStringOrElement as string, "fill", color, ignoreColors, undefined, callback);
    }
}

export default fill;  