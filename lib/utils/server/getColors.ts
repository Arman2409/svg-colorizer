import getAllElementColors from "../../../helpers/getAllElementColors";
import type { SvgColors, SvgColorsInSets } from "../../../types/global";

const getColors = (
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

  // Regex patterns for color values
  const fillPattern = /fill:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi;
  const strokePattern = /stroke:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi;
  const stopPattern = /stop-color:(#[a-f0-9]{3,6})|(rgb\(\d+,\s*\d+,\s*\d+\))/gi;

  if (onlyParent) {
    const firstTagPattern = /^<([^\s/>]+)(?:\s+[^>]*?)?>/;
    const match = elementString.match(firstTagPattern) as string[];
    elementString = match[0];
  }

  // Extract colors from style attributes
  const styleMatches = elementString.match(/style="([^"]+)"/gi);
  if (styleMatches) {
    styleMatches.forEach(match => {
      const styles = match.slice(7, -1); // Extract styles without quotes
      const fillColors = styles.match(fillPattern);
      const strokeColors = styles.match(strokePattern);
      const stops = styles.match(stopPattern);
      if (fillColors) fillColors.forEach(color => colors.fill.add(color.slice(5)));
      if (strokeColors) strokeColors.forEach(color => colors.stroke.add(color.slice(7)));
      if (stops) stops.forEach(color => colors.stop.add(color.slice(7)));
    });
  }

  // Extract colors from attributes
  const fillMatch = elementString.match(/fill="([^"]+)"/gi);
  const strokeMatch = elementString.match(/stroke="([^"]+)"/gi);
  const stopMatch = elementString.match(/stop-color="([^"]+)"/gi);
  if (fillMatch) fillMatch.forEach(match => colors.fill.add(match.slice(6, -1)));
  if (strokeMatch) strokeMatch.forEach(match => colors.stroke.add(match.slice(8, -1)));
  if (stopMatch) stopMatch.forEach(match => colors.stop.add(match.slice(13, -1)));


  // Convert sets to arrays
  const resultColors = {
    fill: Array.from(colors.fill),
    stroke: Array.from(colors.stroke),
    stop: Array.from(colors.stop),
  }

  if(asArray) return getAllElementColors(resultColors);
  return resultColors;
}

export default getColors;