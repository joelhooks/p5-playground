import p5 from 'p5'
import {Mover} from './mover'

export default (s: p5) => {
  let movers: Mover[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(400, 400)

    for (let i = 0; i < 20; i++) {
      movers.push(new Mover(s.random(0, s.width), 0, s.random(3, 20), s))
    }
  }

  s.draw = () => {
    s.background(0)
    s.rect(0, s.height / 2, s.width, s.height / 2)
    for (const mover of movers) {
      if (s.mouseIsPressed) {
        const wind = s.createVector(0.1, 0)
        mover.applyForce(wind)
      }

      if (mover.pos.y > s.height / 2) {
        mover.drag()
      }
      const gravity = s.createVector(0, 0.2)
      const weightA = p5.Vector.mult(gravity, mover.mass)

      mover.applyForce(weightA)
      mover.friction()

      mover.update()

      mover.edges()
      mover.show()
    }
  }
}
