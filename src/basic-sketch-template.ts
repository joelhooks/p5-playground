import p5 from 'p5'

export let s: p5

export default (p: p5) => {
  s = p

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)
  }

  s.draw = () => {
    s.background(0)
  }
}
