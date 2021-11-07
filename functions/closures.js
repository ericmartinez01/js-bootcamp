const createCounter = () => {
  let count = 0

  return {
    increment() {
      count++
    }, decrement() {
      count--
    }, get() {
      return count
    }
  }
}

// const counter = createCounter()
// counter.increment()
// counter.decrement()
// counter.decrement()
// console.log(counter.get())

// Adder
const add = (a, b) => a + b
const createAdder = (a) => {
  return (b) => {
    return a + b
  }
}

const add10 = createAdder(10)
// console.log(add10(-2))
// console.log(add10(20))
// const add100 = createAdder(100)
// console.log(add100(-90))

// Tipper

// 1. Create createTipper which takes in the base tip (.15 for %15 tip)
const createTipper = (tipPercentage) => {
  return (billAmount) => {
    return `%${tipPercentage * billAmount} tip`
  }
}
// 2. Set it up to return a function that takes in the bill amount
// 3. Call createTipper to generate a few functions for different percentages
// 4. Use the generated functions to calculate tips and print them

const tip10 = createTipper(.10)
console.log(tip10(100))
console.log(tip10(200))