// VARIABLES EXERCISES

// EX1: Create a let variable score starting at 0.
// Increment it by 10, then by 25, then by 5.
// Log the value after each change.

let score = 0

console.log('score =', score += 10) // score = 10
console.log('score =', score += 25) // score = 35
console.log('score =', score += 5)  // score = 40


// EX3: Write this exact code and explain the output:

console.log(a) // undefined

var a = 10

console.log(a) // 10


// EX4: Write this code and explain the error:

console.log(b)

let b = 20


// EX5: Write a block { let x = 5; var y = 10; }.
// Try to log x and y outside the block.
// Which one works? Why?

{
    let x = 5
    var y = 10
}

console.log(x) // Error
console.log(y) // 10


// EX6: Write code that demonstrates the difference
// between: let a = 5, let b = a++, let c = ++a

let a2 = 5

let b2 = a2++   // Post-increment
let c2 = ++a2   // Pre-increment

console.log(a2) // 7
console.log(b2) // 5
console.log(c2) // 7