import p5 from 'p5'

export default (s: p5) => {
  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)
    s.background(0)
  }

  s.draw = () => {
    s.translate(s.width / 2, s.height / 2)

    const vec = p5.Vector.random2D()
    vec.mult(s.random(50, 100))

    s.strokeWeight(4)
    s.stroke(255, 9)
    s.line(0, 0, vec.x, vec.y)
  }
}
