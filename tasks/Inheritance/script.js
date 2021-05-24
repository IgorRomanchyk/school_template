function Builder(value) {
  this.value = value
}

Builder.prototype.get = function get() {
  return this.value
}

function IntBuilder(value) {
  Builder.call(this, value)
}

IntBuilder.random = function random(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from)
}

IntBuilder.prototype = Object.create(Builder.prototype)
IntBuilder.prototype.constructor = IntBuilder

IntBuilder.prototype.plus = function plus(...n) {
  this.value = n.reduce((acc, currentValue) => acc + currentValue, this.value)
  return this
}

IntBuilder.prototype.minus = function minus(...n) {
  this.value = n.reduce((acc, currentValue) => acc - currentValue, this.value)
  return this
}

IntBuilder.prototype.multiply = function multiply(n) {
  this.value *= n
  return this
}

IntBuilder.prototype.divide = function divide(n) {
  this.value = Math.floor(this.value / n)
  return this
}

IntBuilder.prototype.mod = function mod(n) {
  this.value %= n
  return this
}

const intBuilder = new IntBuilder(10)

console.log(intBuilder.minus(3, 5))

class StringBuilder extends Builder {
  constructor(value = '') {
    super(value)
  }

  plus(...n) {
    this.value += n.join('')
    return this
  }

  minus(n) {
    this.value = this.value.slice(0, this.value.length - n)
    return this
  }

  multiply(n) {
    this.value = this.value.repeat(n)
    return this
  }

  divide(n) {
    const k = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, this.value.length - k)
    return this
  }

  remove(n) {
    this.value = this.value.split(n).join('')
    return this
  }

  sub(from, n) {
    this.value = this.value.substring(from, from + n)
    return this
  }
}

const strBuilder = new StringBuilder('Hello')

console.log(strBuilder.sub(3, 2))
