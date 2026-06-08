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