import p5 from 'p5'

export class Walker {
  pos: p5.Vector
  vel: p5.Vector
  s: p5
  bright: number

  constructor(pos: p5.Vector, vel: p5.Vector, bright: number, s: p5) {
    this.pos = pos
    this.vel = vel
    this.s = s
    this.bright = bright
  }

  update() {
    this.pos.add(this.vel)
  }

  show() {
    this.s.stroke(this.bright)
    this.s.strokeWeight(2)
    this.s.point(this.pos.x, this.pos.y)
  }
}
