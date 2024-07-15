function displayCurrentDateTime() {
    var now = new Date();
    return now;


}

document.write(displayCurrentDateTime())
document.write("<br>");
document.write("<br>");
var firstname = prompt("enter your first name");
var lastname = prompt("enter your last name")
function greet(firstname, lastname) {
    var fullname = firstname + lastname;
    return fullname
}
alert("hey , " + greet(firstname, lastname));
document.write("<br>");
document.write("<br>");
var num1 = +prompt("enter first num");
var num2 = +prompt("enter second num");
function sum(x, y) {
    var add = x + y;
    return add;
}

document.write("THE ADDITION OF TWO NUMBER IS " + sum(num1, num2));
document.write("<br>");
document.write("<br>");

var numb1 = +prompt("enter  a first number");
var operator = prompt("enter  a operator eg , +,-,*,/");
var numb2 = +prompt("enter  a second number");

function calculator() {
    if (operator === "+") {
        return numb1 + numb2
    }

    else if (operator === "-") {
        return numb1 - numb2
    }
    else if (operator === "*") {
        return numb1 * numb2
    }
    else if (operator === "/") {
        if (numb2 === 0) {
            alert("error, division by zero");
        }
        else {
            return numb1 / numb2
        }
    }
    else {
        return "invalid operator"
    }
}
document.write(calculator());
document.write("<br>");
document.write("<br>");

var factorialnum = +prompt("enter a number for its factorial")
function factorial() {
    if (factorialnum < 0) {
        return "factorial of negative numberb is not possible "
    }
    else {
        var result = 1;
        for (var i = 1; i <= factorialnum; i++) {
            result *= i;

        }
        return ("The factorial of " + factorialnum + " is " + result)
    }
}

document.write(factorial())

document.write("<br>");
document.write("<br>");
var inputnum = +prompt("enter a number for its square")
function square(x) {

    var sqr = x * x;
    return sqr
}

document.write(" The square of " + inputnum + " is " + square(inputnum));
document.write("<br>");
document.write("<br>");

var startnum = +prompt("enter a number for counting where do you want to start");
var endtnum = +prompt("enter a number for counting where do you want to end");
function counting() {
    for (var i = startnum; i <= endtnum; i++) {
        document.write(i + " <br>")
    }
}
counting();
document.write("<br>");
document.write("<br>");
var base = +prompt("enter a base")
var perpendicular = +prompt("enter a perpendicular")
function hypotenous() {
    function calsquare(x) {
        return x * x
    }
    var hypo = Math.sqrt(calsquare(base) + calsquare(perpendicular));
    return "The hypotenous of right angle triangle with base " + base + " and perpendicular " + perpendicular + '   is ' + Math.floor(hypo)
}

document.write(hypotenous())
document.write("<br>");
document.write("<br>");

var width = 10;
var height = 5;
function widthheight(width, height) {
    return width * height
}

document.write("THe area is " + widthheight(width, height))
document.write("<br>");
document.write("<br>");

function isPalindrome(str) {
    var len = str.length;
    for (var i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return str + " is not a palindrome"
        }
        else {
            return str + " is a palindrome"
        }
    }
}

alert(isPalindrome(prompt("Enter a word:")))
document.write("<br>");
document.write("<br>");


function findLongestString() {
    var str = prompt("Enter a string:")
    var words = str.split(" ")
    var longestWord = ""
    var maximumLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maximumLength) {
            longestWord = words[i]
            maximumLength = words[i].length
        }
    }
    return longestWord + " is the longest word"
}
alert(findLongestString())

document.write("<br>");
document.write("<br>");

var string = prompt("enter a string ");
var lett = prompt("enter a letter to count the pccurance in string");
function countoccurance(string, lett) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === lett) {
            count++

        }

    }
    return count
}
alert(countoccurance(string, lett));

var radius = +prompt("enter a radius");
function circumference(radius) {
    var pi = Math.PI
    var rad = 2 * pi * radius;
    return "The circumference of ciecle is  " + rad
}

function areaofcircle(radius) {
    var pi = Math.PI
    var area = pi * Math.pow(radius, 2);
    return "The area of circle is " + area
}

alert(circumference(radius));
alert(areaofcircle(radius))