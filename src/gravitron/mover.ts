import p5 from 'p5'

export class Mover {
  pos: p5.Vector
  vel: p5.Vector
  acc: p5.Vector
  s: p5
  r: number
  mass: number

  constructor(x: number, y: number, mass: number, s: p5) {
    this.s = s
    this.pos = s.createVector(x, y)
    this.vel = s.createVector(0, 0)
    this.acc = s.createVector(0, 0)
    this.mass = mass
    this.r = s.sqrt(mass) * 10
  }

  drag() {
    const force = this.vel.copy()
    force.normalize()
    force.mult(-1)

    const rho = 0.1
    const sa = 1
    const cod = 0.2
    const speedSq = this.vel.magSq()

    force.setMag(cod * speedSq)

    this.applyForce(force)
  }

  friction() {
    var diff = this.s.height - (this.pos.y + this.r)
    if (diff < 1) {
      const force = this.vel.copy()
      force.normalize()
      force.mult(-1)

      const mu = 0.1
      const normal = this.mass
      force.setMag(mu * normal)
      this.applyForce(force)
    }
  }

  edges() {
    if (this.pos.y >= this.s.height - this.r) {
      this.pos.y = this.s.height - this.r
      this.vel.y *= -1
    } else if (this.pos.y <= this.r) {
      this.pos.y = this.r
      this.vel.y *= -1
    }

    if (this.pos.x >= this.s.width - this.r) {
      this.pos.x = this.s.width - this.r
      this.vel.x *= -1
    } else if (this.pos.x <= this.r) {
      this.pos.x = this.r
      this.vel.x *= -1
    }
  }

  applyForce(force: p5.Vector) {
    const newton = p5.Vector.div(force, this.mass)
    this.acc.add(newton)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)
    this.acc.set(0, 0)
  }

  show() {
    this.s.stroke(255)
    this.s.strokeWeight(2)
    this.s.fill(255, 100)
    this.s.ellipse(this.pos.x, this.pos.y, this.r * 2)
  }
}
