import p5 from 'p5'
import {makeNoise3D} from 'open-simplex-noise'

const noise3D = makeNoise3D(Date.now())

export default (s: p5) => {
  let inc = 0.1
  let zInc = 0.01
  let zOff = 0

  s.preload = () => {}

  s.setup = () => {
    s.pixelDensity(1)
    s.createCanvas(400, 400)
    s.noiseDetail(8, 0.9)
  }

  s.draw = () => {
    let yOff = 0
    s.loadPixels()
    for (let x = 0; x < s.width; x++) {
      let xOff = 0
      for (let y = 0; y < s.height; y++) {
        const index = (x + y * s.width) * 4
        const r = noise3D(xOff, yOff, zOff)
        const brightness = s.map(r, -1, 1, 0, 255)

        s.pixels[index] = brightness
        s.pixels[index + 1] = brightness
        s.pixels[index + 2] = brightness
        s.pixels[index + 3] = 255
        xOff += inc
      }
      yOff += inc
    }
    s.updatePixels()
    zOff += zInc
  }
}
