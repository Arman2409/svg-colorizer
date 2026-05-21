# SVG colorizer

Dynamically style your SVGs with ease using this versatile utility set. Effortlessly apply a uniform color across an entire SVG or precisely swap out specific colors within its elements. Designed for seamless integration in both browser environments (where they directly manipulate the SVG DOM) and server-side contexts (returning the modified SVG string for your processing needs). These functions detect their execution environments. Beyond color manipulation, this library offers other useful utility functions to streamline your SVG workflows.


## Getting started

1. Install the package with command

```bash
npm install svg-colorizer
```

2. Import functions in JavaScript/TypeScript file and use them

```javascript
import { fill, replace, changeBrightness, extractColors, generateRandomColor } from "svg-colorizer";
```


## Examples

### Using in the client side
```javascript
import { fill, replace, generateRandomColor, changeBrightness } from "svg-colorizer";

const svgDOMElement = document.querySelector("svg");

// Generate random colors
const randomColor1 = generateRandomColor();
const randomColor2 = generateRandomColor();

// Fill the entire SVG with one color
fill(svgDOMElement, randomColor1);

// Replace specified colors with other colors
replace(svgDOMElement, [
    {
        target: randomColor1,
        replace: randomColor2
    }
])

// Change brightness
changeBrightness(svgDOMElement, 50);

```

### Using in the server side
```javascript
import { fill, replace, generateRandomColor, changeBrightness } from "svg-colorizer";

const svgStringElement = "<svg viewBox="0 0 10 10" fill="currentColor"><rect width="10" height="10"/></svg>"

// Generate random colors
const randomColor1 = generateRandomColor();
const randomColor2 = generateRandomColor();

// Fill the entire SVG with one color
const filledString = fill(svgStringElement, randomColor1);

// Replace specified colors with other colors
const replacedString = replace(filledString, [
    {
        target: randomColor1,
        replace: randomColor2
    }
])

// Change brightness
const changedBrightnessString =  changeBrightness(replacedString, 50);

```


## Available functions
The functions will use either DOM API or string manipulation for achieving their goal, depending whether they are used in client side or server side.


#### Color modifier functions

- [fill](#fill)
- [replace](#replace)
- [invert](#invert)

#### Property modifier functions

- [changeBrightness](#changeBrightness)
- [changeAlpha](#changeAlpha)
- [changeHue](#changeHue)
- [changeSaturation](#changeSaturation)

#### Extractor functions

- [extractColors](#extractColors)

#### Generator functions

- [generateRandomColor](#getRandomColor)


### Color modifier functions


#### <b id="fill">fill</b>

```typescript
  (svg: SVGElement | string, 
   color: string,
   ignoreColors?: string[], 
   callback?: () => void
  ) => void | string
```

Fills the specified SVG element with a given color. Returns string in server side and nothing in client side.


#### <b id="replace"> replace </b>

```typescript
  (svg: SVGElement | string, 
   detailsArray: { target: string, replace: string }[], 
   callback?: () => void
  ) => void | string
```

Replaces specific colors within the SVG element based on a configuration. Returns string in server side and nothing in client side.

#### <b id="invert"> invert </b>

```typescript
  (svg: SVGElement | string,  
   callback?: () => void
  ) => void | string
```

Replaces all the colors with their opposite in the color spectre. Returns string in server side and nothing in client side.


### Property modifier functions


#### <b id="changeBrightness">changeBrightness</b>

```typescript
  (svg: SVGElement | string, 
   factor: number
  ) => void | string
```

Changes the brightness of SVG element by replacing all colors in it.Returns string in server side and nothing in client side.

#### <b id="changeAlpha">changeAlpha</b>

```typescript
  (svg: SVGElement | string, 
   factor: number
  ) => void | string
```

Changes the alpha(opacity) of SVG element by replacing all colors in it.Returns string in server side and nothing in client side.

#### <b id="changeHue">changeHue</b>

```typescript
  (svg: SVGElement | string, 
   factor: number
  ) => void | string
```

Changes the hue of the the SVG element.Returns string in server side and nothing in client side.

#### <b id="changeSaturation">changeSaturation</b>

```typescript
  (svg: SVGElement | string, 
   factor: number
  ) => void | string
```

Changes the saturation of SVG element by replacing all colors in it.Returns string in server side and nothing in client side.


### Extractor functions


#### <b id="extractColors"> extractColors </b>

```typescript
  (svg: SVGElement | string, 
   onlyParent?: boolean,
   asArray?: boolean
  ) => { 
    fill: string[], 
    stroke: string[],
    stop: string[]
  } | string[]
```

Extracts the colors used in the SVG element. Returns them as an object or an array depending the asArray option.


### Generator functions


#### <b id="generateRandomColor">generateRandomColor</b>

```typescript
(format?: "hex" | "rgb") => string
```

This function generates a random color and returns it in either hexadecimal notation or RGB format depending on the format argument(default is "hex").
