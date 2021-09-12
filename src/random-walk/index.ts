import p5 from 'p5'
import {Walker} from './walker'

export default (s: p5) => {
  let walker: Walker
  let walker2: Walker

  let walkers: Walker[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)
    s.background(51)

    for (let i = 0; i < 500; i++) {
      const color = s.random(15, 135)
      walkers.push(new Walker(s.width / 2, s.height / 2, color, s))
    }
  }

  s.draw = () => {
    for (const walker of walkers) {
      walker.show()
      walker.update()
    }
  }
}
