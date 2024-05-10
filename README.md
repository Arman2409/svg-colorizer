# `SVG colorizer`

Fill entire SVGs with a single color or replace specific colors within them.

## Getting started

1. Install the package with command

```bash
npm install svg-colorizer
```

2. Import functions in JavaScript/TypeScript file and use them

```javascript
import { fill } from "svg-colorizer/client";

fill(document.querySelector("svg"), "red");
```

## Examples of usage

```javascript
import { fill } from "svg-colorizer/client";

fill(document.querySelector("svg"), "red");
```

```javascript
import { fill } from "svg-colorizer/node";

const svgWithNewColor = fill(svgString, "red");
```

```javascript
import { randomColor } from "svg-colorizer/common"

const newColor = randomColor();
```

## Available functions

There are three main categories from where functions can be imported <u>client</u>, <u>node</u> and <u>common</u>.
Functions in <u>node</u> category use string manipulation for reaching their purpose, while functions in <u>client</u> category work with <i>DOM API</i> to get elements from HTML page,so this functions can be used only if the <i>DOM API</i> is available in the environment. Functions in <u>common</u> are for general purposes.

- [client](#client)
  - [fill](#fill)
  - [getColors](#getColors)
  - [replace](#replace)
- [node](#node)
  - fill
  - getColors
  - replace
- [common](#node)
  - [randomColor](#randomColor)

### client 
1. <p id="fill" style="font-size: 18px; color: brown" >fill(svg, color, [ignoreColors], [callback])</p>
   <p>fills the svg with a given color</p>
    * `svg` is an SVG element
    * `color` is a string representing the desired color
    (if not provided it will be set to `"black"`).
    * `ignoreColors` is an optional array of colors that should remain unchanged in the SVG code.
    * `callback` is an optional callback function.
2. <p id="replace" style="font-size: 18px; color: brown" >replace(svg, detailsArray, [callback])</p>
   <p>replaces given colors in the SVG</p>
    * `svg` is an SVG element
    * `detailsArray` is an array of the objects in this format 
    ```javascript
    {
        target: string,
        replace: string
    }
    ```
    * `callback` is an optional callback function.
3. <p id="getColors" style="font-size: 18px; color: brown" >getColors(svg, [onlyParent])</p>
    <p>returns the colors used in the SVG in the format below</p>
    ```javascript
    {
        fill: [],
        stroke: [],
        stop: []
    }
    ```
    * `svg` is an SVG element
    * `onlyParent` is an optional argument, which indicates whether only the given elements colors should be extracted or also the colors of its children.

### node
Functions of node get thes same parameters as in client but instead of <i>SVG HTML element</i> they take a <i>string of an SVG HTML element</i>.Note that all functions of node return something and you should keep that value returned from them to use furthermore.

### common
1. <p id="randomColor" style="font-size: 18px; color: brown" >randomColor([format])</p>
   <p> Returns a random color in hexadecimal notation or RGB form. </p>
   * `format` is an optional string which can has the value of "hex" or "rgb"