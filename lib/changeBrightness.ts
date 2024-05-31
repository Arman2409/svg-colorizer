import changeBrightnessClient from './utils/client/changeBrightness';
import changeBrightnessServer from './utils/server/changeBrightness';

const changeBrightness = (
    elementStringOrElement: Element | string,
    factor: number) => {  
    // Check whether this is client or server environment
    if (typeof document !== 'undefined') {
        return changeBrightnessClient(elementStringOrElement as Element, factor);
    } else {
        return changeBrightnessServer(elementStringOrElement as string, factor);
    }
}

export default changeBrightness;  