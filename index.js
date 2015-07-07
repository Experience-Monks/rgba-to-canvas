module.exports = createCanvasFromRGBA
function createCanvasFromRGBA (pixels, shape) {
  if (!pixels) {
    throw new Error('must specify pixels')
  }

  if (!Array.isArray(shape)) {
    throw new Error('must specify [width, height] shape')
  }

  var canvas = document.createElement('canvas')
  canvas.width = shape[0]
  canvas.height = shape[1]

  var context = canvas.getContext('2d')
  var imageData = context.createImageData(shape[0], shape[1])
  imageData.data.set(pixels)
  context.putImageData(imageData, 0, 0)
  return context.canvas
}
