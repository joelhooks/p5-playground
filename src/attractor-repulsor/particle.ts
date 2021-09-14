import {s} from './index'
import p5 from 'p5'

export class Particle {
  pos: p5.Vector
  mass: number
  r: number
  vel: p5.Vector
  acc: p5.Vector
  prev: p5.Vector

  constructor(x: number, y: number, mass: number = 1) {
    this.pos = s.createVector(x, y)
    this.prev = s.createVector(x, y)
    this.mass = mass
    this.vel = s.createVector()
    this.acc = s.createVector()
    this.r = s.sqrt(mass) * 2
  }

  attractedTo(attractor: Particle) {
    const force = p5.Vector.sub(attractor.pos, this.pos)

    const dist = s.constrain(force.mag(), 0.1, 225)
    const distSq = s.constrain(force.magSq(), 0.1, 500)

    const G = 2

    const strength = (G * attractor.mass * this.mass) / distSq

    force.setMag(strength)

    if (dist < attractor.r + this.r) {
      force.mult(-2)
    }

    this.applyForce(force)
  }

  applyForce(force: p5.Vector) {
    const newton = p5.Vector.div(force, this.mass)
    this.acc.add(newton)
  }

  update() {
    this.vel.add(this.acc)
    this.vel.limit(9)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  }

  show(fillColor?: string) {
    s.strokeWeight(1)
    s.stroke(255)

    s.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)

    if (fillColor) {
      s.fill(fillColor)
      s.circle(this.pos.x, this.pos.y, this.r * 2)
    }

    this.prev = this.pos.copy()
  }
}
