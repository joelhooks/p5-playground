import p5 from 'p5'

import {Random} from '../utils/random'

const randomSeed = new Random()

export default (s: p5) => {
  const scalar = randomSeed.random_int(35, 120)
  let angle = 0
  let sizeMod = randomSeed.random_int(0, 10)
  const iterations = randomSeed.random_int(15, 35)
  const perturbations = randomSeed.random_int(5, 14)
  const increment = randomSeed.random_num(0.00005, 0.0005)

  console.log(randomSeed.hash)

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500, s.WEBGL)
  }

  s.draw = () => {
    s.background(80)
    s.colorMode(s.HSL, 360)
    const ang = s.radians(angle)

    if (angle < 0.01 || angle > 0) {
      sizeMod *= -1
    }

    // s.translate(s.width / 2, s.height / 2)
    for (let i = 0; i < iterations; i++) {
      for (let j = 0; j < perturbations; j++) {
        let hue = (360.0 * j) / i
        s.fill(hue, 200, 200, 80)
        s.noStroke()
        const x = scalar + j * s.cos(i * ang)
        const y = scalar + j * s.sin(j * ang + scalar)
        s.rotate(angle)

        s.ellipse(x + j + 50, y + i + 50, scalar / i - j, scalar / i - j)
      }
    }
    angle += increment
  }
}
