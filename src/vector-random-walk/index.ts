import p5 from 'p5'
import {Walker} from './walker'

export default (s: p5) => {
  let walkers: Walker[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)
    s.background(51)

    for (let i = 0; i < 15; i++) {
      let color = s.random(15, 135)
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
