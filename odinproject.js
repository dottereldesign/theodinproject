// Template Literals
let greeting = `hello, ${string}`;
console.log(greeting);

let myName = 'Jamie';
let myCountry = 'New Zealand';
let greeting = `Hello, my name is ${myName} and I'm from ${myCountry}.`;
console.log(greeting);

// FOUNDATION PART 2 - EXERCISE 2
/**
 * The code below tells the browser to ask you for a number
 * then if that number is `6`, it returns `true` otherwise it returns `false`
 *
 * Change this code so it returns `true` when the number is greater than or equal to 10, and false if it is less than 10
 */

number = Number(prompt('enter a number'));

function numberChecker() {
    if (number >= 10) {
        return true;
    } else {
        return false;
    }
}

birthYear = 1948;
thisYear = 1965;
firstName = 'Carlos';
lastName = 'Stevenson';

greeting = `Hello! My name is ${firstName} ${lastName} and I am ${
    thisYear - birthYear
} years old.`;
console.log(greeting);

// Function Decleration (parameter between the parentheses).
// Function arguments are the actual values we decide to pass to the function.
function favoriteAnimal(animal) {
    console.log(animal + ' is my favorite animal!');
}

favoriteAnimal('Cat');

const myText = 'I am a string';
const newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target string, and returns the newly formed string

let myText = 'I am a string';
let myString = myText.replace('string', 'a peanut.');
console.log(myString);

function favoriteAnimal(animal) {
    console.log(animal + ' is my favorite animal!');
}

favoriteAnimal('Giraffe');

// cat is the pramameter
// Saffy is the argument
function favouritecat(cat) {
    console.log(cat + ' is my favourite cat!');
}
favouritecat('Saffy');

let jack = 'eric';
function bestfriend(friend) {
    console.log(friend + ' is my bestfriend.');
}
bestfriend(jack);

function showMessage(hello) {
    console.log(hello + ', my name is Jamie.');
}
showMessage('Sup');

function showMessage(dad) {
    console.log(dad + ' is the best.');
}
showMessage('Mark');

function showMessage(from, text) {
    // parameters: from, text
    console.log(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    console.log(from + ': ' + text);
}
let from = 'Ann';
showMessage(from, 'Hello'); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
console.log(from); // Ann

function showMessage(from, text = 'no text given') {
    console.log(from + ': ' + text);
}
showMessage('Ann', 'Hello'); // Ann: no text given

function add(a, b) {
    return a + b;
}

function average(a, b) {
    return add(a, b) / 2;
}

let x = average(10, 20);

// Function Declaration
function sum(a, b) {
    return a + b;
}
sum(5, 6);

//
//
//
//
//
function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result); // 3

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));

// 1. Write a function called add7 that takes one number and returns that number + 7.
function addSeven(number) {
    return number + 7;
}
alert(addSeven(44));

//
// 2. Write a function called multiply that takes 2 numbers and returns their product.
function multiply(number1, number2) {
    return number1 * number2;
}
alert(multiply(2, 2));

//
// 3. Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}
alert(capitalize("Hi, I'm Jamie."));

// 4. Write a function called lastLetter that takes a string and returns the very last letter of that string:
// lastLetter("abcd") should return "d"
function lastletter(string) {
    return string.slice(-1);
}

let answer = parseInt(
    prompt('Please enter the number you would like to FizzBuzz up to: '),
);
for (let i = 1; i <= answer; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

const a = 'Hello';
const b = 'World';
console.log(c);
