import p5 from 'p5'
import {Walker} from './walker'

export default (s: p5) => {
  let walkers: Walker[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)

    for (let i = 0; i < 1; i++) {
      const color = s.random(135, 255)
      walkers.push(
        new Walker(
          s.createVector(s.width / 2, s.height / 2),
          s.createVector(1, -1),
          color,
          s,
        ),
      )
    }
  }

  s.draw = () => {
    s.background(51)
    for (const walker of walkers) {
      walker.show()
      walker.update()
    }
  }
}
