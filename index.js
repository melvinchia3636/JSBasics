// a variable that can be changed in
// the future
let variable = 1
// a variable that cannot be modified
const variable2 = 3
// sum two variables
const sum = variable + variable2

// this is a single line comment

/*
this is a multiline comment
you can type multiple lines of comment
here
*/

let num1 = 2
let num2 = 10

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2) // modulus
console.log(num1 ** num2) // power

// return the original number
// and num = num + 1
console.log(num1++)
// num = num + 1
// and return the result number
console.log(++num1)

// return the original number
// and num = num - 1
console.log(num2--)
// num = num - 1
// and return the result number
console.log(--num2)

let num;

// assignment operator
// num = num (operator) (value)
num = 14
num += 1
num -= 1
num /= 2
num *= 2
num %= 4
num **= 10
console.log(num)

const string1 = "Hello"
const string2 = "World"

console.log(string1 + string2)
console.log(string1 + " " + string2 + "!")

let string = "Hello"
string += " World"
console.log(string)

console.log("We have " + 87 + " apples")
console.log("10 = 10 is equal to " + (10 === 10))

// equal value
console.log(10 == "10")
console.log(true == 1)
console.log([] == false)
console.log("0" == false)
// equal value and type
console.log(10 === "10")
console.log(true === 1)
console.log([] === false)
console.log("0" === false)

// not equal in value
console.log("0" != false)
// not equal in value and type
console.log("0" !== false)

console.log(2 > 1)
console.log(2 < 3)
console.log(2 >= 2)
console.log(2 <= 2)

// condition ? "condition is true" : "condition is false"
console.log(2 > 1 ? "2 is greater than 1" : "2 is not greater than 1")

// and operator
console.log(1 === 1 && 2 === 2)
console.log(1 === 1 && 2 === 3)

// or operator
console.log(1 === 1 || 2 === 2)
console.log(1 === 1 || 3 === 2)
console.log(1 === 3 || 2 === 2)

// not operator
console.log(!(1 === 1))
console.log(!(1 !== 1))

// Returns type of an object in string
// CAUTION: {} and [] are both object in JS
console.log(typeof "Hello World")
console.log(typeof 0)
console.log(typeof true)
console.log(typeof [1, 2, 3])
console.log(typeof {name: "LOL", age: 87})
console.log(typeof null)
console.log(typeof NaN) // Not a Number
console.log(typeof undefined)

// USE THIS TO CHECK IF THE OBJECT
// IS AN ARRAY
console.log(Array.isArray([]))
console.log(Array.isArray({}))

function normalFunction(a, b) {
  return a + b
}

const arrowFunction = (a, b) => a + b

const arrowFunction2 = (a, b) => {
  console.log('Do something here')
  return a + b
}

// object = {
//   key: value,
//   key2: value2
// }
const user = {
  id: 4896,
  username: "melvinchia",
  firstName: "Melvin",
  lastName: "Chia",
  hobby: [
    "coding",
    "programming",
    "writing codes",
  ],
  bestFriend: {
    id: 5487,
    username: "melvinichia2",
    firstName: "aicH",
    lastName: "nivleM",
    hobby: null
  },
  randomArrowFunction: () => {
    console.log("aww yeah")
  },
  randomNormalFunction: function(a, b) {
    console.log("aww yeah 2")
    return a + b
  },
  helloToMyself: function() {
    console.log(this.randomNormalFunction(8, 7))
    console.log("Hello " + this.firstName + "!")
  }
}

console.log(user.firstName)
console.log(user["firstName"])

user.firstName = "Malvin"
user["lastName"] = "Chea"
console.log(user.firstName)
console.log(user.lastName)

// the object will return undefined if
// the key is not found in the object
console.log(user.age)
console.log(user["age"])

delete user.lastName
console.log(user.lastName)

user.randomArrowFunction()
user.randomNormalFunction()
user.helloToMyself()

const doubleQuote = "John Doe says: \"Hello World!\""
const singleQuote = 'John Doe says: \'Hello World!\''
const backSlash = "This is a \\ backslash \\"
console.log(backSlash)

// jump to a new line
console.log("a line\nnew line")
// tab character
console.log("a line\n\ta new line")

// break a long line of code
console.log("Lorem ipsum dolor sit amet, \
consectectur \
adisiplin elit...")

let s = "string"
// not recommended
let sObject = new String("string")

const alphabet = "abcdefghijklmnopqrstuvwxyz"
console.log(alphabet.length)

