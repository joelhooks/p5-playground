import p5 from 'p5'
import {Mover} from './mover'

export default (s: p5) => {
  let mover: Mover

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(400, 400)
    s.background(0)
    mover = new Mover(200, 200, s)
  }

  s.draw = () => {
    mover.update()
    mover.show()
  }
}
