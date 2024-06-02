# `SVG colorizer`

Fill entire SVGs with a single color or replace specific colors within them.

## Getting started

1. Install the package with command

```bash
npm install svg-colorizer
```

2. Import functions in JavaScript/TypeScript file and use them

```javascript
import { fill } from "svg-colorizer";

fill(document.querySelector("svg"), "red");
```

## Examples of usage

```javascript
import { fill } from "svg-colorizer";

fill(document.querySelector("svg"), "red");
```

```javascript
import { fill } from "svg-colorizer";

const svgWithNewColor = fill(svgString, "red");
```

```javascript
import { getRandomColor } from "svg-colorizer"

const newColor = getRandomColor();
```

## Available functions
 ` This functions will use either DOM API or string manipulation for achieving their goal, depending whether they are used in client side or server side.`

- [fill](#fill)
- [getColors](#getColors)
- [replace](#replace)
- [changeBrightness](#changeBrightness)
- [changeAlpha](#changeAlpha)
- [getRandomColor](#getRandomColor)


#### <p id="fill"> fill(svg, color, [ignoreColors], [callback]) </p>

This function fills the specified SVG element with a given color.

**Arguments:**

* `svg`: SVG Element which should be HTML element in DOM available environment and string otherwise.
* `color`: A string representing the desired fill color.
* `ignoreColors` (optional): An array of color strings to exclude from replacement.
* `callback` (optional): A function that executes after the fill operation is complete.


#### replace(svg, detailsArray, [callback])

This function replaces specific colors within the SVG element based on a configuration.

**Arguments:**

* `svg`: SVG Element which should be HTML element in DOM available environment and string otherwise.
* `detailsArray`: An array of objects with the following properties:
    * `target`: A string representing the color you want to replace within the SVG.
    * `replace`: A string representing the new color to use as a replacement.
* `callback` (optional): A function that executes after the replace operation is complete.


#### getColors(svg, [onlyParent])

This function extracts the colors used in the SVG element and returns them as an object.

**Arguments:**

* `svg`: SVG Element which should be HTML element in DOM available environment and string otherwise.
* `onlyParent` (optional): A boolean flag indicating whether to extract colors only from the parent element (true) or include its children (false, default).

**Returns:**

An object with keys:

* `fill`: An array containing all fill color strings used in the SVG.
* `stroke`: An array containing all stroke color strings used in the SVG (if applicable).
* `stop`: An array containing all stop color strings used in the SVG for gradients (if applicable).


#### changeBrightness(svg, factor)

This function changes the brightness of SVG element by replacing all colors in it.

**Arguments:**

* `svg`: SVG Element which should be HTML element in DOM available environment and string otherwise.
* `factor`: the amount of brightness change from -255 to 255, the bigger the factor, the brighter the image.


#### changeAlpha(svg, amount)

This function changes the alpha of SVG element by replacing all colors in it.

**Arguments:**

* `svg`: SVG Element which should be HTML element in DOM available environment and string otherwise.
* `factor`: the amount of brightness change from -1 to 1, the bigger the factor, the higher the alpha.


#### getRandomColor([format])

This function generates a random color and returns it in either hexadecimal notation or RGB format.

**Arguments:**

* `format` (optional): A string specifying the desired format, either "hex" (default) or "rgb".

**Returns:**

A string representing the randomly generated color in the specified format (hexadecimal or RGB).

