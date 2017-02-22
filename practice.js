//Level 1

//1. Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.

function greatThanThree(x, y) {
    if (x > 3 && y > 3) return true;
    else return false;
}

//BONUS - solution without using > or <

function greaterThanThree(x, y) {
    if ((Math.max(x, 3) === 3) || (Math.max(y, 3) === 3)) return false;
    else return true;
}

//OR Harder way:

// -6/3 = -2.00
// -2/3 = -0.66
// 0/3 = 0.00
// 1/3 = 0.33
// 2/3 = 0.66
// 3/3 = 1.00
// 4/3 = 1.33
// 5/3 = 1.66

function greaterThanThreeDiv(x, y) {
    var a = parseFloat(x / 3).toFixed(2);
    var b = parseFloat(y / 3).toFixed(2);

    var aStr = a.toString();
    var bStr = b.toString();

    //if either number is a negative number
    if (aStr[0] === "-" || bStr[0] === "-") return false;

    //determine the numbers before and after the decimal point
    var aBforDec = parseInt(aStr.substr(0, ((aStr.indexOf(".")))));
    var bBforDec = parseInt(bStr.substr(0, ((bStr.indexOf(".")))));

    var aAfterDec = parseInt(aStr.substr(((aStr.indexOf(".")) + 1), (aStr.length - 1)));
    var bAfterDec = parseInt(bStr.substr(((bStr.indexOf(".")) + 1), (bStr.length - 1)));

    //if either number is 0, 1 or 2
    if (aBforDec === 0 || bBforDec === 0) return false;

    //if either number is 3
    if ((aBforDec === 1 && aAfterDec === 0) || (bBforDec === 1 && bAfterDec === 0)) return false;

    //if we get here, then both numbers are greater than 3
    return true;
}

//2. Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise return false.

function aOrB(let) {
    if (let == 'a' ||
        let == 'b') return true;
    else return false;
}

//3. Write a function named greatThanTwo that returns true if the number is 2 and false otherwise
// -- note: even though the function name implies something else, I will follow the instructions and NOT check if the number is greater than 2

function greatThanTwo(x) {
    if (x === 2) return true;
    else return false;
}

//Level 2

//1. Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.

//assuming only integers are being passed
//if 3 and 10 are passed to the function, 4, 6, 8 will be returned.
//assuming number 1 will always be less or equal to number 2.


function printEvenBetween(x, y) {
    var arr = [];
    for (var i = x + 1; i < y; i++) {
        var z = i % 2;
        if (z === 0) arr.push(i);
    }
    return arr;
}

//2. Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers between those two arguments.
//if 3 and 10 are passed to the function, 4, 5, 6, 7, 8, 9 will be returned.
//assuming number 1 will always be less or equal to number 2.

function printBetween(x, y) {
    var arr = [];

    for (var i = x + 1; i < y; i++) {
        arr.push(i);
    }
    return arr;
}

//Level 3

//1. Write a function named fib that takes an argument n. Assume that n is a number. And the function returns an array of n numbers of the fibonacci sequence.
//from Google:
//Fi·bo·nac·ci se·ries
//noun MATHEMATICS
//noun: Fibonacci sequence
//a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is //the series 1, 1, 2, 3, 5, 8, etc.

function fib(n) {
    var arr = [];

    for (var i = 0; i < n; i++) {
        if (i <= 1) arr.push(1);
        else arr.push((arr[i - 2] + arr[i - 1]));
    }
    return arr;
}