import p5 from 'p5'

export class Walker {
  pos: p5.Vector
  vel: p5.Vector
  s: p5
  bright: number
  prev: p5.Vector

  constructor(x: number, y: number, bright: number, s: p5) {
    this.pos = s.createVector(x, y)
    this.s = s
    this.bright = bright
    this.vel = s.createVector(-2, 2)
    this.prev = this.pos.copy()
  }

  update() {
    this.prev.set(this.pos)
    this.vel = p5.Vector.random2D()
    const r = this.s.random(100)

    if (r < 1) {
      this.vel.mult(this.s.random(15, 85))
    } else {
      this.vel.setMag(2)
    }
    this.pos.add(this.vel)
  }

  show() {
    this.s.stroke(this.bright)
    this.s.strokeWeight(2)
    this.s.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
  }
}
