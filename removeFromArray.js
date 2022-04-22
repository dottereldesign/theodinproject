// Function that returns string which says, "Hello, World!"
const helloWorld = function () {
    return 'Hello, World!';
};

// Function that takes a string and then repeats it X amount of times depending on the number which is parsed.
const repeatString = function (string, num) {
    if (num >= 0) {
        return string.repeat(num);
    } else {
        return 'ERROR';
    }
};

// Function that returns a string reversed.
const reverseString = function (string) {
    let splitString = string.split('');
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join('');
    return (string = joinArray);
};

// Function that takes an Array and then removes the number from it which is parsed through.
function removeFromArray(Array, Num) {
    Num = Array.splice(Num - 1, 1);
    return Array;
}