// three ways to slice a string
console.log(alphabet.slice(5, 10))
console.log(alphabet.substring(5, 10))
// str.substr(start, length)
// deprecated so better not use it
console.log(alphabet.substr(5, 5))

console.log(alphabet.replace("abc", "xyz"))

console.log(alphabet.toUpperCase())
console.log(alphabet.toUpperCase().toLowerCase())

const hello = "Hello"
const world = "World"

console.log(hello.concat(" ", world, "!"))

const dirtyString = "        \n   hello world     \n\n\n\n\n\n\n     "
console.log(dirtyString.trim())

const id = "11"
console.log(id.padStart(5, "0"))
console.log(id.padEnd(5, "0"))

console.log(alphabet.charAt(5))
console.log(alphabet[5])

// you can't change a character in a string
let someString = "abc"
someString[1] = "x"
console.log(someString)

let spacedAlphabet = "abc def ghi jkl mno pqr stu vwx yz"
console.log(spacedAlphabet.split(" "))

let dashedSeparatedAlphabet = "abc-def-ghi-jkl-mno-pqr-stu-vwx-yz"
console.log(dashedSeparatedAlphabet.split("-"))

const randomString = "abcdeabcdeabcdef"

console.log(randomString.indexOf("abc"))
console.log(randomString.lastIndexOf("abc"))

console.log(randomString.includes("abc"))
console.log(randomString.includes("xyz"))

console.log(randomString.startsWith("abc"))
console.log(randomString.startsWith("bca"))
console.log(randomString.endsWith("def"))
console.log(randomString.endsWith("fed"))

const name = "Melvin Chia"
const name2 = "Chia Melvin"
const templateString = `
  Hello "${name.replace("Chia", "Chea")}"
  and '${name2}'!
  1 + 1 is equal to ${1 + 1}
`
console.log(templateString)

const largeNumber = 123e10
const smallNumber = 123e-10
console.log(largeNumber)
console.log(smallNumber)

// javascript integers are accurate up to 15 digits
const veryveryLargeNumber = 999999999999999999
console.log(veryveryLargeNumber)

const num11 = 100
const num112 = 10
const num12 = "10"
console.log(num11 + num12)
console.log(num12 + num11)
console.log(num11 + num112 + num12)

// for all operators except plus,
// javascript will try to convert all
// operands into valid numbers
console.log(num11 - num12)
console.log(num11 * num12)
console.log(num11 / num12)
console.log(num11 % num12)
console.log(num11 ** num12)

const normalNumber = 87
const SUSNumber = "Hello World!"
console.log(normalNumber - SUSNumber)
console.log(normalNumber * SUSNumber)
console.log(normalNumber / SUSNumber)
console.log(normalNumber % SUSNumber)
console.log(normalNumber ** SUSNumber)

console.log(NaN + NaN)
console.log(1 + NaN)
console.log("1" - NaN)

console.log(1e10000)
console.log(typeof Infinity)
// Division by zero will generate infinity
console.log(2/0)
console.log(-2/0)

const hexNumber = 0xFF
console.log(hexNumber)
console.log(0xABC + 0x123)

const aNumber = 1024999
for (let i = 2; i <= 36; i++) {
  console.log(aNumber.toString(i))
}

// not recommended
const numberObject = new Number(1234)

const aNormalNumber2 = 1024.1234567
console.log(aNormalNumber2.toExponential(4))
console.log(aNormalNumber2.toFixed(4))
console.log(aNormalNumber2.toPrecision(6))
console.log(aNormalNumber2.valueOf())

const numberString = "1234"
const floatString = "1234.5678"

console.log(parseInt(numberString))
console.log(parseFloat(floatString))
console.log(parseInt(floatString))

console.log(Number(numberString))
console.log(Number(floatString))
console.log(Number("    10"))
console.log(Number("10    "))
console.log(Number("10    "))
console.log(Number(true))
console.log(Number(false))
console.log(Number("Helo World"))
console.log(Number(new Date("2022-2-22")))

console.log(parseInt("87 years old"))
console.log(parseInt("-87 years old"))
console.log(parseInt("10 20 30"))

console.log(parseFloat("87.87 years old"))
console.log(parseFloat("-87.87 years old"))
console.log(parseFloat("10.11 20.21 30.32"))

const rawString = "Hello world! :smile: :cry: :sad:"
console.log(Array.from(rawString.matchAll(/:(.*?):/g)).map(e => e))