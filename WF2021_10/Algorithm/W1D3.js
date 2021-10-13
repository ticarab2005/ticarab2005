// Conditionals - or "If Statements"
var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
// New keywork alert!!! If starts a conditional statement
// Followed by a set of parenthesis 
// In the parens, place a boolean expression
// After closing paren, curly vraces at the bookends of the code block


if (isSunny) {
    // whatToBring= whatToBring + "sunglasses, "
    whatToBring += "sunglasses, ";
}

// I should bring: a sunglasses
if (temperature < 50) {
    whatToBring += "a coat, ";
}

// -> I should bring: a sunglasses, a coat, 
console.log(whatToBring)

if (isRaining) {
    whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);
// -> I should bring: a sunglasses, a coat, and a smile!

// Prepare for downcount
// ELSE means - OTHERWISE
for (var i = 10; i > 0; i--) {
    // 
    if (i != 2) {
        console.log(i);
        // otherwise
    } else {
        console.log("ignition!");
    }
}

console.log("liftoff!");

var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
//PSEUDOCODE!!

// Create a variable called count and set to 0 
var count = 0;
//Create a for loop, start at 0, end at the end of the array, incriment by one
for (var i = 0; i < numbers.length; i++) {
    // Inside the for loop, check to see if the current vbalue is positive
    if(numbers[0] > 0) {
    //If so, then increment count
        count++;
    }
}
//After the loop, print count 
console.log("there are " + countPositives + " positive values");




// your code here!


