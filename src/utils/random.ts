export class Random {
  static generateRandomSeed(size: number) {
    return [...Array(size)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('')
  }

  seed: number
  hash: string

  constructor(hash?: string) {
    hash = hash ?? '0x' + Random.generateRandomSeed(64)
    this.hash = hash
    this.seed = parseInt(hash.slice(0, 16), 16)
  }

  random_dec() {
    this.seed ^= this.seed << 13
    this.seed ^= this.seed >> 17
    this.seed ^= this.seed << 5
    return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000
  }

  random_num(a: number, b: number) {
    return a + (b - a) * this.random_dec()
  }

  random_int(a: number, b: number) {
    return Math.floor(this.random_num(a, b + 1))
  }
}
