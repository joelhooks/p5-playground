import p5 from 'p5'

export class Mover {
  pos: p5.Vector
  vel: p5.Vector
  acc: p5.Vector
  s: p5

  constructor(x: number, y: number, s: p5) {
    this.s = s
    this.pos = s.createVector(x, y)
    this.vel = p5.Vector.random2D()
    this.vel.mult(s.random(3))
    const mouse = this.s.createVector(this.s.mouseX, this.s.mouseY)
    this.acc = p5.Vector.sub(mouse, this.pos)
  }

  update() {
    const mouse = this.s.createVector(this.s.mouseX, this.s.mouseY)
    this.acc = p5.Vector.sub(mouse, this.pos)
    this.acc.setMag(1)
    this.vel.add(this.acc)
    this.vel.limit(5)
    this.pos.add(this.vel)
  }

  show() {
    this.s.stroke(255)
    this.s.strokeWeight(2)
    this.s.fill(255, 100)
    this.s.ellipse(this.pos.x, this.pos.y, 5, 5)
  }
}
