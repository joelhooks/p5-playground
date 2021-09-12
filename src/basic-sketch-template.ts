import p5 from 'p5'

export default (s: p5) => {
  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)
  }

  s.draw = () => {
    s.background(0)
  }
}
