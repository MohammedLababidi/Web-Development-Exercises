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