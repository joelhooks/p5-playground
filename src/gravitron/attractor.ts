import p5 from 'p5'
import {Mover} from './mover'

export class Attractor {
  pos: p5.Vector
  mass: number
  s: p5
  r: number

  constructor(x: number, y: number, mass: number, s: p5) {
    this.s = s
    this.pos = s.createVector(x, y)

    this.mass = mass
    this.r = s.sqrt(mass) * 10
  }

  attract(mover: Mover) {
    const force = p5.Vector.sub(this.pos, mover.pos)
    const distSq = this.s.constrain(force.magSq(), 25, 2500)

    const G = 2

    const strength = (G * (this.mass * mover.mass)) / distSq

    force.setMag(strength)
    mover.applyForce(force)
  }

  show() {
    this.s.fill(255)
    this.s.ellipse(this.pos.x, this.pos.y, this.r * 2)
  }
}
