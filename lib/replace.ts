import fillOrReplaceClient from "./utils/client/fillOrReplace";
import fillOrReplaceServer from "./utils/server/fillOrReplace";
import type { ReplaceDetail } from "../types/global";

const replace = (
    svg: Element | string,
    detailsArray: ReplaceDetail[],
    callback?: Function): string|void => {

    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return fillOrReplaceClient(svg as Element,"replace", undefined, undefined, detailsArray, callback);
    } else {
        return fillOrReplaceServer(svg as string, "replace", undefined, undefined, detailsArray, callback);
    }
}

export default replace;