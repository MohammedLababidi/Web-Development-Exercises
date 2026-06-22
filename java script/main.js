//DATA TYPES EXERCISES:

//exercise 1:
let myName = 'mohammed'
let myAge = 24

console.log(typeof myName) // string
console.log(typeof myAge) // number


//exercise 2:
let v1
let v2 = null

console.log(typeof v1) // undefined
console.log(typeof v2) // object


//exercise 3:
let data = null

if (data === null)
{
    console.log(data) // null
}


// exercise 4:
Boolean(0), Boolean(1), Boolean(""), Boolean("hello"), Boolean(null), Boolean(undefined)

console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean("")) // false
console.log(Boolean("hello")) // true
console.log(Boolean(null)) // false
console.log(Boolean(undefined)) // false



// CONDITONS

//EX1:Write code that checks a number and prints "positive", "negative", or "zero".

let number = -5
if(number >= 1)
{
    console.log('Positive')
}
else if(number < 0)
{
    console.log('Negative')
}
else if(number === 0)
{
    console.log('Zero')
}

// EX2: Use ternary to assign a message variable: if isPremium is true, message is "20% off", else "5% off".

let isPremium = true
let message = isPremium ? '20% off' : '5% off'
console.log(message)

//EX3: Write a condition that checks if a year is a leap year (divisible by 4, but not by 100 unless also by 400). Test with 2020, 2021, 1900, 2000.

let year = 2021
if(year %4 === 0 || year %400 === 0)
{
    console.log('not a leap year')
}
else
{
    console.log('leap yaer')
}

// EX4: Write an if/else chain that checks:
// If username is "admin" AND password is "1234" → "Welcome admin"
// Else if username is "guest" AND password is "guest" → "Welcome guest" 
// Else → "Access denied

let username = 'admin'
let password = 1234
if(username === 'admin' && password === 1234)
{
    console.log('Welcome admien')
}
else if(username === 'guest' && password === 'guest')
{
    console.log('Welcome guest')
}
else 
{
    console.log('Access denied')
}

// EX5: Rewrite this as a nested ternary:
// let grade;
// if (score >= 90) grade = "A";
// else if (score >= 80) grade = "B";
// else if (score >= 70) grade = "C";
// else if (score >= 60) grade = "D";
// else grade = "F";

let grade = 80
let score = grade >= 90 ? 'A' : grade >= 80 ? 'B' : grade >= 70 ? 'C' : grade >= 60 ? 'D' : 'F'
console.log(score)

// EX7: Write a condition that checks if a number is between 1 and 100 (inclusive). If yes, print "Valid". If below 1, print "Too low". If above 100, print "Too high".

let number = 39
if(number <= 100 && number >= 1)
{
    console.log('Valid')
}
else if(number < 1)
{
    console.log('too low')
}
else if(number > 100)
{
    console.log('too high')
}



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



// Loops

// EX1: Write a for loop that counts backward from 10 to 1 and logs each number.
// Then log "Blast off!".

for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("Blast off!")

// EX2: Use a while loop to calculate the sum of all numbers from 1 to 50.
// Log the result.

let number = 1
let sum = 0
while (number <= 50) {
    sum += number
    number++
}
console.log(sum)

// EX3: Write a for loop that prints the multiplication table for 7
// (7×1=7, 7×2=14, ..., 7×12=84).

let firstNumber = 7
for (let secondNumber = 1; secondNumber <= 12; secondNumber++) {
    console.log(firstNumber + "*" + secondNumber + "=" + firstNumber * secondNumber)
}

// EX4: Given an array [3, 7, 9, 12, 15, 18], use a for loop with break to find and log the first even number.

let array = [3, 7, 9, 12, 15, 18]
for (let i = 0 ; i < array.length ; i++)
{
    if(array[i] %2 === 0) 
    {
    console.log(array[i])
    break
    }
}

// EX5: Given a string "hello world", use a for loop to log each character, but use continue to skip vowels (a, e, i, o, u).

let str = 'hello world'

for(let i = 0 ; i < str.length ; i++)
{
    let char = str[i]
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
    {
        continue
    }
        console.log(char)
}

// EX6: Use nested loops to print:
// *
// **
// ***
// ****
// *****

let stars = ''
for(i = 0 ; i <= 5 ; i++)
{
    stars += '*'
    console.log(stars)
}



// Switch Statement

// EX1: Write a switch for dayNumber (1–7) that prints "Weekday" for 1–5 and "Weekend" for 6–7. Use fall-through to group cases.
let dayNumber = 4
switch (dayNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday")
        break
    case 6:
    case 7:
        console.log("Weekend")
        break
}

