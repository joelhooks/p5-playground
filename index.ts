import p5 from 'p5'

new p5((s: p5) => {
  s.setup = () => {
    s.createCanvas(500, 500, s.WEBGL)
  }

  s.draw = () => {
    s.background(0)
    s.push()
    s.rotate(90)
    s.translate(5, 5, 5)
    s.circle(10, 10, 100)
    s.pop()
  }
})
