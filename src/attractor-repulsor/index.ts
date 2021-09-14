import p5 from 'p5'
import {Particle} from './particle'

export let s: p5

export default (p: p5) => {
  s = p

  const attractorA = new Particle(200, 200, 15)
  const attractorB = new Particle(10, 275, 33)
  let particles: Particle[] = []
  let attractors: Particle[] = []

  s.preload = () => {}

  s.setup = () => {
    s.createCanvas(500, 500)

    for (let i = 0; i < 100; i++) {
      particles.push(
        new Particle(
          s.random(s.width),
          s.random(s.height),
          s.floor(s.random(1, 4)),
        ),
      )
    }

    for (let i = 0; i < 4; i++) {
      attractors.push(
        new Particle(s.random(s.width), s.random(s.height), s.random(5, 15)),
      )
    }
    s.background(51)
  }

  s.draw = () => {
    for (const particle of particles) {
      for (const attractor of attractors) {
        particle.attractedTo(attractor)
      }
      particle.update()
      particle.show('#FF3300')
    }

    for (const attractor of attractors) {
      attractor.update()
      attractor.show('#0000FF')
    }
  }
}
