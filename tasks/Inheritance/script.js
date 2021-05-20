function Builder(int) {
  this.int = int
}

Builder.prototype.get = function get() {
  return this.int
}

function IntBuilder(int) {
  Builder.call(this, int)
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.plus = function plus(...n) {
  this.int = n.reduce((acc, currentValue) => acc + currentValue, this.int)
  return this
}

IntBuilder.prototype.minus = function minus(...n) {
  this.int = n.reduce((acc, currentValue) => acc - currentValue, this.int)
  return this
}

IntBuilder.prototype.multiply = function multiply(n) {
  this.int *= n
  return this
}

IntBuilder.prototype.divide = function divide(n) {
  this.int = Math.floor(this.value / n)
  return this
}

IntBuilder.prototype.mod = function mod(n) {
  this.int %= n
  return this
}

IntBuilder.prototype.random = function random(from, to) {
  this.int = Math.floor(Math.random() * (to - from + 1) + from)
  return this
}

const intBuilder = new IntBuilder(10)

console.log(intBuilder.random(10, 25))

class StringBuilder extends Builder {
  constructor(int) {
    super(int)
    this.int = int
  }

  plus(...n) {
    this.int += n.join('')
    return this
  }

  minus(n) {
    this.int = this.int.slice(0, this.int.length - n)
    return this
  }

  multiply(n) {
    this.int = this.int.repeat(n)
    return this
  }

  divide(n) {
    const k = Math.floor(this.int.length / n)
    this.int = this.int.slice(0, this.int.length - k)
    return this
  }

  remove(n) {
    this.int = this.int.split(n).join('')
    return this
  }

  sub(from, n) {
    this.int = this.int.substring(from, from + n)
    return this
  }
}

const strBuilder = new StringBuilder('Hello')

console.log(strBuilder.sub(3, 2))
