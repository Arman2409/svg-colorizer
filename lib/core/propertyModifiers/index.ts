import changeProperty from "./changeProperty";

export const  changeBrightness =  (
    svg: SVGElement | Element | string,
    factor: number
) => changeProperty(svg, factor, "brightness");

export const changeAlpha = (
    svg: SVGElement | Element | string,
    factor: number
) => changeProperty(svg, factor, "alpha");

export const changeSaturation = (
    svg: SVGElement | Element | string,
    factor: number
) => changeProperty(svg, factor, "saturation");

export const changeHue = (
    svg: SVGElement | Element | string,
    factor: number
) => changeProperty(svg, factor, "hue");