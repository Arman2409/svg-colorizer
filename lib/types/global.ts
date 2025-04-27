export interface SvgColorsInSets {
    fill: Set<string>,
    stroke: Set<string>,
    stop: Set<string>,
}

export interface SvgColors {
    fill: string[]
    stroke: string[]
    stop: string[]
}

export interface ReplaceDetail {
    target: string
    replace: string
}