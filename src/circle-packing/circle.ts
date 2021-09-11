import p5 from 'p5'

export class Circle {
  x: number
  y: number
  r: number
  growing: boolean = true
  color: p5.Color

  constructor(x: number, y: number, color: p5.Color) {
    this.x = x
    this.y = y
    this.color = color
    this.r = 2
  }

  show(s: p5) {
    // s.stroke(this.color)
    // s.strokeWeight(2)
    // s.noFill()
    s.fill(this.color)
    s.noStroke()
    s.ellipse(this.x, this.y, this.r * 2, this.r * 2)
  }

  grow() {
    if (this.growing) {
      this.r = this.r + 2
    }
  }

  edges(s: p5) {
    return (
      this.x + this.r > s.width ||
      this.x - this.r < 0 ||
      this.y + this.r > s.height ||
      this.y - this.r < 0
    )
  }
}
