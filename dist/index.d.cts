interface ReplaceDetail {
    target: string;
    replace: string;
}

declare const fill: (elementStringOrElement?: Element | string, color?: string, ignoreColors?: string[], callback?: Function) => any;

declare const replace: (svg: Element | string, detailsArray: ReplaceDetail[], callback?: Function) => any;

declare const getColors: (element: Element | string, onlyParent?: boolean, asArray?: boolean) => any;

declare const changeBrightness: (elementStringOrElement: Element | string, factor: number) => string;

declare const randomColor: (format?: "hex" | "rgb") => string;

declare const _default: {
    fill: (elementStringOrElement?: string | Element | undefined, color?: string | undefined, ignoreColors?: string[] | undefined, callback?: Function | undefined) => any;
    replace: (svg: string | Element, detailsArray: ReplaceDetail[], callback?: Function | undefined) => any;
    getColors: (element: string | Element, onlyParent?: boolean | undefined, asArray?: boolean | undefined) => any;
    changeBrightness: (elementStringOrElement: string | Element, factor: number) => string;
    randomColor: (format?: "hex" | "rgb") => string;
};

export { changeBrightness, _default as default, fill, getColors, randomColor, replace };
