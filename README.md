# rgba-to-canvas

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Turns a flat array of RGBA pixels, like those in a `Uint8ClampedArray`, into a new Canvas.

## Example

```js
var rgbaToPixels = require('rgba-to-pixels')

var canvas = rgbaToPixels(pixels, [ 128, 128 ])
document.body.appendChild(canvas)
```

## Usage

[![NPM](https://nodei.co/npm/rgba-to-canvas.png)](https://www.npmjs.com/package/rgba-to-canvas)

#### `canvas = rgbaToPixels(array, shape)`

For the given flat `array` of RGBA data (Uint8Array or Uint8ClampedArray), and the `[width, height]` shape, returns a new canvas with the specified pixels.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/rgba-to-canvas/blob/master/LICENSE.md) for details.
