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

#### 1. `fill(svg, color, [ignoreColors], [callback])`(#fill)

This function fills the specified SVG element with a given color.

**Arguments:**

* `svg`: A DOM element representing the SVG element you want to modify (client-side JavaScript).
* `color`: A string representing the desired fill color.
* `ignoreColors` (optional): An array of color strings to exclude from replacement.
* `callback` (optional): A function that executes after the fill operation is complete.


#### 2. `replace(svg, detailsArray, [callback])`

This function replaces specific colors within the SVG element based on a configuration.

**Arguments:**

* `svg`: A DOM element representing the SVG element you want to modify (client-side JavaScript).
* `detailsArray`: An array of objects with the following properties:
    * `target`: A string representing the color you want to replace within the SVG.
    * `replace`: A string representing the new color to use as a replacement.
* `callback` (optional): A function that executes after the replace operation is complete.

#### 3. `getColors(svg, [onlyParent])`

This function extracts the colors used in the SVG element and returns them as an object.

**Arguments:**

* `svg`: A DOM element representing the SVG element from which to extract colors (client-side JavaScript).
* `onlyParent` (optional): A boolean flag indicating whether to extract colors only from the parent element (true) or include its children (false, default).

**Returns:**

An object with keys:

* `fill`: An array containing all fill color strings used in the SVG.
* `stroke`: An array containing all stroke color strings used in the SVG (if applicable).
* `stop`: An array containing all stop color strings used in the SVG for gradients (if applicable).

### node
Functions of node get thes same parameters as in client but instead of <i>SVG HTML element</i> they take a <i>string of an SVG HTML element</i>.Note that all functions of node return something and you should keep that value returned from them to use furthermore.

### common
#### 1. `randomColor([format])`

This function generates a random color and returns it in either hexadecimal notation or RGB format.

**Arguments:**

* `format` (optional): A string specifying the desired format, either "hex" (default) or "rgb".

**Returns:**

A string representing the randomly generated color in the specified format (hexadecimal or RGB).