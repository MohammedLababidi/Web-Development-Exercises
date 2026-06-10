// EX1: Given the following list of names:
// [moaz, yassen, lana, mazen, loay, lama]. Iterate through each name, and for each character in the name, if the character is one of the vowels (a, i, o, u, e), convert it to uppercase.
// The final printed output should look like this: [mOAz, yAssEn, lAnA, mAzEn, lOAy, lAmA].

let arr = ['moaz', 'yassen', 'lana', 'mazen', 'loay', 'lama']
let resultt = arr.map(function (name) {
    let letters = name.split('')
    return letters.map(function (letter) {
        if (letter === 'a' || letter === 'o' || letter === 'u' || letter === 'i' || letter === 'e') {
            return letter.toUpperCase()
        }
        else {
            return letter
        }
    }).join('')
})
console.log(resultt)

// EX2: I want to create 2 arrays: one for males and one for females. I want to store each name inside an object, and each person should have their own ID consisting of 3 digits. Create the IDs, making sure they are not repeated among all people.
// Names: [yamen, majd, hanan, rawan, yazan, moaz]
// Expected output example for men: [{name: "yamen", id: 231}, {name: "majd", id: 478}, ...]
// (Note: hanan and rawan go to females array; the rest go to males.)

let names = ['yamen', 'majd', 'hanan', 'rawan', 'yazan', 'moaz']
let femaleNames= ['hanan', 'rawan']
let males = []
let females = []
let usersIds = []
names.forEach(function(name){
    let id = Math.floor(100 + Math.random() * 900)
    while(usersIds.includes(id))
    {
       id = Math.floor(100 + Math.random() * 900) 
    }
    usersIds.push(id)
    if(femaleNames.includes(name))
    {
        females.push({name: name , id: id})
    }
    else 
    {
        males.push({name: name , id: id})
    }
})
console.log(males)
console.log(females)

// EX3: You are given the following array of items:
// ["banana", "syria", "iphone 12", "orange", "blueberry", "france", "labtop", "s23", "turkey"]
// Classify these items into three separate arrays:
// countries
// fruits
// electronics
// Then, print each array as a list, starting with the array name as a title, followed by the items numbered from 1.
// Expected output:
// text
// fruits:
// 1- banana
// 2- orange
// 3- blueberry
// countries:
// 1- syria
// 2- france
// 3- turkey
// electronics:
// 1- iphone 12
// 2- labtop
// 3- s23

let countries = []
let fruits = []
let electronics = []
let countriesList = ["syria" , "france" , "turkey"]
let fruitsList = ["banana" , "orange" , "blueberry"]
let electronicsList = ["iphone 12" , "labtop" , "s23"]
let array = ["banana", "syria", "iphone 12", "orange", "blueberry", "france", "labtop", "s23", "turkey"]

array.forEach(function(name){
    if(countriesList.includes(name))
    {
        countries.push(name)
    }
    else if(fruitsList.includes(name))
    {
        fruits.push(name)
    }
    else if(electronicsList.includes(name))
    {
        electronics.push(name)
    }
})
console.log('countries:')
countries.forEach(function(name , index){
    console.log(`${index + 1}- ${name}`)
})
console.log()
console.log('fruits:')
fruits.forEach(function(name , index){
    console.log(`${index + 1}- ${name}`)
})
console.log()
console.log('electronics:')
electronics.forEach(function(name , index){
    console.log(`${index + 1}- ${name}`)
})

// EX4: Write a mathematical equation in the following form:
// 3x^2 + 4x + .3 = ....
// Where:
// x is a number entered by the user.
// The constants (3, 4, 3) are also numbers entered by the user.
// The only mathematical operation is addition (no subtraction — all constants are positive or handled via signed input if needed).
// Finally, print the output in the following format:
// text
// 3x^2 + 4x + 3 ====> 3(3)^2 + 4(3) + 3 = result
// Example: If x = 2, constants are 2, 6, 1, the output would be:
// text
// 2x^2 + 6x + 1 ====> 2(2)^2 + 6(2) + 1 = 21

let x = 2
let a = 3
let b = 4
let c = 3
let result = a * x**2 + b*x + c
console.log(`${a}(${x})^2 + ${b}(${x}) + ${c} = ${result}`)