// EX2: Write a switch that takes operator (+, -, *, /) and two numbers, then logs the result. Test with 10 + 5.

let num1 = 10
let num2 = 5
let operator = "+"
switch (operator) {
    case "+":
        console.log(num1 + num2)
        break
    case "-":
        console.log(num1 - num2)
        break
    case "*":
        console.log(num1 * num2)
        break
    case "/":
        console.log(num1 / num2)
        break
}


// EX3: Write a switch for month (1–12) that prints:
// Winter: 12, 1, 2 
// Spring: 3, 4, 5
// Summer: 6, 7, 8
// Fall: 9, 10, 11 
// Use fall-through to group months.

let month = 7
switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Winter")
        break
    case 3:
    case 4:
    case 5:
        console.log("Spring")
        break
    case 6:
    case 7:
    case 8:
        console.log("Summer")
        break
    case 9:
    case 10:
    case 11:
        console.log("Fall")
        break
}

// EX4: Write a switch for statusCode:
// 200 → "OK"
// 404 → "Not Found"
// 500 → "Server Error"
// default → "Unknown status"

let statusCode = 404
switch (statusCode) {
    case 200:
        console.log("OK")
        break
    case 404:
        console.log("Not Found")
        break
    case 500:
        console.log("Server Error")
        break
    default:
        console.log("Unknown status")
}


// EX5: Write a switch for level (1–3) where:
// Level 1: "Basic"
// Level 2: "Intermediate" (and also includes Basic features)
// Level 3: "Advanced" (includes all lower levels) 
// Use fall-through so level 3 also shows "Intermediate" and "Basic".

let level = 3
switch (level) {
    case 3:
        console.log("Advanced")
    case 2:
        console.log("Intermediate")
    case 1:
        console.log("Basic")
        break
}

// EX6: Write a switch for a command string ("start", "stop", "pause"). In each case, log the action, but purposely omit break for "start" so it also logs "stop". Observe what happens.

let command = "start"
switch (command) {
    case "start":
        console.log("Starting...")
        // no break
    case "stop":
        console.log("Stopping...")
        break
    case "pause":
        console.log("Paused")
        break
}

// EX7: Write a switch that uses switch(true) to check score ranges:
// score >= 90 → "A"
// score >= 80 → "B"
// score >= 70 → "C"
// score >= 60 → "D"
// default → "F" 
// Test with score = 85.

let score = 85
switch (true) {
    case score >= 90:
        console.log("A")
        break
    case score >= 80:
        console.log("B")
        break
    case score >= 70:
        console.log("C")
        break
    case score >= 60:
        console.log("D")
        break
    default:
        console.log("F")
}



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




// functions & Spread Operator

// EX1: Write a function multiply(a, b) that returns the product. Call it with 4 and 5, then log the result.

function multipy(a, b) {
    return (a * b)
}
console.log(multipy(4, 5))

// EX2: Write an arrow function greet(name = "Guest") that returns "Hello, name!". Test with "Maria" and with no argument.

const greet = (name = 'Guest') => {
    return `Hello, ${name}!`
}
console.log(greet('Maria'))
console.log(greet())

// EX3: Write a function product(...numbers) that multiplies all arguments and returns the result. Test with product(2,3,4) and product(5,10).

function product(...numbers) {
    let result = 1
    for (let number of numbers)
        result = result * number
    return result
}
console.log(product(2, 3, 4))
console.log(product(5, 10))

// EX4: Write code that merges arr1 = [1, 2, 3] and arr2 = [4, 5, 6] into one array using spread. Then log the merged array.

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
console.log([...arr1 , ...arr2])

// EX5: Given numbers = [45, 12, 78, 34, 89, 23], use spread with Math.max() to find and log the largest number.

let numbers1 = [45, 12, 78, 34, 89, 23]
console.log(Math.max(...numbers1))

// EX6: Write a function sendMessage(greeting, ...recipients) that returns an array of strings like:
// Example: sendMessage("Hi", "Anna", "Bob", "Charlie")
// Returns: ["Hi Anna", "Hi Bob", "Hi Charlie"]

function sendMessage(greeting, ...recipients)
{
    let message = []
    for(let recipient of recipients)
    {
        message.push(greeting + ' ' + recipient)
    }
        return message
    
}
console.log(sendMessage("Hi", "Anna", "Bob", "Charlie"))

// EX7: Create defaultSettings = { theme: "dark", fontSize: 14, notifications: true }. Create userSettings = { fontSize: 18, language: "en" }. Use spread to merge them (user settings override defaults). Log the final object.

defaultSittings = {theme: "dark", fontSize: 14, notifications: true}
userSettings = { fontSize: 18, language: "en" }
console.log({...defaultSittings , ...userSettings})