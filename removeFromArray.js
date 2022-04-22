// Function that returns string.
const helloWorld = function () {
    return 'Hello, World!';
};

// Function that removes a number from an array.
function removeFromArray(Array, Num) {
    Num = Array.splice(Num - 1, 1);
    return Array;
}
