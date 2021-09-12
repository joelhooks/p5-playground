import p5 from 'p5'
import {Circle} from './circle'
import drawing from '../../romi-drawing.png'

export default (s: p5) => {
  const circles: Circle[] = []
  const spots: {x: number; y: number}[] = []
  let fuck: p5.Image

  const newCircle = () => {
    const random = Math.floor(s.random(0, spots.length - 1))
    const spot = spots[random]
    const density = 1

    const x = spot.x
    const y = spot.y

    let valid = true

    for (const circle of circles) {
      const d = s.dist(x, y, circle.x, circle.y)
      if (d < circle.r + 2) {
        valid = false
        break
      }
    }
    if (valid) {
      const index = Math.floor(x + y * s.width)
      let off = (y * s.width + x) * density * 4
      let rgba = [
        fuck.pixels[off],
        fuck.pixels[off + 1],
        fuck.pixels[off + 2],
        fuck.pixels[off + 3],
      ]

      const color = fuck.get(x, y)

      return new Circle(x, y, s.color(rgba))
    }
  }

  s.preload = () => {
    fuck = s.loadImage(drawing)
  }

  s.setup = () => {
    s.createCanvas(900, 851)
    fuck.loadPixels()

    for (let x = 0; x < fuck.width; x++) {
      for (let y = 0; y < fuck.height; y++) {
        const index = x + y * fuck.width
        const color = fuck.pixels[index * 4]
        const brightness = s.brightness([color])
        if (brightness > 1) {
          spots.push({x, y})
        }
      }
    }
  }

  s.draw = () => {
    s.background(0)
    let count = 0
    let total = 10
    let attempts = 0

    while (count < total) {
      const circle = newCircle()
      if (circle) {
        circles.push(circle)
        count++
      }
      attempts++
      if (attempts > 100) {
        s.noLoop()
        console.log('FINISHED')
        break
      }
    }

    for (const circle of circles) {
      if (circle.growing) {
        if (circle.edges(s)) {
          circle.growing = false
        } else {
          for (const other of circles) {
            if (other !== circle) {
              const d = s.dist(circle.x, circle.y, other.x, other.y)

              if (d - 2 < circle.r + other.r) {
                circle.growing = false
                break
              }
            }
          }
        }
      }

      circle.grow()
      circle.show(s)
    }
  }
}
