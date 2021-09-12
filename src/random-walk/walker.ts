import p5 from 'p5'

export class Walker {
  pos: p5.Vector
  s: p5
  bright: number

  constructor(x: number, y: number, bright: number, s: p5) {
    this.pos = s.createVector(x, y)
    this.s = s
    this.bright = bright
  }

  update() {
    this.pos.x += this.s.random(-2, 2)
    this.pos.y += this.s.random(-2, 2)
  }

  show() {
    this.s.stroke(this.bright)
    this.s.strokeWeight(2)
    this.s.point(this.pos.x, this.pos.y)
  }
}
