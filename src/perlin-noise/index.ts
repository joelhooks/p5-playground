import p5 from 'p5'

export default (s: p5) => {
  let inc = 0.01

  s.preload = () => {}

  s.setup = () => {
    s.pixelDensity(1)
    s.createCanvas(400, 400)
  }

  s.draw = () => {
    let yOff = 0
    s.loadPixels()
    for (let x = 0; x < s.width; x++) {
      let xOff = 0
      for (let y = 0; y < s.height; y++) {
        const index = (x + y * s.width) * 4
        const r = s.noise(xOff, yOff) * 255
        s.pixels[index] = r
        s.pixels[index + 1] = r
        s.pixels[index + 2] = r
        s.pixels[index + 3] = 255
        xOff += inc
      }
      yOff += inc
    }
    s.updatePixels()
  }
}
