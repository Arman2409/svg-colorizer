interface SvgColorsInSets {
    fill: Set<string>;
    stroke: Set<string>;
    stop: Set<string>;
}
interface SvgColors {
    fill: string[];
    stroke: string[];
    stop: string[];
}
interface ReplaceDetail {
    target: string;
    replace: string;
}

export type { ReplaceDetail, SvgColors, SvgColorsInSets };
