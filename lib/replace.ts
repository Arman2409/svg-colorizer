import { ReplaceDetail } from "../types/global";
import replaceClient from "./utils/client/replace";
import replaceServer from "./utils/server/replace";

const replace = (
    svg: Element | string,
    detailsArray: ReplaceDetail[],
    callback?: Function) => {
    if (typeof document !== 'undefined') {
        return replaceClient(svg, detailsArray, callback);
    } else {
        return replaceServer(svg as string, detailsArray, callback);
    }
}

export default replace;  