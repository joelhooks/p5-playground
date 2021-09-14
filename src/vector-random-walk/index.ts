import p5 from 'p5'
import {Walker} from './walker'

export default (s: p5) => {
  let walkers: Walker[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(1920, 1080)
    s.background(10)

    for (let i = 0; i < 150; i++) {
      let color = s.random(25, 234)
      walkers.push(
        new Walker(s.width / 2, s.height / 2, s.color([color, 80]), s),
      )
    }
  }

  s.draw = () => {
    for (const walker of walkers) {
      walker.show()
      const newWalker = walker.update()
      if (newWalker) walkers.push(newWalker)
    }
  }
}
