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