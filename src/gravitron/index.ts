import p5 from 'p5'
import {Mover} from './mover'
import {Attractor} from './attractor'

export default (s: p5) => {
  let mover: Mover
  let attractor: Attractor

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(400, 400)

    mover = new Mover(50, 50, 5, s)
    attractor = new Attractor(200, 200, 15, s)
  }

  s.draw = () => {
    s.background(0)
    attractor.attract(mover)
    attractor.show()
    mover.update()
    mover.show()
  }
}
