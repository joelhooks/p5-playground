import p5 from 'p5'

export class Walker {
  pos: p5.Vector
  vel: p5.Vector
  s: p5
  bright: p5.Color
  prev: p5.Vector
  acc: p5.Vector
  weight: number

  constructor(
    x: number,
    y: number,
    bright: p5.Color,
    s: p5,
    weight: number = 1,
  ) {
    this.pos = s.createVector(x, y)
    this.s = s
    this.bright = bright
    this.vel = s.createVector(-2, 2)
    this.prev = this.pos.copy()
    this.acc = p5.Vector.random2D()
    this.weight = weight
  }

  update() {
    this.prev.set(this.pos)
    this.vel = p5.Vector.random2D()
    let r = this.s.random(100)

    if (r < 0.005) {
      this.vel.mult(this.s.random(45, 307))
    } else {
      this.vel.setMag(6)
      this.acc = p5.Vector.random2D()
    }
    this.vel.add(this.acc)
    this.pos.add(this.vel)

    r = this.s.random(100)

    if (r < 0.002) {
      return new Walker(
        this.pos.x,
        this.pos.y,
        this.s.color('#ff00ccdd'),
        this.s,
      )
    } else if (r < 0.05) {
      return new Walker(
        this.pos.x,
        this.pos.y,
        this.s.color(this.s.random(50), 189),
        this.s,
        1,
      )
    }
  }

  show() {
    this.s.stroke(this.s.color(this.bright))
    this.s.strokeWeight(this.weight)
    this.s.line(this.pos.x, this.pos.y, this.prev.x, this.prev.y)
  }
}
