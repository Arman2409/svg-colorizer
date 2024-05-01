const mockElement = (
    name: string, 
    attributes?: any, 
    styles?: any):Element => {
    const domParser = new DOMParser();
    const DOM = domParser.parseFromString(`<html><${name}></${name}></html>`, "text/html");
    const element = DOM.querySelector(`${name}`) as Element;
    for(const attribute  in attributes){
        element?.setAttribute(attribute, attributes[attribute]);
    }
    for(const style in styles) {
       (element as HTMLElement).style.setProperty(style, styles[style]);
    }
    return element;
}

export default mockElement;