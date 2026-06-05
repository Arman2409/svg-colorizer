import getAllElementColors from "../../getAllElementColors";
import type { SvgColors, SvgColorsInSets } from "../../../../types/global";

const extractColors = (
  elementString: string,
  onlyParent?: boolean,
  asArray?: boolean
): SvgColors | string[] => {
  if (typeof elementString !== "string") {
    throw new Error("SVG element string should be provided");
  }

  const colors: SvgColorsInSets = {
    fill: new Set<string>(),
    stroke: new Set<string>(),
    stop: new Set<string>(),
  };

  if (onlyParent) {
    const firstTagPattern = /^<([^\s/>]+)(?:\s+[^>]*?)?>/;
    const match = elementString.match(firstTagPattern) as string[];
    elementString = match[0];
  }

  // Extract colors from style attributes — split declarations to support all color formats
  const styleMatches = elementString.match(/style="([^"]+)"/gi);
  if (styleMatches) {
    styleMatches.forEach(match => {
      const styles = match.slice(7, -1);
      styles.split(';').forEach(decl => {
        const colonIdx = decl.indexOf(':');
        if (colonIdx === -1) return;
        const prop = decl.slice(0, colonIdx).trim();
        const value = decl.slice(colonIdx + 1).trim();
        if (!value) return;
        if (prop === 'fill') colors.fill.add(value);
        else if (prop === 'stroke') colors.stroke.add(value);
        else if (prop === 'stop-color') colors.stop.add(value);
      });
    });
  }

  // Extract colors from attributes
  const fillMatch = elementString.match(/fill="([^"]+)"/gi);
  const strokeMatch = elementString.match(/stroke="([^"]+)"/gi);
  const stopMatch = elementString.match(/stop-color="([^"]+)"/gi);

  if (fillMatch) fillMatch.forEach(match => colors.fill.add(match.slice(6, -1)));
  if (strokeMatch) strokeMatch.forEach(match => colors.stroke.add(match.slice(8, -1)));
  if (stopMatch) stopMatch.forEach(match => colors.stop.add(match.slice(12, -1)));


  // Convert sets to arrays
  const resultColors = {
    fill: Array.from(colors.fill),
    stroke: Array.from(colors.stroke),
    stop: Array.from(colors.stop),
  }

  if(asArray) return getAllElementColors(resultColors);
  return resultColors;
}

export default extractColors;