'use strict'
const format = require('prettier-eslint')

class Calculator {
  // write your code here
  constructor (num = 1) {
    this.total = num
    this.circleWide = 0
    this.circleAround = 0
  }
  add (num) {
    this.total += num
    return this
  }
  add (num) {
    this.total += num
    return this
  }
  substract (num) {
    this.total -= num
    return this
  }
  multiply (num) {
    this.total *= num
    return this
  }
  divide (num) {
    this.total /= num
    return this
  }
  square () {
    this.total = Math.pow(this.total, 2)
    return this
  }
  squareRoot () {
    this.total = Math.sqrt(this.total, 2)
    return this
  }

  wideCircle (num) {
    this.circleWide = 3.14 * Math.pow(num, 2)
    return this
  }

  aroundCircle (num) {
    this.circleAround = 3.14 * (2 * num)
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

var calc = new Calculator(2)

console.log(calc.add(2).substract(1).total)

module.exports = Calculator
