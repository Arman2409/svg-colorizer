import fillOrReplaceClient from '../helpers/environmentals/fillOrReplace/client';
import fillOrReplaceServer from '../helpers/environmentals/fillOrReplace/server';
import type { ReplaceDetail } from "../../types/global";

const replace = (
    svg: SVGElement | Element | string,
    detailsArray: ReplaceDetail[],
    callback?: Function
): string|void => {

    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return fillOrReplaceClient(svg as Element,"replace", "", undefined, detailsArray, callback);
    } else {
        return fillOrReplaceServer(svg as string, "replace", "", undefined, detailsArray, callback);
    }
}

export default replace;