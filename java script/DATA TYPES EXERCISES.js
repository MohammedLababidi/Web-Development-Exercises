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