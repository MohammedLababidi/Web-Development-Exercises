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