// CONCATENATION

// EX1: Combine "JavaScript" and "is fun" with a space in between using the + operator.

console.log('JavaScript' + ' ' + 'is fun') // JavaScript is fun


// EX2: Create variables firstName = "Sarah", lastName = "Chen", city = "New York".
// Use template literals to create: "Sarah Chen lives in New York"

let firstName = "Sarah"
let lastName = "Chen"
let city = "New York"

console.log(`${firstName} ${lastName} lives in ${city}`) // Sarah Chen lives in New York


// EX3: Write code that logs the result of:
// 5 + 5 , "5" + 5 , 5 + "5" , "5" + "5"

console.log(5 + 5)      // 10
console.log("5" + 5)    // 55
console.log(5 + "5")    // 55
console.log("5" + "5")  // 55


// EX4: Predict then verify:
// 1 + 2 + "3"
// "1" + 2 + 3
// 1 + "2" + 3

console.log(1 + 2 + "3")   // 33
console.log("1" + 2 + 3)   // 123
console.log(1 + "2" + 3)   // 123


// EX5: Given item = "Coffee", price = 4.5, quantity = 2, tax = 0.08
// Use template literals

let Item = 'Coffee'
let Quantity = 2
let Subtotal = 9
let Tax = 0.72
let Total = Subtotal + Tax

console.log(`Item: ${Item}`)
console.log(`Quantity: ${Quantity}`)
console.log(`Subtotal: ${Subtotal}`)
console.log(`Tax: ${Tax}`)
console.log(`Total: ${Total}$`)